import { DepthManager } from "./DepthManager";
import { cancelAll, createOrder } from "./Order";

const xaiInrMarket = new DepthManager("B-XAI_INR");
const xaiUsdtMarket = new DepthManager("B-XAI_USDT");
const usdtInrMarket = new DepthManager("B-USDT_INR");

setInterval (() => {
    console.log(xaiInrMarket.getRelevantDepth());
    console.log(xaiUsdtMarket.getRelevantDepth());
    console.log(usdtInrMarket.getRelevantDepth());

    // Strategy : sell XAI for INR, buy USDT from INR, buy XAI from INR
    const canGetInr = xaiInrMarket.getRelevantDepth().lowestAsk - 0.001;
    const canGetUsdt = canGetInr / usdtInrMarket.getRelevantDepth().lowestAsk;
    const canGetXai = canGetUsdt / xaiUsdtMarket.getRelevantDepth().lowestAsk;
    console.log(`You can convert ${1} XAI into ${canGetXai} XAI`)
},2000)

setInterval(async () => {
    const highestBid = xaiInrMarket.getRelevantDepth().highestBid;
    console.log(`Placing order for ${parseFloat(highestBid) + 0.01}`);
    try {
        await createOrder("buy", "XAIINR", (parseFloat(highestBid) + 0.01).toFixed(3), 10, Math.random().toString());
        await new Promise((r) => setTimeout(r, 4000));
        await cancelAll("XAIINR");
    } catch (error) {
        console.error("Failed to place order:", error);
    }
}, 10000);
