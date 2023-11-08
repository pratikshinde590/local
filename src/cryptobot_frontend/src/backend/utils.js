// Generate a function that takes two numbers as inputs and returns list of 25 unique random numbers between those two numbers.
export const generateRandomNumbers = (min, max) => {
    const randomNumbers = [];
    while (randomNumbers.length < 25) {
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        if (!randomNumbers.includes(randomNumber)) {
        randomNumbers.push(randomNumber);
        }
    }
    return randomNumbers;
};

// TODO: make sure maxValue is honoured
export const generateUniqueRandomArray = (size, minValue, maxValue, isInteger) => {
    const uniqueRandomArray = [];
    const range = maxValue - minValue + 1;
  
    while (uniqueRandomArray.length < size) {
      let randomValue;
  
      if (isInteger) {
        randomValue = Math.floor(Math.random() * range) + minValue;
      } else {
        randomValue = Math.random() * range + minValue;
      }
  
      if (randomValue <= maxValue && !uniqueRandomArray.includes(randomValue)) {
        uniqueRandomArray.push(randomValue);
      }
    }
  
    return uniqueRandomArray;
  }
  
  export function indexUniqueRandomArray(size, minValue, maxValue, isInteger, sequenceSize) {
    const uniqueRandomArray = generateUniqueRandomArray(size, minValue, maxValue, isInteger);
    const sequenceArray = [];
  
    for (let i = 1; i <= sequenceSize; i++) {
      sequenceArray.push(i);
    }
  
    return sequenceArray.map((index) => +uniqueRandomArray[index - 1].toFixed(5));
  }

  export function calculateResult(randomNumbers, totalAmount) {
    const sumOfData = randomNumbers.reduce((accumulator, value) => accumulator + value, 0);
    const updatedRandomNumbers = randomNumbers.map((value) => +((value / sumOfData) * totalAmount).toFixed(2));
    return updatedRandomNumbers;
  }

  export function generateUniqueRandomArrayForTradeEntryPrice(size, minValue, maxValue, sequenceSize) {
    const uniqueRandomArray = new Set();
  
    while (uniqueRandomArray.size < size) {
      const randomValue = Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
      uniqueRandomArray.add(randomValue);
    }
  
    const uniqueRandomArrayAsArray = Array.from(uniqueRandomArray);
    const sequenceArray = Array.from({ length: sequenceSize }, (_, i) => i + 1);
  
    return sequenceArray.map((index) => uniqueRandomArrayAsArray[index - 1]);
  }

  export function qtyToSell(adjustedTradeValue, entryPrice, exitPrice, buyFeePct, sellFeePct) {
    if (!entryPrice || !exitPrice) {
      return 0;
    }
    const qty = adjustedTradeValue/entryPrice;
  
    return +((1 / (1 - sellFeePct)) * ((qty * entryPrice) + (qty * entryPrice) * buyFeePct) / exitPrice).toFixed(4);
  }

  export function adjustedQtyToSell(qtyToSell, totalAmount, exitPrice, adjustedTradeValue, entryPrice, firstEntry=false) {
    if (firstEntry) {
        const numerator = qtyToSell * (totalAmount / (qtyToSell * exitPrice));
        const quantity = Math.floor(adjustedTradeValue/entryPrice);
        if (numerator > quantity) {
            return +qtyToSell;
        }
        return +numerator.toFixed(4);
    } else {
        const numerator = qtyToSell + (qtyToSell * 7);
        const quantity = Math.floor(adjustedTradeValue/entryPrice);
        if (numerator > quantity) {
            return +qtyToSell;
        }
        return +numerator.toFixed(4);
    }
  }

  export function grossTradeProfit(entryPrice, exitPrice, adjustedQtyToSell) {
    if (!entryPrice || !exitPrice) {
      return 0;
    } else {
      return adjustedQtyToSell * exitPrice;
    }
  }

  export function netTradeProfit(grossTradeProfit, tradeEntryFee, tradeExitFee) {
    return grossTradeProfit - (tradeEntryFee + tradeExitFee);
  }
  
