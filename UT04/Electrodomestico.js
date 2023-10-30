class Electrodomestico{
    baseprice = 100;
    colour = "blanco";
    ec = "F";
    weight = 5;
    constructor(){

    }

    constructor(baseprice, colour, ec, weight){
        this.baseprice = baseprice;
        this.colour = colour;
        this.ec = ec;
        this.weight = weight;
    }

    constructor(baseprice, weight){
        this.baseprice = baseprice;
        this.weight = weight;
    }

    comprobarConsumoEnergetico(letter) {
        const validletter = ["A", "B", "C", "D", "E", "F"];
        for(letra in validletter){
            if(letter != validletter[letra]){
                letter = "F";
            }
        }
        return letter;
    }

    ComprobarColor(colour){
        const validcolour = ["blanco", "negro", "rojo", "azul","gris"];
        for(color in validcolour){
            if(colour != validcolour[color]){
                colour = "blanco";
            }
        }
        return colour;
    }

    PrecioFinal(letter, price, weight){
        switch(letter){
            case "A":
                price = 100;
                break;
            case "B":
                price = 80;
                break;
            case "C":
                price = 60;
                break;
            case "D":
                price = 50;
                break;
            case "E":
                price = 30;
                break;
            case "F":
                price = 10;
                break;

        }
    }

    getBaseprice(){
        return baseprice;
    }

    getColour(){
        return colour;
    }

    getEc(){
        return ec;
    }

    getWeight(){
        return this.weight;
    }

}