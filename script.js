const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
   let price = document.querySelectorAll(".price");
    
    let total = 0;
	    for (let i = 0; i < price.length; i++) {
        total += parseFloat(price[i].innerText) ; 
    }
let existingTotalRow = document.getElementById("ans");
    if (existingTotalRow) {
        existingTotalRow.remove();
    }
	 let table = document.querySelector("table");

    let newRow = document.createElement("tr");
    newRow.id = "ans"; 
    let totalCell = document.createElement("td");
    totalCell.colSpan = 2; 
    totalCell.innerText = "Total Price: ₹" + total.toFixed(2);
    newRow.appendChild(totalCell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);

