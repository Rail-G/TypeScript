import Buyable from "../Interface/interface";

export default class Book implements Buyable{
    constructor (
        public id: number,
        public name: string,
        public price: number,
    ) { }
}