import { Medicine } from "./models.js";
import { MedicineManager } from "./medicineManager.js";
import { UI } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {
  UI.displayMedicines(); 

  const table = document.getElementById("medicine-table-body");
    table.addEventListener("click", function (event) {
  UI.handleDeleteClick(event);
  UI.handleEditClick(event);
});

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
      const form = document.getElementById("medicine-form")
      const editId = form.getAttribute("data-edit-id");
      if (editId) {
        const updatedMedicine = new Medicine(name, manufacturer, expirationDate, quantity, editId); 
        MedicineManager.updateMedicine(editId, updatedMedicine);
        UI.displayMedicines();
      
        form.removeAttribute("data-edit-id");
        form.querySelector("button[type='submit']").textContent = "Add Medicine";
      }
      
          else{
            const newMedicine = new Medicine(name, manufacturer, expirationDate, quantity);
      MedicineManager.addMedicine(newMedicine);
      UI.displayMedicines();}
      
      form.reset();
    });
});

