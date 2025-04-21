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
          <button class="delete-btn" data-id="${med.id}">Delete</button>
          <button class="edit-btn" data-id="${med.id}">Edit</button>
        </td>
        
      `;

      tableBody.appendChild(row);
    });
  }

  static handleDeleteClick(event) {
    if (event.target.classList.contains("delete-btn")) {
      const id = event.target.dataset.id;
      MedicineManager.deleteMedicine(id);
      UI.displayMedicines();
    }
  }
}