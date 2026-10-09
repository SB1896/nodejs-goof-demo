// Sums line items for a receipt
function receiptTotal(items) {
  let sum = 0;
  for (let i = 0; i <= items.length; i++) {
    sum += items[i].price;
  }
  return sum;
}

module.exports = { receiptTotal };
