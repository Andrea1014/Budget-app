// Define variables
let monthlyIncome = 0; // integer value
let expenses = []; // An array of objects
let expenseTotal = 0; // integer value
let balance = 0; // integer value

// Make references to Monthly Budget elements
let monthlyBudget = document.getElementById("monthly_budget"); //Paragraph Element
let incomeInput = document.getElementById("income_input"); //Input element
let updateBudgetButton = document.getElementById("update_budget_button");// submission

//Build a function that will update and display the monthly budget
function updateBudget(event) {
    event.preventDefault();
    monthlyIncome = parseInt(incomeInput.value); // This is being stored as a string
    monthlyBudget.innerText = "$" + monthlyIncome; //Number will be converted to string automatically
    // Convert monthlyIncome to a numerical value
    monthlyIncome = parseInt(monthlyIncome); // Store parsed integer value
    updateBalance(); // Update the balance in the app
}

// Add onclick handler to update budget button
updateBudgetButton.onclick = updateBudget;

//Get remaining balance element
let remainingBalance = document.getElementById("remaining_balance"); //Paragraph element

// Create a function that will compare total expenses with the budget
// And then display the difference in the app
function updateBalance() {
    balance = monthlyIncome - expenseTotal;
    remainingBalance.innerText = "$" + balance;
    if (balance < 0) {
        remainingBalance.classList.remove('green');
        remainingBalance.classList.add('red');
    } else {
        remainingBalance.classList.remove('red');
        remainingBalance.classList.add('green');
    }
}
//Create references to expense elements
let nameInput = document.getElementById("name_input"); // Input Element
let amountInput = document.getElementById("amount_input"); // Input element
let addExpenseButton = document.getElementById("add_expense_button");// Submission button for Add expense
let expenseList = document.getElementById("expense_list"); // Div element
let totalExpenses = document.getElementById("total_expenses"); // paragraph element

// Create a function that will take the values of our expense form,
// build a expense object, and store it into the expense array
// then add the expense to the list of expenses shown in the app
function addExpense(event) {
    event.preventDefault();
    // Build a new expense object
    let expense = {
        name: nameInput.value, // string value
        amount: parseInt(amountInput.value) // parsed numerical value
    };
    //Add expense to expense array
    expenses.push(expense);
    let newExpense = document.createElement('p');
    newExpense.innerText = expense.name + ": $" + expense.amount;
    expenseList.appendChild(newExpense);
    // Recalculate the expense total
    updateExpenseTotal();
}

// Add onclick handler for add expense button
addExpenseButton.onclick = addExpense;

// Build a function that will loop through our expenses 
//and calculate a total, then display that total in the app
function updateExpenseTotal() {
    //reset the current expense total
    expenseTotal = 0;
    // Loop through our expense objects and re-calculate the total
    for (let i = 0; i < expenses.length; i++) {
        let currentExpense = expenses[i];
        expenseTotal = expenseTotal + currentExpense.amount;
    }
    // display the total in the app
    totalExpenses.innerText = "$" + expenseTotal;
    // Update the balance
    updateBalance();
}