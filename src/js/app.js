import { Medicine } from "./models.js";
import { MedicineManager } from "./medicineManager.js";
import { UI } from "./ui.js";

document.addEventListener("DOMContentLoaded", () => {


  document
    .getElementById("medicine-table-body")
    .addEventListener("click", UI.handleDeleteClick);

  document
    .getElementById("medicine-form")
    .addEventListener("submit", function (event) {
     

      const name = document.getElementById("name").value;
      const manufacturer = document.getElementById("manufacturer").value;
      const expirationDate = document.getElementById("expiration").value;
      const quantity = document.getElementById("quantity").value; 

      const newMed = new Medicine(name, manufacturer); 

      MedicineManager.addMedicine(newMed);

      
    });
});
