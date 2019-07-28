import { apply2x1Discount, applyBulkDiscount } from '../utils/discountRules';
import apply1FreeDiscount from './discountRulesMock';

const pricingRulesMock = [
    {
        name: 'Buy one get one free',
        type: '2x1',
        price: 3.11,
        applyDiscount: apply2x1Discount
    },
    {
        name: 'Buy three or more and get a discount',
        quantity: 3,
        price: 4.50,
        type: 'bulk',
        applyDiscount: applyBulkDiscount
    },
    {
        name: 'The first item of that type is free',
        type: '1free',
        price: 1.20,
        applyDiscount: apply1FreeDiscount
    }
];

export default pricingRulesMock;