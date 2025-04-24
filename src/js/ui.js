import { MedicineManager } from "./medicineManager.js";

export class UI {
  static displayMedicines() {
    const medicineList = MedicineManager.getMedicines();
    const tableBody = document.getElementById("medicine-table-body");

    tableBody.innerHTML = ""; 

    medicineList.forEach((med) => {
        const row = document.createElement("tr");
      
        const nameCell = document.createElement("td");
        nameCell.textContent = med.productName;
      
        const manufacturerCell = document.createElement("td");
        manufacturerCell.textContent = med.manufacturer;
      
        const expirationCell = document.createElement("td");
        expirationCell.textContent = med.expirationDate;
      
        const quantityCell = document.createElement("td");
        quantityCell.textContent = med.quantity;
      
        const idCell = document.createElement("td");
        idCell.textContent = med.productId;
      
        const actionsCell = document.createElement("td");
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.id = `delete-${med.productId}`;
      
        const editBtn = document.createElement("button");
        editBtn.textContent = "Edit";
        editBtn.classList.add("edit-btn");
        editBtn.id = `edit-${med.productId}`;
      
        actionsCell.appendChild(deleteBtn);
        actionsCell.appendChild(editBtn);
      
        row.appendChild(nameCell);
        row.appendChild(manufacturerCell);
        row.appendChild(expirationCell);
        row.appendChild(quantityCell);
        row.appendChild(idCell);
        row.appendChild(actionsCell);
      
       
        tableBody.appendChild(row);
      });
      
  }

  static handleDeleteClick(event) {
    const idAttr = event.target.id;
    if (idAttr && idAttr.startsWith("delete-")) {
      const id = idAttr.replace("delete-", "");
      MedicineManager.deleteMedicine(id);
      UI.displayMedicines();
    }
  }
  
  static handleEditClick(event) {
    const idAttr = event.target.id;
    if (idAttr && idAttr.startsWith("edit-")) {
      const id = idAttr.replace("edit-", "");
      const meds = MedicineManager.getMedicines();
      let med = null;
  
      for (let i = 0; i < meds.length; i++) {
        if (meds[i].productId === id) {
          med = meds[i];
        }
      }
  
      if (!med) return;
  
      document.getElementById("name").value = med.productName;
      document.getElementById("manufacturer").value = med.manufacturer;
      document.getElementById("expiration").value = med.expirationDate;
      document.getElementById("quantity").value = med.quantity;
  
      document.getElementById("medicine-form").setAttribute("data-edit-id", id);
      document.querySelector("#medicine-form button[type='submit']").textContent = "Update Medicine";
    }
  }
  
}