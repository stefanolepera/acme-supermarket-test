import { getDiscountedItemsList } from '../itemsUtil';
import pricingRulesMock from '../../__mocks__/pricingRulesMock';
import products from '../../data/products';
import expect from 'expect';

describe('itemsUtil test', () => {
   describe('getDiscountedItemsList test', () => {
       it('should return an empty array if the list provided is CF1 CF1', () => {
        const items = [products['CF1'], products['CF1']];
        const activeDiscount =  pricingRulesMock[1];
        const discountedItems = getDiscountedItemsList(items, activeDiscount);
        expect(discountedItems).toHaveLength(0);
    });

       it('should return an array with 3 elements if the list provided is SR1 SR1 SR1', () => {
            const items = [products['SR1'], products['SR1'], products['SR1']];
            const activeDiscount =  pricingRulesMock[1];
            const discountedItems = getDiscountedItemsList(items, activeDiscount);
            expect(discountedItems).toHaveLength(3);
       });
   });
});