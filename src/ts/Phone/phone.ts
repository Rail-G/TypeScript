import Buyable from "../Interface/interface";

export default class Phone implements Buyable{
    constructor (
        public id: number,
        public name: string,
        public price: number,
        public count: number = 1
    ) { }
}