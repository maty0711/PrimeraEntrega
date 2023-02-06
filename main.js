//Variables Globales


let cliente
let clienteTipo
let razonSocial
let nombre
let cuit
let dni
let direccion
let localidad
let mail
let telefono
let producto
let item
let cantidad=0
let sumaProducto
let detalleClavos
let detalleTornillos
let detalleArandelas
let detalleTuercas
let detalleMartillo
let detalleDestornillador
let detalleTenaza
let detalleFrancesa
let detalleTaladro
let detalleCaladora
let detalleAmoladora
let detalleTorno
let resumenFerreteria
let resumenManuales
let resumenElectricas
let subFerreteria=0
let subClavos=0
let subTornillos=0
let subArandelas=0
let subTuercas=0
let subManuales=0
let subMartillo=0
let subDestonillador=0
let subTenaza=0
let subFrancesa=0
let subElectricas=0
let subTaladro=0
let subCaladora=0
let subAmoladora=0
let subTorno=0
let total=0
const precioClavos= 5
const precioTornillos= 8
const precioArandelas= 2
const precioTuercas= 4
const precioMartillo= 400
const precioDestornillador= 300
const precioTenaza= 800
const precioFrancesa= 1200
const precioTaladro= 6500
const precioAmoladora= 7000
const precioTorno= 13000
const precioCaladora= 9000


// Funciones

function clasificaCliente() //Clasifica los clientes por Tipo 
{
    
    let cliente=prompt('Elija que tipo de cliente es:\n 1. Empresa \n 2. Particular \n 3. Salir')
    
    while (cliente!='1' && cliente!='2' && cliente!='3') // Bucle para definir tipo de cliente
    
    {
        alert('Elija una opción válida')
        cliente=prompt('Elija que tipo de cliente es:\n 1. Empresa \n 2. Particular \n 3. Salir')
        }
   
     if (cliente=='1'){
        alert('Usted eligío la opción Empresa.\n\nPor favor complete los siguientes datos:')
        clienteTipo=1}
        else if (cliente=='2'){
        alert('Usted eligío la opción Particular.\n\nPor favor complete los siguientes datos:')
        clienteTipo=2}
     else if (cliente=='3')
        alert('Gracias por visitar nuestra Web')
            
    }


function datosCliente() //Solicita a los clientes datos según el tipo de cliente que sea
{
    
    
    if (clienteTipo==1){

        razonSocial = prompt('Ingrese su razón social')
        cuit = prompt('Ingrese su número de CUIT')
        direccion = prompt('Ingrese su dirección')
        localidad = prompt(' Ingrese su localidad')
        mail = prompt('Ingrese su dirección de E-mail')
        telefono = prompt('Ingrese su número de teléfono')
        }
        
        else if (clienteTipo==2) {

        nombre = prompt('Ingrese su nombre y apellido')
        dni = prompt('Ingrese su número de DNI')
        direccion = prompt('Ingrese su dirección')
        localidad = prompt(' Ingrese su localidad')
        mail = prompt('Ingrese su dirección de E-mail')
        telefono = prompt('Ingrese su número de teléfono')
        }

}

function productoTipo() //Hace de menú principal
 {
    
    producto = prompt('Eliga el tipo de producto que desea adquirir:\n 1. Productos de Ferreteria\n 2. Herramientas Manuales\n 3. Herramientas Eléctricas\n 4. Terminar Compra\n 5. Salir')
    
    while (producto!=5){

     if (producto =='1'){
        ferreteria()}
     else if (producto=='2'){
        manuales()
     }
     else if (producto=='3'){
        electricas()
     }
     else if (producto=='4'){
        producto=5
        terminarCompra()
     }
     
    if(producto!=5){
    producto = prompt('Eliga el tipo de producto que desea adquirir:\n 1. Productos de Ferreteria\n 2. Herramientas Manuales\n 3. Herramientas Eléctricas\n 4. Terminar Compra\n 5. Salir')
    }
    
    }
    }

function ferreteria() // Menú de la opción Ferretería
{

    item = prompt('Elija una Opción:\n1.Clavos\n2.Tornillos\n3.Arandelas\n4.Tuercas\n5.Volver al menú principal')
    switch (item){
        case '1':
        cantidad = Number(prompt('Ingrese la cantidad de Clavos que desea comprar'))
        sumaProducto=cantidad*precioClavos
        subClavos=sumaProducto
        if (sumaProducto!=0){
        detalleClavos= cantidad+' Clavos $ '+sumaProducto+'\n'}
        alert('Usted agregó '+ cantidad+' Clavos por un importe de $'+sumaProducto+' +IVA');
    
        break;
        case '2':
        cantidad =  Number(prompt('Ingrese la cantidad de Tornillos que desea comprar'))
        sumaProducto=cantidad*precioTornillos
        subTornillos=sumaProducto
        if (sumaProducto!=0){
        detalleTornillos= cantidad+' Tornillos $ '+sumaProducto+'\n'}
        alert('Usted agregó '+ cantidad+' Tornillos por un importe de $'+sumaProducto+' +IVA');
        
        break;
        case '3':
        cantidad = Number(prompt('Ingrese la cantidad de Arandelas que desea comprar'))
        sumaProducto=cantidad*precioArandelas
        subArandelas=sumaProducto
        if (sumaProducto!=0){
        detalleArandelas= cantidad+' Arandelas $ '+sumaProducto+'\n'}
        alert('Usted agregó '+ cantidad+' Arandelas por un importe de $'+sumaProducto+' +IVA');
        
        break;
        case '4':
        cantidad = Number(prompt('Ingrese la cantidad de Tuercas que desea comprar'))
        sumaProducto=cantidad*precioTuercas
        subTuercas=sumaProducto
        if (sumaProducto!=0){
        detalleTuercas= cantidad+' Tuercas $ '+sumaProducto+'\n'}
        alert('Usted agregó '+ cantidad+' Tuercas por un importe de $'+sumaProducto+' +IVA');
       
        break;
        case '5':
        break;
        default:
        alert('La opción seleccionada no es válida');
        ferreteria()
        break;
     
    }
    if(detalleClavos==undefined){
        detalleClavos=null
    }
    else if(detalleTornillos==undefined){
        detalleTornillos=null
    }
    else if(detalleArandelas==undefined){
        detalleArandelas=null
    }
    else if(detalleTuercas==undefined){
        detalleTuercas=null
    }
    resumenFerreteria=[detalleClavos]+[detalleTornillos]+[detalleArandelas]+[detalleTuercas]
    subFerreteria=subClavos+subTornillos+subArandelas+subTuercas
    }
    
function manuales() //Menú de la opción Herramientas Manuales
{
        item = prompt('Elija una Opción:\n1.Martillo\n2.Destornillador\n3.Tenaza\n4.Llave Francesa\n5.Volver al menú principal')
        switch (item){
        case '1':
        cantidad = Number(prompt('Ingrese la cantidad de Martillos que desea comprar'))
        sumaProducto=cantidad*precioMartillo
        subMartillo=sumaProducto
        if (sumaProducto!=0){
        detalleMartillo= cantidad+' Martillo $ '+sumaProducto+'\n'}
        alert('Usted agregó '+ cantidad+' Martillo por un importe de $'+sumaProducto+' +IVA');
        break;

        case '2':
        cantidad =  Number(prompt('Ingrese la cantidad de Destornilladores que desea comprar'))
        sumaProducto=cantidad*precioDestornillador
        subDestonillador=sumaProducto
        if (sumaProducto!=0){
        detalleDestornillador= cantidad+' Destornillador $ '+sumaProducto+'\n'}
        alert('Usted agregó '+ cantidad+' Destornillador por un importe de $'+sumaProducto+' +IVA');
        break;

        case '3':
        cantidad = Number(prompt('Ingrese la cantidad de Tenazas que desea comprar'))
        sumaProducto=cantidad*precioTenaza
        subTenaza=sumaProducto
        if (sumaProducto!=0){
        detalleTenaza= cantidad+' Tenaza $ '+sumaProducto+'\n'}
        alert('Usted agregó '+ cantidad+' Tenaza por un importe de $'+sumaProducto+' +IVA');
        break;

        case '4':
        cantidad = Number(prompt('Ingrese la cantidad de Llave Francesa que desea comprar'))
        sumaProducto=cantidad*precioFrancesa
        subFrancesa=sumaProducto
        if (sumaProducto!=0){
        detalleFrancesa= cantidad+' Llave Francesa $ '+sumaProducto+'\n'}
        alert('Usted agregó '+ cantidad+' Llave Francesa por un importe de $'+sumaProducto+' +IVA');
       
        break;
        case'5':
        break
        default:
        alert('La opción seleccionada no es válida')
        manuales();
        break;
     
    }
    if(detalleMartillo==undefined){
        detalleMartillo=null
    }
    else if(detalleDestornillador==undefined){
        detalleDestornillador=null
    }
    else if(detalleTenaza==undefined){
        detalleTenaza=null
    }
    else if(detalleFrancesa==undefined){
        detalleFrancesa=null
    }
    resumenManuales=[detalleMartillo]+[detalleDestornillador]+[detalleTenaza]+[detalleFrancesa]
    subManuales=subMartillo+subDestonillador+subTenaza+subFrancesa
    }
    

function electricas() //Menú de la opción Herramientas Eléctricas
{
    item = prompt('Elija una Opción:\n1.Taladro\n2.Caladora\n3.Amoladora\n4.Torno de Mano\n5.Volver al menú principal')
    switch (item){
         case '1':
        cantidad = Number(prompt('Ingrese la cantidad de Taladros que desea comprar'))
        sumaProducto=cantidad*precioTaladro
        subTaladro=sumaProducto
        if (sumaProducto!=0){
        detalleTaladro= cantidad+' Taladro $ '+sumaProducto+'\n'}
        alert('Usted agregó '+ cantidad+' Taladro por un importe de $'+sumaProducto+' +IVA');
        break;

        case '2':
        cantidad =  Number(prompt('Ingrese la cantidad de Caladora que desea comprar'))
        sumaProducto=cantidad*precioCaladora
        subCaladora=sumaProducto
        if (sumaProducto!=0){
        detalleCaladora= cantidad+' Caladora $ '+sumaProducto+'\n'}
        alert('Usted agregó '+ cantidad+' Caladora por un importe de $'+sumaProducto+' +IVA');
        break;

        case '3':
        cantidad = Number(prompt('Ingrese la cantidad de Amoladora que desea comprar'))
        sumaProducto=cantidad*precioAmoladora
        subAmoladora=sumaProducto
        if (sumaProducto!=0){
        detalleAmoladora= cantidad+' Amoladora $ '+sumaProducto+'\n'}
        alert('Usted agregó '+ cantidad+' Amoladora por un importe de $'+sumaProducto+' +IVA');
        break;

        case '4':
        cantidad = Number(prompt('Ingrese la cantidad de Torno de Mano que desea comprar'))
        sumaProducto=cantidad*precioTorno
        subTorno=sumaProducto
        if (sumaProducto!=0){
        detalleTorno= cantidad+' Torno de Mano $ '+sumaProducto+'\n'}
        alert('Usted agregó '+ cantidad+' Torno de Mano por un importe de $'+sumaProducto+' +IVA');
       
        break;
        case '5':
        break;
        default:
        alert('La opción seleccionada no es válida');
        electricas();
        break;
     
    }
    if(detalleTaladro==undefined){
        detalleTaladro=null
    }
    else if(detalleCaladora==undefined){
        detalleCaladora=null
    }
    else if(detalleAmoladora==undefined){
        detalleAmoladora=null
    }
    else if(detalleTorno==undefined){
        detalleTorno=null
    }
    resumenElectricas=[detalleTaladro]+[detalleCaladora]+[detalleAmoladora]+[detalleTorno]
    subElectricas=subTaladro+subCaladora+subAmoladora+subTorno
    }


function terminarCompra() // Termina la compra
{
    total=subFerreteria+subManuales+subElectricas
    
    if (clienteTipo==1){
        alert('Gracias por comprar en "La Tuerca"\nEl detalle de su pedido es el siguiente:\n'+
        [resumenFerreteria]+'\n'+[resumenManuales]+'\n'+[resumenElectricas]+'\n'+'SubTotal: $'+total+'+IVA\n'+'Total: $'+total*1.21+' Final\n'+
        'Sus datos son los siguientes:\n'+razonSocial+'\n'+direccion+'\n'+localidad+'\n'+'CUIT:'+cuit+'\n'+mail+'\n'+
        'Telefono:'+telefono+'\n')
        
        
    }
    else if (clienteTipo==2){
        alert('Gracias por comprar en "La Tuerca"\nEl detalle de su pedido es el siguiente:\n'+
        [resumenFerreteria]+'\n'+[resumenManuales]+'\n'+[resumenElectricas]+'\n'+'Total: $'+total*1.21+' Final\n'+
        'Sus datos son los siguientes:\n'+nombre+'\n'+direccion+'\n'+localidad+'\n'+'DNI:'+dni+'\n'+mail+'\n'+'Telefono:'+telefono)
        
    }


}


//Programa

alert ('  Bienvenido a \n "Bulón y Tuerca"\n Ferretería Virtual') //Mensaje de Bienvenida
clasificaCliente()
if(clienteTipo=='1'||clienteTipo=='2'){
datosCliente()
producto = prompt('Eliga el tipo de producto que desea adquirir:\n 1. Productos de Ferreteria\n 2. Herramientas Manuales\n 3. Herramientas Eléctricas\n 4. Terminar Compra\n 5. Salir')
    
    while (producto!=5){

     if (producto =='1'){
        ferreteria()}
     else if (producto=='2'){
        manuales()
     }
     else if (producto=='3'){
        electricas()
     }
     else if (producto=='4'){
        producto=5
        terminarCompra()
     }
     
    if(producto!=5){
    producto = prompt('Eliga el tipo de producto que desea adquirir:\n 1. Productos de Ferreteria\n 2. Herramientas Manuales\n 3. Herramientas Eléctricas\n 4. Terminar Compra\n 5. Salir')
    }
    
    }
    }
    if(producto=='5'){
    alert('Gracias por visitar nuestra Web')
        
                
}

