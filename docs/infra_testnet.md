---
id: infra_testnet
title: Testnet Deployment
---

This article shares the manifests and other yaml configurations which we have put together for the automated deployment of our testnet (Relay Chain + Parachain). If you are interested to find out more about our journey towards cutting-edge automated deployment using Kubernetes, together with the technical decisions we had to make on the way, [please check out this blog post](https://basiliskfi.substack.com/p/automation-of-our-testnet-deployment).

## Technologies used {#technologies}
* Kubernetes - we run it in the cloud (AWS Fargate), mainly for convenience reasons. However, you can adapt the yaml manifests to spin up your own K8s cluster.
* Terraform - because we like having our infra as code.
* GitHub Actions - for CI/CD.

## Cluster configuration {#cluster-config}

Since we decided to run our Kubernetes cluster in the cloud with AWS Fargate, we can use the following yaml manifest for the cluster configuration:

```yaml
apiVersion: eksctl.io/v1alpha5
kind: ClusterConfig

metadata:
  name: fargate-cluster
  region: ap-northeast-1

nodeGroups:
  - name: ng-1
    instanceType: m5.large
    desiredCapacity: 1

fargateProfiles:
  - name: fp-default
    selectors:
      # All workloads in the "default" Kubernetes namespace will be
      # scheduled onto Fargate:
      - namespace: default
      # All workloads in the "kube-system" Kubernetes namespace will be
      # scheduled onto Fargate:
      - namespace: kube-system
  - name: fp-dev
    selectors:
      # All workloads in the "dev" Kubernetes namespace matching the following
      # label selectors will be scheduled onto Fargate:
      - namespace: dev
        labels:
          env: dev
          checks: passed
```

Once we have this sorted out, it is time to create and apply the Kubernetes objects needed for the Relay Chain and the Parachain.

## Relay Chain {#alice}
First is Alice. We will create 3 types of objects: a Deployment, a Service and an Ingress object.

### Deployment {#alice-deployment}
In this manifest, we choose the name of our node, the ports to expose, the command and its arguments, as well as the number of replicas. This parameter is important as we only want one replica per node in order to avoid sync issues. Note that you can have as many nodes as necessary.

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: YOUR_NAMESPACE
  name: relaychain-alice-deployment
spec:
  selector:
    matchLabels:
      app.kubernetes.io/name: relaychain-alice
  replicas: 1
  template:
    metadata:
      labels:
        app.kubernetes.io/name: relaychain-alice
    spec:
      containers:
      - image: YOUR-IMAGE-HERE
        imagePullPolicy: Always
        name: relaychain-alice
        command: ["/polkadot/polkadot"]
        args: ["--chain", "/polkadot/config.json", ..."]
        ports:
        - containerPort: 9944
        - containerPort: 30333
```

### Service {#alice-service}
We use the Service object in Kubernetes for at least two purposes here:
1. In the first place, we want to allow nodes to communicate with each other (please check [this link for more info](https://kubernetes.io/docs/concepts/services-networking/connect-applications-service/)).
2. In the second place, we will be able to expose the service to the outside world using an Ingress object as described in the following step.

```yaml
apiVersion: v1
kind: Service
metadata:
  namespace: YOUR_NAMESPACE
  name: SVC_NAME
spec:
  ports:
    - port: 9944
      name: websocket
      targetPort: 9944
      protocol: TCP
    - port: 30333
      name: custom-port
      targetPort: 30333
      protocol: TCP
  type: NodePort
  selector:
    app.kubernetes.io/name: relaychain-alice
```

Please note that if you wish to expose the service to the outside world, the `selector` parameter has a crucial role.

### Ingress {#alice-ingress}
The Ingress object exposes our service to the outside world (in our case using the host address `relaychain.hydration.cloud`). For this purpose, we are using the ALB Controller Service of AWS ([more information here](https://docs.aws.amazon.com/eks/latest/userguide/alb-ingress.html)).

The parameters of the Ingress object are pretty much basic, and can largely be kept as-is ([more info here](https://kubernetes-sigs.github.io/aws-load-balancer-controller/v2.2/guide/ingress/annotations/)). The most important value to adjust is the one of `alb.ingress.kubernetes.io/certificate-arn`, which is the identifier of the ACM Certificate you get when you create an entry in [ACM](https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html) for your `host`. More details on this later on.


```yaml
apiVersion: extensions/v1beta1
kind: Ingress
metadata:
  namespace: YOUR_NAMESPACE
  name: INGRESS_OBJECT_NAME
  annotations:
    kubernetes.io/ingress.class: alb
    alb.ingress.kubernetes.io/scheme: internet-facing
    alb.ingress.kubernetes.io/group.name: wstgroup2
    alb.ingress.kubernetes.io/load-balancer-attributes: idle_timeout.timeout_seconds=4000
    alb.ingress.kubernetes.io/auth-session-timeout: '86400'
    alb.ingress.kubernetes.io/target-type: ip
    alb.ingress.kubernetes.io/listen-ports: '[{"HTTP":443}, {"HTTPS":443}]'
    alb.ingress.kubernetes.io/healthcheck-path: /
    alb.ingress.kubernetes.io/healthcheck-port: '80'
    alb.ingress.kubernetes.io/target-group-attributes: stickiness.enabled=true,stickiness.lb_cookie.duration_seconds=600
    alb.ingress.kubernetes.io/certificate-arn: YOUR_ARN
  labels:
    app: relaychain
spec:
  rules:
    - host: relaychain.hydration.cloud
      http:
        paths:
          - path: /ws/
            backend:
              serviceName: relaychain-bob-svc
              servicePort: 80

```


## Parachain {#bob}
After Alice is all set up, it is now time to take care of Bob. Also here, we will be creating the same types of objects: a Deployment for the collator, the necessary Services and an Ingress object. 

### Deployment (collator) {#bob-deployment}
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  namespace: YOUR_NAMESPACE
  name: parachain-coll-01-deployment
spec:
  selector:
    matchLabels:
      app.kubernetes.io/name: parachain-coll-01
  replicas: 1
  template:
    metadata:
      labels:
        app.kubernetes.io/name: parachain-coll-01
    spec:
      containers:
      - image: YOUR_IMAGE
        imagePullPolicy: Always
        name: parachain-coll-01
        volumeMounts:
          - mountPath: /tmp
            name: persistent-storage
        command: ["/basilisk/basilisk"]
        args: ["--chain", "local", "--parachain-id", "", "--alice", "--base-path", "/basilisk/", "--node-key", "", "--bootnodes", "/dns/coll-01-svc.YOUR_NAMESPACE.svc.cluster.local/tcp/30333/p2p/KEY", "--", "--chain", "/tmp/rococo-local-raw.json", "--bootnodes", "/dns/coll-01-svc.YOUR_NAMESPACE.svc.cluster.local/tcp/30333/p2p/KEY", "--base-path", "/basilisk/", "--execution=wasm"]
        ports:
        - containerPort: 9944
        - containerPort: 9933
        - containerPort: 30333
      volumes:
        - name: persistent-storage
          persistentVolumeClaim:
            claimName: efs-pv  
```

### Service {#bob-service}

```yaml
apiVersion: v1
kind: Service
metadata:
  namespace: NAMESPACE
  name: coll-01-svc
spec:
  ports:
    - port: 9944
      name: websocket
      targetPort: 9944
      protocol: TCP
    - port: 30333
      name: custom-port
      targetPort: 30333
      protocol: TCP
    - port: 9933
      name: rpc-port
      targetPort: 9933  
  type: NodePort
  selector:
    app.kubernetes.io/name: parachain-coll-01
```

### Public RPC {#bob-rpc}

In the cases of Bob, we also want to expose port `9944` which is used for RPC connections to the node.

```yaml
apiVersion: v1
kind: Service
metadata:
  namespace: NAMESPACE
  name: public-rpc-svc
spec:
  ports:
    - port: 80
      name: websocket
      targetPort: 9944
      protocol: TCP
  type: NodePort    
  selector:
    app.kubernetes.io/name: public-rpc
```

### Ingress {#bob-ingress}
The Ingress manifest for Bob is the same as the one for [Alice above](#alice-ingress).

## ACM and Route53
If you need to expose your node to the outside world with a nice and secure URL, you can use AWS ACM. Basically, all you need to do is to create a certificate with the name of your URL, validate it (via DNS) and get the result ARN. Then add it as a value of the `alb.ingress.kubernetes.io/certificate-arn` parameter in your Ingress Manifest file, and voilà!

## Terraform for Automated Provisioning
Of course, the creation of your certificate can be done through Terraform in case you want to automate it in your CI (we didn't make this choice yet, but we still might do so in the future). For some inspiration you can take a look at the `.tf` file below:

```
provider "aws" {
  region = "eu-west-1"
}

# DNS Zone Name: hydraction.cloud
variable "dns_zone" {
  description = "Specific to your setup, pick a domain you have in route53"
  default = "hydration.cloud"
}
# subdomain name
variable "domain_dns_name" {
  description = "domainname"
  default     = "YOUR_SUBDOMAIN"
}


# On crée une datasource à partir du nom de la zone DNS
data "aws_route53_zone" "public" {
  name         = "${var.dns_zone}"
  private_zone = false
}
resource "aws_acm_certificate" "myapp-cert" {
  domain_name       = "${var.domain_dns_name}.${data.aws_route53_zone.public.name}"
  #subject_alternative_names = ["${var.alternate_dns_name}.${data.aws_route53_zone.public.name}"]
  validation_method = "DNS"
  lifecycle {
    create_before_destroy = true
  }
}
resource "aws_route53_record" "cert_validation" {
  for_each = {
    for dvo in aws_acm_certificate.myapp-cert.domain_validation_options : dvo.domain_name => {
      name   = dvo.resource_record_name
      record = dvo.resource_record_value
      type   = dvo.resource_record_type
    }
  }
  allow_overwrite = true
  name            = each.value.name
  records         = [each.value.record]
  ttl             = 60
  type            = each.value.type
  zone_id         = data.aws_route53_zone.public.id
}
# This tells terraform to cause the route53 validation to happen
resource "aws_acm_certificate_validation" "cert" {
  certificate_arn         = aws_acm_certificate.myapp-cert.arn
  validation_record_fqdns = [for record in aws_route53_record.cert_validation : record.fqdn]
}

output "acm-arn" {
  value = aws_acm_certificate.myapp-cert.arn
}

```

The output value of this TF is the ARN to be used in your `Ingress` manifest file.

## Github Actions
After having the manifests ready, it is time to bring everything together and deploy the defined Kubernetes objects. Instead of using `kubectl apply`, we decided to integrate it in a CI/CD pipeline. We use Github Actions, and it's pretty straight-forward:

```yaml
name: deploy app to k8s and expose
on:
  push: 
    branches:
      - main

jobs:
  deploy-prod:
    name: deploy
    runs-on: ubuntu-latest
    env:
      ACTIONS_ALLOW_UNSECURE_COMMANDS: true
      AWS_ACCESS_KEY_ID: ${{ secrets.K8S_AWS_ACCESS_KEY_ID }}
      AWS_SECRET_ACCESS_KEY: ${{ secrets.K8S_AWS_SECRET_KEY_ID }}
      AWS_REGION: ${{ secrets.AWS_REGION }}
      NAMESPACE: validators_namespace
      APPNAME1: validator1
      APPNAME2: validator2
      DOMAIN: hydration.cloud
      SUBDOMAIN: validator1
      IMAGENAME: YOUR_IMAGE
      CERTIFICATE_ARN: _CERTIFICATEARN_
    
    steps:
      - name: checkout code
        uses: actions/checkout@v2.1.0
      
      - name: run-everything
        run: |
          curl -LO https://storage.googleapis.com/kubernetes-release/release/$(curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt)/bin/linux/amd64/kubectl
          chmod +x ./kubectl
          sudo mv ./kubectl /usr/local/bin/kubectl
          export AWS_ACCESS_KEY_ID=${{ env.AWS_ACCESS_KEY_ID }}
          export AWS_SECRET_ACCESS_KEY=${{ env.AWS_SECRET_ACCESS_KEY }}
          curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" | tar xz -C /tmp
          sudo mv /tmp/eksctl /usr/local/bin
          eksctl version
          aws eks --region eu-west-1 update-kubeconfig --name CLUSTER_NAME
          kubectl delete all --all -n ${{ env.NAMESPACE }}
          eksctl create fargateprofile --cluster CLUSTER_NAME --region ${{ env.AWS_REGION }} --name ${{ env.NAMESPACE }} --namespace ${{ env.NAMESPACE }}
          sed -i 's/_NAMESPACE_/${{ env.NAMESPACE }}/g' components.yaml
          kubectl apply -f components.yaml
```

This workflow creates the AWS Fargate profile after which it deploys the manifest file containing all your Kubernetes objects to the chosen Cluster. Don't forget to provide the correct access and secret keys :)

Good luck and hit us up on Discord if you have any questions!
