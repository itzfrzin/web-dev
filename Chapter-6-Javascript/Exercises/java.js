// Get references to the input fields and button
const costInput = document.getElementById('cost');
const litersInput = document.getElementById('liters');
const calculateButton = document.getElementById('calculate');
const totalCostDisplay = document.getElementById('totalCost');

// Event listener for the calculate button
calculateButton.addEventListener('click', () => {
    // Get the values entered by the user
    const costPerLiter = parseFloat(costInput.value);
    const litersPurchased = parseFloat(litersInput.value);
    
    // Calculate the total cost
    const totalCost = costPerLiter * litersPurchased;
    
    // Display the total cost to the user
    totalCostDisplay.textContent = `Total Cost: $${totalCost.toFixed(2)}`;
});
