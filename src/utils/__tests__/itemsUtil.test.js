import { getDiscountedItemsList } from '../itemsUtil';
import pricingRules from '../../data/pricingRules';
import products from '../../data/products';
import expect from 'expect';

describe('itemsUtil test', () => {
   describe('getDiscountedItemsList test', () => {
        it('should return an empty array if the list provided is CF1 CF1', () => {
            const items = [products['CF1'], products['CF1']];
            const rules = pricingRules[1];
            const discountedItems = getDiscountedItemsList(items, rules);
            expect(discountedItems).toHaveLength(0);
        });

       it('should return an array with 3 elements if the list provided is SR1 SR1 SR1', () => {
            const items = [products['SR1'], products['SR1'], products['SR1']];
            const rules = pricingRules[1];
            const discountedItems = getDiscountedItemsList(items, rules);
            expect(discountedItems).toHaveLength(3);
       });

       it('should return an array with 1 elements if the list provided is CF1 SR1', () => {
            const items = [products['CF1'], products['SR1']];
            const rules = pricingRules[1];
            const discountedItems = getDiscountedItemsList(items, rules);
            expect(discountedItems).toHaveLength(1);
       });
   });
});