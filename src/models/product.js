export default class ProductModel {
    isPublished = false;
    ingredients = {};

    constructor(name, code) {
        this.name = name;
        this.code = code;
    }
}