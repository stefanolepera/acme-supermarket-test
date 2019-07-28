import { 
    getTotalPriceAfterDiscount, 
    getTotalPriceNoDiscount, 
    apply2x1Discount, 
    applyBulkDiscount 
} from '../discountRules';
import apply1FreeDiscount from '../../__mocks__/discountRulesMock';
import pricingRulesMock from '../../__mocks__/pricingRulesMock';
import productsMock from '../../__mocks__/producstMock';
import pricingRules from '../../data/pricingRules';
import products from '../../data/products';
import expect from 'expect';

describe('discountRules tests', () => {
    describe('getTotalPriceAfterDiscount tests', () => {
        it('should return 0 if the list provided is empty', () => {
            const list = [];
            const prices = getTotalPriceAfterDiscount(list, pricingRules);
            expect(prices).toEqual(0);
        });

        it('should return 22.46 if the list provided is CF1 CF1', () => {
            const list = [products['CF1'], products['CF1']];
            const prices = getTotalPriceAfterDiscount(list, pricingRules);
            expect(prices).toEqual(22.46);
        });

        it('should return 25.57 if the list provided is CF1 CF1 FR1 FR1', () => {
            const list = [products['CF1'], products['CF1'], products['FR1'], products['FR1']];
            const prices = getTotalPriceAfterDiscount(list, pricingRules);
            expect(prices).toEqual(25.57);
        });

        it('should return 39.07 if the list provided is CF1 CF1 FR1 FR1 SR1 SR1 SR1', () => {
            const list = [products['CF1'], products['CF1'], products['FR1'], products['FR1'], products['SR1'], products['SR1'], products['SR1']];
            const prices = getTotalPriceAfterDiscount(list, pricingRules);
            expect(prices).toEqual(39.07);
        });

        it('should return 40.27 if the list provided is CF1 CF1 FR1 FR1 SR1 SR1 SR1 BN1', () => {
            const listMock = [products['CF1'], products['CF1'], products['FR1'], products['FR1'], products['SR1'], products['SR1'], products['SR1'], productsMock['BN1']];
            const pricesMock = getTotalPriceAfterDiscount(listMock, pricingRulesMock);
            expect(pricesMock).toEqual(39.07);
        });
    });

    describe('getTotalPriceNoDiscount tests', () => {
        it('should return 0 if the list provided is FR1 SR1', () => {
            const list = [products['FR1'], products['SR1']];
            const fullPriceItems = getTotalPriceNoDiscount(list);
            expect(fullPriceItems).toEqual(0);
        });

        it('should return 22.46 if the list provided is FR1 SR1 CF1 CF1', () => {
            const list = [products['FR1'], products['SR1'], products['CF1'], products['CF1']];
            const fullPriceItems = getTotalPriceNoDiscount(list);
            expect(fullPriceItems).toEqual(22.46);
        });
    });

    describe('apply2x1Discount tests', () => {
        it('should return 3.11 if the list provided is FR1 FR1', () => {
            const list = [products['FR1'], products['FR1']];
            const discountedPrices = apply2x1Discount(list, pricingRules[0]);
            expect(discountedPrices).toEqual(3.11);
        });

        it('should return 6.22 if the list provided is FR1 FR1 FR1', () => {
            const list = [products['FR1'], products['FR1'], products['FR1']];
            const discountedPrices = apply2x1Discount(list, pricingRules[0]);
            expect(discountedPrices).toEqual(6.22);
        });
    });

    describe('applyBulkDiscount tests', () => {
        it('should return 10.00 if the list provided is SR1 SR1', () => {
            const list = [products['SR1'], products['SR1']];
            const discountedPrices = applyBulkDiscount(list, pricingRules[1]);
            expect(discountedPrices).toEqual(10.00);
        });

        it('should return 13.50 if the list provided is SR1 SR1 SR1', () => {
            const list = [products['SR1'], products['SR1'], products['SR1']];
            const discountedPrices = applyBulkDiscount(list, pricingRules[1]);
            expect(discountedPrices).toEqual(13.50);
        });
    });

    describe('apply1FreeDiscount mock tests', () => {
        it('should return 0 if the list provided is BN1', () => {
            const list = [productsMock['BN1']];
            const discountedPrices = apply1FreeDiscount(list, pricingRulesMock[2]);
            expect(discountedPrices).toEqual(0);
        });

        it('should return 1.20 array if the list provided is BN1 BN1', () => {
            const list = [productsMock['BN1'], productsMock['BN1']];
            const discountedPrices = apply1FreeDiscount(list, pricingRulesMock[2]);
            expect(discountedPrices).toEqual(1.20);
        });
    });
});