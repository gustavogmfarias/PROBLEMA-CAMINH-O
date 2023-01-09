export default class Product {
    id;
    weight;
    profit;
    _profitPerWeight;
    constructor(id, weight, profit) {
        this.id = id;
        this.weight = weight;
        this.profit = profit;
        this._profitPerWeight = Number((profit / weight).toFixed(2));
    }
    get profitPerWeight() {
        return this._profitPerWeight;
    }
}
