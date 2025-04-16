import { v4 as uuidv4 } from "uuid";

export class Medicine {
    constructor(productName, manufacturer, expirationDate, quantity) {
        this.productId = uuidv4(); // Unik ID
        this.productName = productName;
        this.manufacturer = manufacturer;
        this.expirationDate = new Date(expirationDate).toISOString(); 
        this.quantity = quantity;
    }
}

export class PrescriptionMedicine extends Medicine {
    constructor(productName, manufacturer, expirationDate, quantity, doctorName) {
        super(productName, manufacturer, expirationDate, quantity);
        this.requiresPrescription = true;
        this.doctorName = doctorName;
    }
}

export class OverTheCounterMedicine extends Medicine {
    constructor(productName, manufacturer, expirationDate, quantity) {
        super(productName, manufacturer, expirationDate, quantity);
        this.requiresPrescription = false;
    }
}
