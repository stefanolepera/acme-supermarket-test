const apply1FreeDiscount = (items) => {
    if (items.length > 0) {
        return items.reduce((acc, item) => item.price + acc, 0) - items[0].price;
    }
    return 0;
}

export default apply1FreeDiscount;