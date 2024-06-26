import Item from "./Item";

// Template Method
export default abstract class TaxItem extends Item {

    calculateTax() {
        return (this.price * this.getTax()) / 100;
    }

    abstract getTax(): number;
}