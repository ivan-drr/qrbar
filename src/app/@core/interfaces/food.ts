export interface Food {
    $key?: string,
    name: string,
    ration: {
        rationName: string,
        price: number
    }
}
