class Electrodomestico{
  

    constructor(baseprice, colour, ec, weight){
        this.baseprice = baseprice;
        this.colour = colour;
        this.ec = ec;
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
    
     PrecioFinal(){
            switch(this.letter){
                case "A":
                    if(80 <= this.weight){
                    this.price = 100;
                }else{
                    this.letter = "B";
                }
                    
                    break;
    
                case "B":
                    if(50 <= this.weight <= 80){
                        this.price = 80;
                    }else if(80 < this.weight){
                        this.letter = "A";
                    }else{
                        this.letter = "D";
                    }
                    
                    break;
    
                case "D":
                    if(20 <= this.weight <= 49){
                        this.price = 50;
                    }else if(49 < this.weight){
                        this.letter = "B";
                    }else{
                        this.letter = "F";
                    }
    
                    break;
    
                case "F":
                    if(0 <= this.weight <= 19){
                        this.price = 10;
                        return this.price;
                    }else{
                        this.letter = "D";
                        return this.letter;
                    }
                    
    
            }
        }

    ShowElectrodomestico(){
        document.write("Resumen:" + "<br>");
        document.write("Precio:" + this.baseprice +"<br>");
        document.write("Color:" + this.colour +"<br>");
        document.write("letra:" + this.ec +  "<br>");
        document.write("peso:" + this.weight + "<br>");
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