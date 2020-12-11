
function validar(elemento){
    let f = false;

    if(elemento.length === 11 || elemento.length === 13){
        f = validarCedula(elemento);
    }

    return f;
}
function validarCedula(ced) {
    
     if(!is_numeric(ced[0]) || !is_numeric(ced[ced.length - 1])){
         return false;
     }

     if(!is_numeric(ced[0]) && !is_numeric(ced[ced.length - 1])){
        return false;
    }


    let cedula = CLR(ced);
   
    let suma = 0;
    let chequeo = 0;

    let peso = ['1','2','1','2','1','2','1','2','1','2'];

    
    if(cedula.length !== 11){
        
        return false;
    }
    else{
        for(let i = 0; i < 10; i++){
            if(Number.isInteger(cedula[i])){
                return false;
            }

            let a = Number.parseInt(cedula[i]);
            let b = Number.parseInt(peso[i]);

            let r = a*b;
   
            let mult = Array.from(r.toString());
            

            if(mult.length > 1){
                a = Number.parseInt(mult[0]);
                b = Number.parseInt(mult[1]);
               
            }else{
                a = 0;
                b = Number.parseInt(mult[0]);
            }

            suma = suma + (a + b);
        }

        chequeo = ((suma*9)%10);
        
      if(chequeo !== Number.parseInt(cedula[10]))
        {
            return false
        }

    }

    return true;
}

function CLR(arr_ced) {
    let y = 0;
    let r = [];
    let rr= [];

    for(let i = 0; i < arr_ced.length; i++){
        if(is_numeric(arr_ced[i])){
            r[y] = arr_ced[i];
            y++;
        }
    }

    for(let x = 0; x < y; x++){
        rr[x] = r[x];
    }

    return rr;


}

function is_numeric(value) {
	return !isNaN(parseFloat(value)) && isFinite(value);
}


module.exports = validar
