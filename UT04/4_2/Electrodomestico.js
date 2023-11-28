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
            if(colour != validcolour[colour]){
                colour = "blanco";
            }
        }
        return colour;
    }
    
     PrecioFinal(){
        let price;
        let 
        if (0 <= this.weight && this.weight <= 19) {
            this.baseprice = this.baseprice + 10;
            

        }else if(20 <= this.weight && this.weight <= 49){

            this.baseprice = this.baseprice + 50;
                        
        }else if(50 <= this.weight && this.weight <= 80){

            this.baseprice = this.baseprice + 80;

        }else{

            this.baseprice =  this.baseprice + 100;

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