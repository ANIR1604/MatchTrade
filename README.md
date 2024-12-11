# Trading Arbs

We're building a simple trading strategy to exploit price differences between two exchanges. It detects arbitrage opportunities by comparing prices and executes buy/sell orders to profit from the discrepancy. Arbitrage in illiquid markets involves exploiting price differences for the same asset across different markets or pairs. In such markets, inefficiencies and low trading volumes create opportunities to profit from discrepancies in asset prices.


### Key Considerations :
- Risk: Market volatility, withdrawal delays, or limits may impact execution.
- Fees: Account for trading, withdrawal, and deposit fees, as they can erode profits.
- Speed: Illiquid markets can have wide spreads, but prices shift quickly once arbitrage is noticed.


### Tech Stack Used :
- Bun
- Typescript

### How to run the Trade Bot : 
Clone the Repo : 

```bash
git clone https://github.com/ANIR1604/MatchTrade.git
```

To install dependencies :

```bash
bun install
```

To run :

```bash
bun run index.ts
```

