import { getDiscountedItemsList } from '../utils/itemsUtil';

export const getTotalPriceAfterDiscount = (items, rules) => {
    const totalPriceNoDiscount = getTotalPriceNoDiscount(items);
    const totalPriceWithDiscount = rules.map(rule => {
        const discountedItemsList = getDiscountedItemsList(items, rule);
        if (discountedItemsList.length > 0) {
            return rule.applyDiscount(discountedItemsList, rule);
        }

        return 0;
    })
    .reduce((acc, price) => price + acc, 0);
    return totalPriceNoDiscount + totalPriceWithDiscount;
};

export const getTotalPriceNoDiscount = (items) => {
    return items.filter(item => item.discount === undefined).reduce((acc, item) => item.price + acc, 0);
};

export const apply2x1Discount = (items, rule) => {
    const totalItems = Math.ceil(items.length / 2);
    return rule.price * totalItems;
};

export const applyBulkDiscount = (items, rule) => {
    if (items.length >= rule.quantity) {
        return items.length * rule.price;
    }
    return items.reduce((acc, item) => item.price + acc, 0);
};