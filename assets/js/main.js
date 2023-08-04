var listadoDeportistasBody = document.querySelector("#listado-deportistas tbody");

function ejercicio40() {
    for (let index = 1; index <=2; index++) {
        alert("Vamos a capturar los valores del deportista" +index)

    var nombre = prompt(`Ingrese el nombre(${index})`);
    var apellido = prompt(`Ingrese el apellido(${index})`);
    var edad = prompt(`Ingrese la edad(${index})`);
    var estatura = prompt(`Ingrese la estatura(${index})`);
    var peso = prompt(`Ingrese el peso(${index})`);

    var estatus = edad <= 18 && estatura >= 180 && peso <= 80
    var estatusTexto = estatus ? 'Admitido' : 'No adminitido'
    var claseTexto = estatus ? 'text-success' : 'text-danger'

    listadoDeportistasBody.innerHTML += `
        <tr>
            <td>${nombre} ${apellido}</td>
            <td>${edad}</td>
            <td>${estatura}</td>
             <td>${peso}</td>
            <td class= "${claseTexto}">${estatusTexto}</td>
        </tr>
        `
    }
}
//ejercicio40();

function ejercico7() {
    var repetir
    do {
        var nombre = prompt("Ingrese su nombre");
        repetir = nombre === "" || !isNaN(nombre)
        if (repetir) {
            alert("Dato invalido para nombre, vuelva a ingresar")
        }
    } while (repetir);
   


    var edad = prompt("Ingrese su edad");
    var sexo = prompt("Ingrese su sexo (1: Masculino, 2: Femenino");
    var edo_civil = prompt("Ingrese su estado civil (1:Soltero, 2: Casado, 3: Otros)");
    
    var noSeManda = (edad < 18) || (sexo == 1 && edo_civil ==2)
    var mensaje =`${nombre} usted ${noSeManda ? 'No' : 'Si'} se manda`

    alert(mensaje)
}
ejercico7();
