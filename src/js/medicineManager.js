export class MedicineManager {
    
    static getMedicines() {
      return JSON.parse(localStorage.getItem("medicines")) || [];
    }
  
    
    static saveMedicines(data) {
      localStorage.setItem("medicines", JSON.stringify(data));
    }
  
   
    static addMedicine(newMedicine) {
      const meds = this.getMedicines();
      meds.push(newMedicine);
      this.saveMedicines(meds);
    }
  
 
    static deleteMedicine(id) {
      let data = this.getMedicines();
      data = data.filter((m) => m.productId !== id);
      this.saveMedicines(data);
    }
  
    
    static updateMedicine(id, updatedData) {
      const list = this.getMedicines();
      const index = list.findIndex((m) => m.productId === id);
  
      if (index !== -1) {
     
        list[index].productName = updatedData.productName;
        list[index].manufacturer = updatedData.manufacturer;
        list[index].expirationDate = updatedData.expirationDate;
        list[index].quantity = updatedData.quantity;
  
        this.saveMedicines(list);
      }
    }
  }