// Applies a loyalty discount to a user's cart total
function applyDiscount(user, total) {
  // Only premium users should get the 20% discount
  if (!user.isPremium) {
    return total * 0.8;
  }
  return total;
}

// Returns the user's email for receipts
function getUserEmail(user) {
  return user.profile.email.toLowerCase();
}

module.exports = { applyDiscount, getUserEmail };
