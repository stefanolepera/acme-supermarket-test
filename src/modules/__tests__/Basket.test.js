import Basket from '../Basket';
import pricingRules from '../../data/pricingRules';
import expect from 'expect';

describe('Basket Class', () => {
    describe('constructor test', () => {
        it('should throw and error if no pricingRules are provided', () => {
            expect(() => new Basket()).toThrow('Please provide a valid pricingRules');
        });
    });

    describe('add method tests', () => {
        it('should correctly add a new item', () => {
            const basket = new Basket(pricingRules);
            basket.add('SR1');
            expect(basket.itemsList).toHaveLength(1);
        });
    
        it('should throw and error if no item is provided', () => {
            expect(() => new Basket(pricingRules).add()).toThrow('Please provide a valid product');
        });
    
        it('should throw and error if the provided item is not contained in products', () => {
            expect(() => new Basket(pricingRules).add('FR2')).toThrow('Please provide a valid product');
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