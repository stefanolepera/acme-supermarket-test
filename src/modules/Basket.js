import products from '../data/products';
import { getTotalPriceAfterDiscount } from '../utils/discountRules';

class Basket {
    constructor(pricingRules) {
        if (pricingRules === undefined) {
            throw new Error('Please provide a valid pricingRules');
        }

        this.pricingRules = pricingRules;
        this.itemsList = [];
    }

    add(item) {
        if (!item || !products[item]) {
            throw new Error('Please provide a valid product');
        }

        this.itemsList.push(products[item]);
    }

    total() {
        const totalPrice = getTotalPriceAfterDiscount(this.itemsList, this.pricingRules);
        return `£${totalPrice}`;
    }
}

export default Basket;