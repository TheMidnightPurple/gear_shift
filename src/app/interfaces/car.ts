export interface Car {
    id: number,
    brand: string,
    year: string,
    model: string,
    colorName: string,
    firstColor: string,
    secondColor?: string,
    rarity: string,
    cardNumber: number,
    totalCards: number,
    info: Details
}

export interface Details {
    maxSpeed: number,
    driveTrain: string,
    weight: number
    zeroToSixty: number,
    price: string,
    about: string
}