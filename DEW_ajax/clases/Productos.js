class Productos{
    constructor(id, image, name, description, price, stock){
        this.id = id;
        this.image = image;
        this.name = name;
        this.description = description;
        this.price = price;
        this.stock = stock;
    }



    getName() {
        return this.name;
    }
    
    setName(name) {
        this.name = name;
    }

    getdescription() {
        return this.description;
    }
    
    setDescription(description) {
        this.description = description;
    }    
    
    getPrice() {
        return this.name;
    }
    
    setPrice(price) {
        this.price = price;
    }

    getStock() {
        return this.stock;
    }
    
    setStock(stock) {
        this.stock = stock;
    }
}