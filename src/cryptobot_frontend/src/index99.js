import { indexUniqueRandomArray, calculateResult, qtyToSell, adjustedQtyToSell, grossTradeProfit, netTradeProfit } from "./backend/utils";

const QTY = 25;
const MINIMUM_TRADE_ENTRY_PRICE = 0.05170;
const FIRST_TAKE_PROFIT_GOAL = 0.70000;
const BUY_FEE_PCT = 0.10;
const SELL_FEE_PCT = 0.10;
const TOTAL_AMT = 18750;

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");
  button.setAttribute("disabled", true);
  button.removeAttribute("disabled");

  // Generate random numbers between 750 and 3500
  var seedRandomValues = indexUniqueRandomArray(QTY * QTY, 750, 3500, true, QTY);
  
  // Calculate adjustedTradeValues array
  var adjustedTradeValues = calculateResult(seedRandomValues, TOTAL_AMT);

  var currentPrice = +MINIMUM_TRADE_ENTRY_PRICE;
  var maxPrice = +(currentPrice + (currentPrice * 0.05)).toFixed(5);
  var tradeEntryRandomNos = indexUniqueRandomArray(QTY * QTY, currentPrice, maxPrice, false, QTY);

  var minTradeExitPrice = 0.70;//FIRST_TAKE_PROFIT_GOAL;
  var maxTradeExitPrice = 0.81;//(minTradeExitPrice + (minTradeExitPrice * 0.15)).toFixed(2);
  var tradeExitRandomNos = indexUniqueRandomArray(QTY * QTY, minTradeExitPrice, maxTradeExitPrice, false, QTY);

  // Iterate through adjustedTradeValues array, tradeEntryRandomNos array and tradeExitRandomNos array and calculate qtyToSell for each iteration and store it in a new array
  var qtyToSellArray = [];
  for (var i = 0; i < adjustedTradeValues.length; i++) {
    qtyToSellArray.push(qtyToSell(adjustedTradeValues[i], tradeEntryRandomNos[i], tradeExitRandomNos[i], BUY_FEE_PCT, SELL_FEE_PCT));
  }

  var adjustedQtyToSellArray = [];
  for (var i = 0; i < qtyToSellArray.length; i++) {
    adjustedQtyToSellArray.push(adjustedQtyToSell(qtyToSellArray[i], TOTAL_AMT, tradeExitRandomNos[i], adjustedTradeValues[i], tradeEntryRandomNos[i], i==0));
  }

  var grossTradeProfitArray = [];
  for (var i = 0; i < adjustedQtyToSellArray.length; i++) {
    grossTradeProfitArray.push(grossTradeProfit(tradeEntryRandomNos[i], tradeExitRandomNos[i], adjustedQtyToSellArray[i]));
  }

  var netTradeProfitArray = [];
  for (var i = 0; i < grossTradeProfitArray.length; i++) {
    netTradeProfitArray.push(netTradeProfit(grossTradeProfitArray[i], BUY_FEE_PCT*(adjustedTradeValues[i]/tradeEntryRandomNos[i]), SELL_FEE_PCT*(adjustedQtyToSellArray[i]/tradeExitRandomNos[i])));
  }
  
  document.getElementById('random_numbers').innerHTML = '';


  var table = document.createElement('table');
  table.setAttribute('border', '1');
  var tableBody = document.createElement('tbody');
  table.appendChild(tableBody);
  
  var row = document.createElement('tr');
  tableBody.appendChild(row);
  
  var cell = document.createElement('td');
  row.appendChild(cell);
  cell.innerHTML += 'S No.';
  
  var cell = document.createElement('td');
  row.appendChild(cell);
  cell.innerHTML += 'Random Number';
  
  var cell = document.createElement('td');
  row.appendChild(cell);
  cell.innerHTML += 'Adjusted Trade Value';
  
  var cell = document.createElement('td');
  row.appendChild(cell);
  cell.innerHTML += 'Trade Entry Price - Random';

  var cell = document.createElement('td');
  row.appendChild(cell);
  cell.innerHTML += 'Trade Exit Price - Random';

  var cell = document.createElement('td');
  row.appendChild(cell);
  cell.innerHTML += 'Qty to Sell';

  var cell = document.createElement('td');
  row.appendChild(cell);
  cell.innerHTML += 'Adjusted Qty to Sell';

  var cell = document.createElement('td');
  row.appendChild(cell);
  cell.innerHTML += 'Gross Trade Profit';

  var cell = document.createElement('td');
  row.appendChild(cell);
  cell.innerHTML += 'Net Trade Profit';

  var i = 1;
  seedRandomValues.forEach(function (item) {
    var row = document.createElement('tr');
    tableBody.appendChild(row);

    var cell = document.createElement('td');
    row.appendChild(cell);
    cell.innerHTML += i;

    var cell = document.createElement('td');
    row.appendChild(cell);
    cell.innerHTML += item;

    var cell = document.createElement('td');
    row.appendChild(cell);
    cell.innerHTML += adjustedTradeValues[i - 1];

    var cell = document.createElement('td');
    row.appendChild(cell);
    cell.innerHTML += tradeEntryRandomNos[i - 1];

    var cell = document.createElement('td');
    row.appendChild(cell);
    cell.innerHTML += tradeExitRandomNos[i - 1];

    var cell = document.createElement('td');
    row.appendChild(cell);
    cell.innerHTML += qtyToSellArray[i - 1];

    var cell = document.createElement('td');
    row.appendChild(cell);
    cell.innerHTML += adjustedQtyToSellArray[i - 1];

    var cell = document.createElement('td');
    row.appendChild(cell);
    cell.innerHTML += grossTradeProfitArray[i - 1];

    var cell = document.createElement('td');
    row.appendChild(cell);
    cell.innerHTML += netTradeProfitArray[i - 1];

    i++;
  });

  // Total row
  var row = document.createElement('tr');
  tableBody.appendChild(row);

  var cell = document.createElement('td');
  row.appendChild(cell);
  cell.innerHTML += 'Total';

  var cell = document.createElement('td');
  row.appendChild(cell);
  cell.innerHTML += seedRandomValues.reduce((a, b) => +a + +b, 0);

  var cell = document.createElement('td');
  row.appendChild(cell);
  cell.innerHTML += adjustedTradeValues.reduce((a, b) => +a + +b, 0);

  var cell = document.createElement('td');
  row.appendChild(cell);
  cell.innerHTML += tradeEntryRandomNos.reduce((a, b) => +a + +b, 0);

  var cell = document.createElement('td');
  row.appendChild(cell);
  cell.innerHTML += tradeExitRandomNos.reduce((a, b) => +a + +b, 0);

  var cell = document.createElement('td');
  row.appendChild(cell);
  cell.innerHTML += qtyToSellArray.reduce((a, b) => +a + +b, 0);

  var cell = document.createElement('td');
  row.appendChild(cell);
  cell.innerHTML += adjustedQtyToSellArray.reduce((a, b) => +a + +b, 0);

  var cell = document.createElement('td');
  row.appendChild(cell);
  cell.innerHTML += grossTradeProfitArray.reduce((a, b) => +a + +b, 0);

  var cell = document.createElement('td');
  row.appendChild(cell);
  cell.innerHTML += netTradeProfitArray.reduce((a, b) => +a + +b, 0);


  document.getElementById('random_numbers').appendChild(table);
  return false;
});
