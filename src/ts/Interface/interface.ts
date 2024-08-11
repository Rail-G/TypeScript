export default interface Buyable {
    readonly id: number,
    readonly name: string,
    price: number,
    count?: number
}

// Цена и скидка могут меняться в зависимости от места показа и от ситуации.