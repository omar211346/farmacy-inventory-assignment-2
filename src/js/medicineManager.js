export class MedicineManager {
    
    static getMedicine() { 
        return JSON.parse(localStorage.getitem("medcines")) || []; 
    }

    static saveMedicine(data) { 
        localStorage.setItem("medicines", JSON.stringfy(data)); 
    }

    static addMedicine(newMedicine) {
        let meds = MedicineManager.getMedicines; 
        meds.push(medicine); 
        MedicineManager.saveMedicines(meds); 
    }

    static deleteMedicine(id) {
        let data = this.getMedicines(); 
        data = data.filter((m) => m.id !== id); 
        this.saveMedicines(data); 
    }

    static updateMedicine(id, data) {
        const list = MedicineManager.getMedicines(); 
        let index = -1;
        for (let i = 0; i < list.length; i++) {
            if (list[i].productId = id) { 
                index = i;
            }
        }

        if (index != -1) { 
            list[index] = data 
        }

        this.saveMedicines(list);
    }
}