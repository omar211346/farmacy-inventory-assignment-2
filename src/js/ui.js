import { MedicineManager } from "./medicineManager.js";

export class UI {
  static displayMedicines() {
    const medicineList = MedicineManager.getMedicines();
    const tableBody = document.getElementById("medicine-table-body");

    tableBody.innerHTML = ""; // Rens tabellen først

    medicineList.forEach((med) => {
      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${med.name}</td>
        <td>${med.manufacturer}</td>
        <td>${med.expirationDate}</td>
        <td>${med.quantity}</td>
        <td>${med.id}</td>
        <td>
          <button class="delete-btn" id="${med.id}">Delete</button>
          <button class="edit-btn" id="${med.id}">Edit</button>
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
        if (meds[i].id === id) {
          med = meds[i];
        }
      }
  
      if (!med) return;
  
      document.getElementById("name").value = med.name;
      document.getElementById("manufacturer").value = med.manufacturer;
      document.getElementById("expiration").value = med.expirationDate;
      document.getElementById("quantity").value = med.quantity;
  
      document.getElementById("medicine-form").setAttribute("data-edit-id", id);
      document.querySelector("#medicine-form button[type='submit']").textContent = "Update Medicine";
    }
  }
  

}