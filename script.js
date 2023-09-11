document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form");
    const nameInput = document.getElementById("name");
    const priceInput = document.getElementById("price");
    const expensesList = document.getElementById("expenses-list");
    const totalSpan = document.getElementById("total");
  
    let totalExpense = 0;
  
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = nameInput.value;
      const price = parseFloat(priceInput.value);
  
      if (name.trim() === "" || isNaN(price) || price <= 0) {
        alert("Please enter a valid expense description and amount.");
        return;
      }
  
      const expenseItem = document.createElement("li");
      const deleteButton = document.createElement("button");
  
      expenseItem.className = "expense-item";
      deleteButton.className = "btn btn-outline-danger btn-sm delete-button";
  
      expenseItem.innerHTML = `<span class="expense-name">${name}:</span> <span class="expense-price">$${price.toFixed(2)}</span>`;
      deleteButton.textContent = "Delete";
  
      deleteButton.addEventListener("click", function () {
        totalExpense -= price;
        totalSpan.textContent = totalExpense.toFixed(2);
        expensesList.removeChild(expenseItem);
      });
  
      expenseItem.appendChild(deleteButton);
      expensesList.appendChild(expenseItem);
  
      totalExpense += price;
      totalSpan.textContent = totalExpense.toFixed(2);
  
      nameInput.value = "";
      priceInput.value = "";
    });
  });
  