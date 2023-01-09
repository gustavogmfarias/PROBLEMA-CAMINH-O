import Product from "./Product.js";

export default class Vehicle {
  private _currentCapacity: number;

  constructor(private capacity: number, private products: Product[] = []) {
    this._currentCapacity = capacity;
  }

  set currentCapacity(value: number) {
    this._currentCapacity = value;
  }
  get currentCapacity(): number {
    return this._currentCapacity;
  }

  totalWeight(): void {
    const totalWeight = this.products.reduce((acc, product) => {
      return (acc += product.weight);
    }, 0);

    return console.log("Peso total no caminhão:", totalWeight);
  }

  insertProduct(product: Product): void {
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

  printProducts(): void {
    console.table(this.products);
  }
}
