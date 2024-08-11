// import Buyable from "../Interface/interface"
import Movie from "../Movie/movie"
import Phone from "../Phone/phone"
import Book from "../Book/book"
import Cart from "../Cart/cart"

describe('Cart', () => {
    let test: Cart;
    beforeEach(() => {
        const t1 = new Book(10001, 'test', 500);
        const t2 = new Movie(20001, 'Мстители', 'Averange', 2021, "USA", "desc", ['fantasy'], 120, 1000);
        const t3 = new Phone(30001, 'test', 500, 4);
        const t4 = new Phone(30002, 'test', 500);
        test = new Cart();
        test.add(t1);
        test.add(t1);
        test.add(t2);
        test.add(t3);
        test.add(t4);
        test.add(t4);
    });
    it('empty array', () => {
        const cart = new Cart();
        expect(cart.items.length).toBe(0);
    });

    it('create 4 items', () => {
        expect(test.items.length).toBe(4)
    });
    it('check sum all items', () => {
        expect(test.allSum).toBe(4500)
    }),
    it('check sum all items with discount', () => {
        expect(test.allSumWithDis(20)).toBe(3600)
    });
    it('delete item', () => {
        test.deleteItem(10001)
        expect(test.items.length).toBe(3)
    });
    it('decrease phone item', () => {
        test.decrease(30001, 2)
        const result = (test.items.find(elem => elem.id == 30001) ?? {count: 0})
        expect(result.count).toBe(2)
    });
    it('decrease phone item and delete', () => {
        test.decrease(30001, 5)
        const res = test.decrease(30001, 5)
        expect(res).toBe('This item not have count')
        const result = test.items.find(elem => elem.id == 30001)
        expect(result).toBeUndefined()
    });
    it('decrease item without key -> count', () => {
        expect(test.decrease(10001, 5)).toBe('This item not have count')
    });
    it('increase phone item', () => {
        test.increase(30002, 2)
        const result = test.items.find(elem => elem.id == 30002) ?? {count: 0}
        expect(result.count).toEqual(4)
    });
    it('uncrease item without key -> count', () => {
        expect(test.increase(10001, 5)).toBe('This item not have count')
    });
})
