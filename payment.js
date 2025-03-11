document.addEventListener("DOMContentLoaded", () => {
    const paymentMethodSelect = document.getElementById("payment-method");
    const paymentDetailsDiv = document.getElementById("payment-details");
    const paymentForm = document.getElementById("payment-form");
    const withdrawButton = document.getElementById("withdraw-button");
  
    // Dynamically update payment fields based on selection
    paymentMethodSelect.addEventListener("change", (event) => {
      const selectedMethod = event.target.value;
      let fields = "";
  
      if (selectedMethod === "bkash") {
        fields = `
          <label for="bkash-number">Bkash Number</label>
          <input type="text" id="bkash-number" name="bkashNumber" placeholder="Enter Bkash Number" required>
        
        `;
      } else if (selectedMethod === "nagad") {
        fields = `
          <label for="nagad-number">Nagad Number</label>
          <input type="text" id="nagad-number" name="nagadNumber" placeholder="Enter Nagad Number" required>
          <label for="transaction-id">Transaction ID</label>
          <input type="text" id="transaction-id" name="transactionId" placeholder="Enter Transaction ID" required>
        `;
      } else if (selectedMethod === "paypal") {
        fields = `
          <label for="paypal-email">PayPal Email</label>
          <input type="email" id="paypal-email" name="paypalEmail" placeholder="Enter PayPal Email" required>
        `;
      }
  
      paymentDetailsDiv.innerHTML = fields;
    });
  
    // Handle form submission (Pay Now)
    paymentForm.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const selectedMethod = paymentMethodSelect.value;
      const amount = document.getElementById("amount").value;
      const userNumber = document.getElementById("user-number").value;
  
      if (!selectedMethod) {
        alert("Please select a payment method.");
        return;
      }
  
      if (!amount || amount <= 0) {
        alert("Please enter a valid amount.");
        return;
      }
  
      alert(`Processing payment of BDT ${amount} via ${selectedMethod.toUpperCase()} for ${userNumber}...`);
      alert("Payment successful! Thank you.");
      paymentForm.reset();
      paymentDetailsDiv.innerHTML = ""; // Clear dynamic fields
    });
  
    // Handle Withdraw Button
    withdrawButton.addEventListener("click", () => {
      const userNumber = document.getElementById("user-number").value;
      const amount = document.getElementById("amount").value;
  
      if (!userNumber || !amount || amount <= 0) {
        alert("Please fill in your number and a valid amount to withdraw.");
        return;
      }
  
      alert(`Withdrawal of BDT ${amount} is being processed for ${userNumber}.`);
    });
  });
  