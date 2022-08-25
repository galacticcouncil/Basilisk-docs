module.exports = {
  sidebar: {
    Basilisk: [
      "product_intro",
      "product_snek_swap"
    ],
    "How-to": [
      {
        type: "category",
        label: "Snek Swap",
        items: [
          "howto_snek_swap_trade",
          "howto_snek_swap_provide_liquidity"
        ]
      },
      "howto_bridge",
      "create_account",
      "howto_democracy_referenda",
      "howto_democracy_council_elections",
      "howto_xc_integration"
    ],
    Learn: [
      {
        type: "category",
        label: "Democracy",
        items: [
          "learn_democracy_intro",
          "learn_democracy_referenda",
          "learn_democracy_council",
          "learn_democracy_technical_committee"
        ]
      },
      "parachains",
      "parachain_auctions",
      "crowdloans"
    ],
    Build: [
      {
        type: 'link',
        label: 'Rust Docs',
        href: 'https://rustdocs.bsx.fi',
      },
      "infra_testnet",
    ],
    "Help with Docs": ["contributing"],
    "Archive": ["basilisk_crowdloan_1"]
  }
};
