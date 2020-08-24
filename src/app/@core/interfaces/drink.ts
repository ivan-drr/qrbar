export interface Drink {
    $key?: string,
    name: string,
    brand: {
        brandName: string,
        price: number
    }
}
