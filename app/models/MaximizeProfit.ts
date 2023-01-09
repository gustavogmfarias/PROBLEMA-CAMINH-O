import Product from "./Product.js";
import Vehicle from "./Vehicle.js";

export default class MaximizeProfit {
  constructor(
    private readonly _productList: Product[] = [],
    public readonly vehicle = new Vehicle(2000),
    private solution: number[] = []
  ) {}

  Maximize() {
    const productA = new Product(1, 400, 200);
    const productB = new Product(2, 500, 200);
    const productC = new Product(3, 700, 300);
    const productD = new Product(4, 900, 400);
    const productE = new Product(5, 600, 400);

    this._productList.push(productA, productB, productC, productD, productE);

    this._productList.sort((a, b) => {
      if (a.profitPerWeight > b.profitPerWeight) {
        return -1;
      }
      if (a.profitPerWeight < b.profitPerWeight) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });

    this.solution = new Array(this._productList.length);
  }

  PrintProducts() {
    console.table(this._productList);
  }

  Solution(arrIndexOfProducts: number[]) {
    //[1,0,1,1,1]

    arrIndexOfProducts.map((item, index) => {
      if (item === 1) {
        let product = this._productList[index];
        let currentVehicleCapacity = this.vehicle.currentCapacity;

        if (
          currentVehicleCapacity > product.weight &&
          currentVehicleCapacity - product.weight >= 0
        ) {
          this.vehicle.insertProduct(product);
        }
      }
    });
  }
}
