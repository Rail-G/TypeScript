"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Cart {
    constructor() {
        this.allItems = [];
    }
    add(item) {
        if (!this.allItems.includes(item)) {
            this.allItems.push(item);
        }
        else if (item.count != undefined) {
            const dubl = this.allItems.findIndex(elem => elem.id == item.id);
            this.increase(this.allItems[dubl].id, item.count);
        }
    }
    get items() {
        return [...this.allItems];
    }
    decrease(id, count) {
        const itemId = this.allItems.findIndex(elem => elem.id == id);
        const itemCount = this.allItems[itemId];
        if (itemCount == undefined || itemCount.count == undefined) {
            return 'This item not have count';
        }
        if (itemCount.count > count) {
            this.allItems[itemId].count = itemCount.count - count;
        }
        else if (itemCount.count <= count) {
            this.deleteItem(id);
        }
    }
    increase(id, count) {
        var _a;
        const itemId = this.allItems.findIndex(elem => elem.id == id);
        const itemCount = ((_a = this.allItems[itemId].count) !== null && _a !== void 0 ? _a : undefined);
        if (itemCount == undefined) {
            return 'This item not have count';
        }
        this.allItems[itemId].count = itemCount + count;
    }
    get allSum() {
        return this.allItems.reduce((result, elem) => { var _a; return result + elem.price * ((_a = elem.count) !== null && _a !== void 0 ? _a : 1); }, 0);
    }
    allSumWithDis(discount) {
        return this.allSum * (1 - discount / 100);
    }
    deleteItem(id) {
        this.allItems = this.allItems.filter(elem => elem.id != id);
    }
}
exports.default = Cart;
//# sourceMappingURL=cart.js.map