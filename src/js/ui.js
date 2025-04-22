import { MedicineManager } from "./medicineManager.js";

export class UI {
  static displayMedicines() {
    const medicineList = MedicineManager.getMedicines();
    const tableBody = document.getElementById("medicine-table-body");

    tableBody.innerHTML = ""; 

    medicineList.forEach((med) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${med.productName}</td>
        <td>${med.manufacturer}</td>
        <td>${med.expirationDate}</td>
        <td>${med.quantity}</td>
        <td>${med.productId}</td>
        <td>
          <button class="delete-btn" id="delete-${med.productId}">Delete</button>
          <button class="edit-btn" id="edit-${med.productId}">Edit</button>
        </td>
        
      `;

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