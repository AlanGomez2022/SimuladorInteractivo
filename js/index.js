const plateaPreferida=7000;
const platea=5500;
const superPulman=5000;
const plateaCyL=4000;
const pullmanLateral=3500;
const cabecera=3000;
const iva=0.21;
////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                  CLASES Y OBJETOS                                                      //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Persona{
    constructor(name,numero){
        this.nombre= name;
        this.dni=numero;
    }
    mostrarse(){
        return ("Nombre: "+this.nombre+ " DNI: "+this.dni);
    }
}
class compraTicket{
    constructor(){
        this.personas=[];
        this.sector="";
        this.precioSector=0;
        this.subtotal=0;
        this.total=0;
        
    }
    agregarPersona(persona){
        this.personas.push(persona);
    }
    calcularCosto(){
        this.subtotal= this.precioSector*(this.personas.length)

    }
    calcularCostoConIva(){
        this.total=this.subtotal*iva+this.subtotal        
    }
    elegirSector(zona){
        switch (zona){
            case 1:{
                this.sector= "Platea Preferida";
                this.precioSector=plateaPreferida;
                break;
            }               
            case 2:{
                this.sector= "Platea";
                this.precioSector=platea;
                break;
            }               
           case 3:{
                this.sector= "Super Pullman";
                this.precioSector=superPulman;
                break;
            }               
            case 4:{
                this.sector= "Platea C y L";
                this.precioSector=plateaCyL;
                break;
            }                
            case 5:{
                this.sector= "Pullman Lateral";
                this.precioSector=pullmanLateral;
                break;
            }
            case 6:{
                this.sector= "Cabecera";
                this.precioSector=cabecera;
                break;
            }
            default:
                break;   
        }
       
    }
    
    mostrarCompra(){
        let people=new Persona();
        let texto="Se ha generado una compra por "+this.personas.length+" Tickects, que corresponden a: ";
        for (people of this.personas){
            texto=texto+people.mostrarse() +"\n"+this.precioSector+" +IVA \n\n";
        }
        texto=texto + "\n\n Subtotal sin Iva"+this.subtotal+"\n\n TOTAL DE LA COMPRA: "+this.total;
        return (texto);
        }
    }
// FUNCIONES QUE USA EL PROGRAMA PRINCIPAL/////////////////////////////////////////////////////////////////////////////////////////////////////////////
function validarSector(){
    let control=0;
    let lugar=0;
       while(typeof(control)==="number"){
        lugar=parseInt(prompt("Ingrese el numero del sector que desea:\n 1- Platea Preferida ($"+plateaPreferida+" + IVA) \n 2- Platea ($"+platea+" + IVA) \n 3- Super Pullman($"+superPulman+" + IVA) \n 4- Platea C y L ($"+plateaCyL+" + IVA) \n 5- Pullman Lateral ($"+pullmanLateral+" + IVA) \n 6- Cabecera ($"+cabecera+" + IVA)"));
        if ((typeof(lugar)==="number")&&(lugar>0&&lugar<7)){
           return lugar;
        }else{
            alert ("ERROR!!! Opcion incorrecta!! vuelva a ingresar una opcion");
            control=0;
        }
        }
    return;
}
function validarCantEntradas(){
    let control=0;
    let cantidad=parseInt(prompt("Ingrese la cantidad de entradas que desea comprar: "));
    while(typeof(control)==="number"){
        if ((typeof(cantidad)==="number")&&(cantidad>0)){
           return cantidad;
        }else{
            alert("ERROR!!! Opcion incorrecta!! ")
            cantidad=parseInt(prompt("Vuelva a ingresar una cantidad de entradas a comprar: "));
        }
    }
}

//PROGRAMA PRINCIPAL--------------------------------------------------------------------------------------------------------------------------------------

alert("Bienvenido a EntradasAlan.com");
alert("Comencemos con el proceso de reserva de entradas");
let individuo= new Persona();
individuo.nombre=prompt("Ingrese su nombre y apellido: ");
individuo.dni=prompt("ingrese su numero de DNI: ");
let sector=(validarSector())
let compra= new compraTicket(individuo);
compra.agregarPersona(individuo);
compra.elegirSector(sector);
let cantEntradas=validarCantEntradas();

if (cantEntradas===1){
    compra.calcularCosto();
    compra.calcularCostoConIva();
    alert(compra.mostrarCompra())
}else{
    for(let i=1;i<cantEntradas;i++){
        let personita= new Persona()
        personita.nombre=prompt("Ingrese el nombre de la siguiente persona que lo acompañará: ");
        personita.dni=prompt("Ingrese el DNI de esa persona:");
        compra.agregarPersona(personita);
        
    }
    compra.calcularCosto();
    compra.calcularCostoConIva();
    alert(compra.mostrarCompra());
}


