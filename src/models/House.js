export class House {
  constructor(houseData = {}) {
    this.bedrooms = houseData.bedrooms
    this.year = houseData.year
    this.bathrooms = houseData.bathrooms
    this.levels = houseData.levels
    this.img = houseData.imgUrl
    this.price = houseData.price
    this.description = houseData.description
    this.creatorId = houseData.creatorId
    this.creator = houseData.creator || {}
    this.id = houseData.id
  }
}
