export default class Vehicle {
  capacity;
  products;
  _currentCapacity;
  constructor(capacity, products = []) {
    this.capacity = capacity;
    this.products = products;
    this._currentCapacity = capacity;
  }
  set currentCapacity(value) {
    this._currentCapacity = value;
  }
  get currentCapacity() {
    return this._currentCapacity;
  }
  totalWeight() {
    const totalWeight = this.products.reduce((acc, product) => {
      return (acc += product.weight);
    }, 0);
    return console.log("Peso total no caminhão:", totalWeight);
  }
  insertProduct(product) {
    this.products.push(product);
    this.products.sort((a, b) => {
      if (a.profitPerWeight > b.profitPerWeight) {
        return -1;
      }
      if (a.profitPerWeight < b.profitPerWeight) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });
    this.currentCapacity -= product.weight;
  }
  printProducts() {
    console.table(this.products);
  }
}
