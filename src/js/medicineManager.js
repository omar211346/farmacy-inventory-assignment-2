export class MedicineManager {
    static getMedicines() {
      return JSON.parse(localStorage.getItem("medicines")) || [];
    }
  
    static saveMedicines(data) {
      localStorage.setItem("medicines", JSON.stringify(data));
    }
  
    static addMedicine(newMedicine) {
      let meds = MedicineManager.getMedicines();
      meds.push(newMedicine);
      MedicineManager.saveMedicines(meds);
    }
  
    static deleteMedicine(id) {
      let data = this.getMedicines();
      data = data.filter((m) => m.productId !== id);
      this.saveMedicines(data);
    }
  
    static updateMedicine(id, updatedData) {
      const list = MedicineManager.getMedicines();
      let index = list.findIndex((m) => m.productId === id);
  
      if (index !== -1) {
        Object.assign(list[index], updatedData);
        this.saveMedicines(list);
      }
    }
  }
  