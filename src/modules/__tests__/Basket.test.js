import Basket from '../Basket';
import pricingRules from '../../data/pricingRules';
import pricingRulesMock from '../../__mocks__/pricingRulesMock';
import productsMock from '../../__mocks__/producstMock';
import expect from 'expect';

describe('Basket Class', () => {
    describe('constructor test', () => {
        it('should throw and error if no pricingRules are provided', () => {
            expect(() => new Basket()).toThrow('Please provide a valid pricingRules');
        });
    });

    describe('add method tests', () => {
        let basket;
        beforeEach(() => {
            basket = new Basket(pricingRules);
        });
    
        it('should correctly add a new item', () => {
            basket.add('SR1');
            expect(basket.itemsList).toHaveLength(1);
        });
    
        it('should correctly NOT add a new item if undefined', () => {
            basket.add();
            expect(basket.itemsList).toHaveLength(0);
        });
    
        it('should correctly NOT add a new item if not contained in products', () => {
            basket.add('SR2');
            expect(basket.itemsList).toHaveLength(0);
        });
    });

    describe('total method tests required implementation', () => {
        let basket;
        beforeEach(() => {
            basket = new Basket(pricingRules);
        });

        it('should return £19.34 if the list provided is FR1, SR1, FR1, CF1', () => {
            basket.add('FR1');
            basket.add('SR1');
            basket.add('FR1');
            basket.add('CF1');
            expect(basket.total()).toBe('£19.34');
        });

        it('should return £3.11 if the list provided is FR1, FR1', () => {
            basket.add('FR1');
            basket.add('FR1');
            expect(basket.total()).toBe('£3.11');
        });

        it('should return £16.61 if the list provided is SR1, SR1, FR1, SR1', () => {
            basket.add('SR1');
            basket.add('SR1');
            basket.add('FR1');
            basket.add('SR1');
            expect(basket.total()).toBe('£16.61');
        });
    });
});