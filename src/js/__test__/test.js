"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const movie_1 = __importDefault(require("../Movie/movie"));
const phone_1 = __importDefault(require("../Phone/phone"));
const book_1 = __importDefault(require("../Book/book"));
const cart_1 = __importDefault(require("../Cart/cart"));
describe('Cart', () => {
    let test;
    beforeEach(() => {
        const t1 = new book_1.default(10001, 'test', 500);
        const t2 = new movie_1.default(20001, 'Мстители', 'Averange', 2021, "USA", "desc", ['fantasy'], 120, 1000);
        const t3 = new phone_1.default(30001, 'test', 500, 4);
        const t4 = new phone_1.default(30002, 'test', 500);
        test = new cart_1.default();
        test.add(t1);
        test.add(t1);
        test.add(t2);
        test.add(t3);
        test.add(t4);
        test.add(t4);
    });
    it('empty array', () => {
        const cart = new cart_1.default();
        expect(cart.items.length).toBe(0);
    });
    it('create 4 items', () => {
        expect(test.items.length).toBe(4);
    });
    it('check sum all items', () => {
        expect(test.allSum).toBe(4500);
    }),
        it('check sum all items with discount', () => {
            expect(test.allSumWithDis(20)).toBe(3600);
        });
    it('delete item', () => {
        test.deleteItem(10001);
        expect(test.items.length).toBe(3);
    });
    it('decrease phone item', () => {
        var _a;
        test.decrease(30001, 2);
        const result = ((_a = test.items.find(elem => elem.id == 30001)) !== null && _a !== void 0 ? _a : { count: 0 });
        expect(result.count).toBe(2);
    });
    it('decrease phone item and delete', () => {
        test.decrease(30001, 5);
        const res = test.decrease(30001, 5);
        expect(res).toBe('This item not have count');
        const result = test.items.find(elem => elem.id == 30001);
        expect(result).toBeUndefined();
    });
    it('decrease item without key -> count', () => {
        expect(test.decrease(10001, 5)).toBe('This item not have count');
    });
    it('increase phone item', () => {
        var _a;
        test.increase(30002, 2);
        const result = (_a = test.items.find(elem => elem.id == 30002)) !== null && _a !== void 0 ? _a : { count: 0 };
        expect(result.count).toEqual(4);
    });
    it('uncrease item without key -> count', () => {
        expect(test.increase(10001, 5)).toBe('This item not have count');
    });
});
//# sourceMappingURL=test.js.map