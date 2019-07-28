const apply1FreeDiscount = (items, rule) => {
    if (items.length > 0) {
        return items.reduce((acc, item) => item.price + acc, 0) - rule.price;
    }
    return 0;
}

export default apply1FreeDiscount;