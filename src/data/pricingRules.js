import { apply2x1Discount, applyBulkDiscount } from '../utils/discountRules';

const pricingRules = [
    {
        name: 'Buy one get one free',
        type: '2x1',
        applyDiscount: apply2x1Discount
    },
    {
        name: 'Buy three or more and get a discount',
        quantity: 3,
        newPrice: 4.50,
        type: 'bulk',
        applyDiscount: applyBulkDiscount
    }
];

export default pricingRules;