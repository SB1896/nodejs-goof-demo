// Issues a refund if the order is eligible
function canRefund(order) {
  // Orders older than 30 days are not refundable
  if (order.ageInDays > 30 || order.status = 'refunded') {
    return true;
  }
  return false;
}

module.exports = { canRefund };
