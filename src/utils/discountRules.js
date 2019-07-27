import { getDiscountedItemsList } from '../utils/itemsUtil';

export const getPricesAfterDiscount = (items, rules) => {
    const fullPriceItems = getFullPriceItems(items);
    const discountedItems = rules.map(rule => {
        const discountedItemsList = getDiscountedItemsList(items, rule);
        if (discountedItemsList.length > 0) {
            return rule.applyDiscount(discountedItemsList, rule);
        }

        return 0;
    })
    .reduce((acc, item) => item + acc, 0);
    return fullPriceItems + discountedItems;
};

export const getFullPriceItems = (items) => {
    return items.filter(item => item.discount === undefined).reduce((acc, item) => item.price + acc, 0);
};

export const apply2x1Discount = (items) => {
    const totalItems = Math.ceil(items.length / 2);
    return items[0].price * totalItems;
};

export const applyBulkDiscount = (items, rule) => {
    if (items.length >= rule.quantity) {
        return items.length * rule.newPrice;
    }

    return items.reduce((acc, item) => item.price + acc, 0);
};