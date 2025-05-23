export class Medicine {
    constructor(productName, manufacturer, expirationDate, quantity, productId = null) {
      this.productId = productId || Medicine.generateId(); 
      this.productName = productName;
      this.manufacturer = manufacturer;
      this.expirationDate = expirationDate;
      this.quantity = quantity;
    }
  
    static generateId() {
      return "med-" + Date.now();
    }
  }