import Buyable from "../Interface/interface";

export default class Movie implements Buyable{
    constructor (
        public readonly id: number,
        public readonly translatedName: string,
        public readonly name: string,
        public readonly year: number,
        public readonly country: string,
        public desc: string,
        public readonly genre: string[],
        public readonly time: number | string,
        public readonly price: number
    ) {}
}