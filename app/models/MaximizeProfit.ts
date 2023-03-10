import Product from "./Product.js";
import Vehicle from "./Vehicle.js";

export default class MaximizeProfit {
  constructor(
    private readonly _productList: Product[] = [],
    private readonly _productListOrdened: Product[] = [],
    public readonly vehicle = new Vehicle(2000)
  ) {}

  Maximize() {
    const productA = new Product(1, 400, 200);
    const productB = new Product(2, 500, 200);
    const productC = new Product(3, 700, 300);
    const productD = new Product(4, 900, 400);
    const productE = new Product(5, 600, 400);

    this._productList.push(productA, productB, productC, productD, productE);
    this._productListOrdened.push(
      productA,
      productB,
      productC,
      productD,
      productE
    );

    this._productListOrdened.sort((a, b) => {
      if (a.profitPerWeight > b.profitPerWeight) {
        return -1;
      }
      if (a.profitPerWeight < b.profitPerWeight) {
        return 1;
      }
      // a must be equal to b
      return 0;
    });
  }

  PrintProducts() {
    console.table(this._productList);
  }

  Solution(arrIndexOfProducts: number[]) {
    //[1,0,1,1,1]

    const productsArray: Product[] = [];
    const productArrayBin: number[] = [];
    let totalProfit: number;

    arrIndexOfProducts.map((item, index) => {
      if (item === 1) {
        let product = this._productListOrdened[index];

        if (
          this.vehicle.currentCapacity > product.weight &&
          this.vehicle.currentCapacity - product.weight >= 0
        ) {
          productsArray.push(product);
          this.vehicle.insertProduct(product);
          productArrayBin[product.id - 1] = 1;
        } else {
          productArrayBin[product.id - 1] = 0;
        }
      } else {
        productArrayBin.push(item);
      }

      this.vehicle.totalWeight();
      console.log(
        "capacidade atual do veículo: ",
        this.vehicle.currentCapacity
      );
    });

    totalProfit = productsArray.reduce((acc, product) => {
      return (acc += product.profit);
    }, 0);

    console.log("lucro total: ", totalProfit);
    console.table(arrIndexOfProducts);
    console.table(productsArray);
    console.table(productArrayBin);
  }
}
