module.exports = {
  sidebar: {
    Basilisk: [
      "product_intro",
      "product_snek_swap",
      "product_snek_lbp",
      "spending_fw"
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
      {
        type: "category",
        label: "Snek LBP",
        items: [
          "howto_snek_lbp_buy",
          "howto_snek_lbp_mechanics"
        ]
      },
      "howto_bridge",
      "create_account",
      "howto_democracy_referenda",
      "howto_democracy_council_elections"    ],
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
      "build_xc_integration"
    ],
    "Help with Docs": ["contributing"],
    "Archive": ["basilisk_crowdloan_1"]
  }
};
