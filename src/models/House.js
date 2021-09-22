export class House {
  constructor(houseData) {
    this.bedrooms = houseData.bedrooms
    this.year = houseData.year
    this.bathrooms = houseData.bathrooms
    this.levels = houseData.levels
    this.imgUrl = houseData.imgUrl
    this.price = houseData.price
    this.description = houseData.description
  }
}
