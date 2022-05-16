let gasto = parseInt(prompt("¿Cuánto gastaste?"));
let tip = parseInt(prompt("¿Qué porcentaje querés dejar de propina? Ingresá sólo números sin símbolos"));
let monto = gasto*tip;
let porcentaje = 100;
let total = monto/porcentaje;

function propina(total){
   while (gasto>0 && tip>0){
      monto = gasto * tip;
      total = monto /porcentaje;
      return total;}
   if (gasto <=0 || tip <=0){
         gasto = parseInt(prompt("Ingresá un gasto mayor a cero"));
         tip = parseInt(prompt ("Ingresá una propina mayor a cero"));
         monto = gasto * tip;
         total = monto /porcentaje;
         return total;
      }
   }


let darPropina = alert("Debés dejar $" + propina(total));
