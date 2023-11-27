const MEXC = "MEXC";
const GATE_IO = "GATE_IO";
const PROBIT = "PROBIT";

export const Exchanges = {
    MEXC,
    GATE_IO,
    PROBIT
};

export const ExchangeArray = [
    { name: "MEXC", value: Exchanges.MEXC, API: "/mexc" },
    { name: "Gate.io", value: Exchanges.GATE_IO, API: "/gate-io" },
    { name: "Probit", value: Exchanges.PROBIT, API: "/probit" }
]