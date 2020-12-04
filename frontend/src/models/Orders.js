export class Orders{
    constructor(transactionId, name, country, productId, quantity, userId, distributorId, date = new Date()) {
        this.datetime = date;
        this.transactionId = transactionId;
        this.name = name;
        this.country = country;
        this.productId = productId;
        this.quantity = quantity;
        this.userId = userId;
        this.distributorId = distributorId;
    }
}