import Buyable from "../Interface/interface" 

export default class Cart {
    private allItems: Buyable[] = []

    add(item: Buyable): void {
        if (!this.allItems.includes(item)) {
            this.allItems.push(item)
        } else if (item.count != undefined) {
            const dubl = this.allItems.findIndex(elem => elem.id == item.id)
           this.increase(this.allItems[dubl].id, item.count)
        }
    }

    get items(): Buyable[] {
        return [...this.allItems]
    }

    decrease(id: number, count: number): void | string{
        const itemId = this.allItems.findIndex(elem => elem.id == id)
        const itemCount = this.allItems[itemId]
        if (itemCount == undefined || itemCount.count == undefined) {
            return 'This item not have count'
        }
        if (itemCount.count > count) {
            this.allItems[itemId].count = itemCount.count - count
        } else if (itemCount.count <= count) {
            this.deleteItem(id)
        }
    }

    increase(id: number, count: number): void | string {
        const itemId = this.allItems.findIndex(elem => elem.id == id)
        const itemCount = (this.allItems[itemId].count ?? undefined)
        if (itemCount == undefined) {
            return 'This item not have count'
        }
        this.allItems[itemId].count = itemCount + count
    }

    get allSum(): number {
        return this.allItems.reduce((result, elem) => result + elem.price * (elem.count ?? 1), 0)
    }

    allSumWithDis(discount: number): number {
        return this.allSum * (1 - discount / 100)
    }

    deleteItem(id: number): void {
        this.allItems = this.allItems.filter(elem => elem.id != id)
    }
}


// import Movie from "../Movie/movie"
// import Phone from "../Phone/phone"
// import Book from "../Book/book"


// const t1 = new Book(10001, 'test', 500)
// // const t2 = new Movie(20001, 'Мстители', 'Averange', 2021, "USA", "desc", ['fantasy'], 120, 1000)
// const t3 = new Phone(30001, 'test', 500, 4)
// const t2 = new Phone(30002, 'test', 500)



// const test = new Cart()
// test.add(t2)
// // test.add(t1)
// // test.add(t2)
// test.add(t3)
// // test.add(t3)
// test.decrease(30001, 2)
// console.log(test.items)
// test.increase(30001, 2)
// console.log(test.items)
// test.decrease(30001, 5)
// console.log(test.items)
// test.decrease(10001, 5)

// // test.add(new Book(10002, 'test1', 300))
// console.log(test.items)
// console.log(test.allSum)
// console.log(test.allSumWithDis(20))
// test.deleteItem(10001)
// console.log(test.items)
// console.log(test.allSum)
// console.log(test.allSumWithDis(20))
