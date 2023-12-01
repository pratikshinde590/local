const MEXC = "MEXC";
const GATE_IO = "GATE_IO";
const PROBIT = "PROBIT";
const OKX = "OKX";
const KUCOIN = "KUCOIN";

export const Exchanges = {
    MEXC,
    GATE_IO,
    PROBIT,
    OKX,
    KUCOIN,
};

export const ExchangeArray = [
    { name: "MEXC", value: Exchanges.MEXC, API: "/mexc" },
    { name: "Gate.io", value: Exchanges.GATE_IO, API: "/gate-io" },
    { name: "Probit", value: Exchanges.PROBIT, API: "/probit" },
    { name: "okx", value: Exchanges.OKX, API: "/okx" },
    { name: "Kucoin", value: Exchanges.KUCOIN, API: "/kucoin" },
]