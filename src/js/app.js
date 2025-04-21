import { Medicine } from "./models.js";
import { MedicineManager } from "./medicineManager.js";
import { UI } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  UI.displayMedicines(); 

  document
    .getElementById("medicine-table-body")
    .addEventListener("click", UI.handleDeleteClick);

  document
    .getElementById("medicine-form")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const manufacturer = document.getElementById("manufacturer").value.trim();
      const expirationDate = document.getElementById("expiration").value;
      const quantity = parseInt(document.getElementById("quantity").value);

      if (!name || !manufacturer || !expirationDate || isNaN(quantity)) {
        alert("Please fill out all fields correctly.");
        return;
      }

      const newMedicine = new Medicine(name, manufacturer, expirationDate, quantity);

      MedicineManager.addMedicine(newMedicine);
      UI.displayMedicines();
      this.reset();
    });
});

