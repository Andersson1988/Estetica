/*La empresa Estética y Belleza SH posee sus instalaciones en el norte de la ciudad donde atiende a sus clientes ofreciendo tres servicios: masajes exfoliantes, peluquería y uñas La empresa cuenta con cinco empleados encargados de dar los servicios. Usualmente, cada usuario tiene su empleado favorito para cada servicio. Las tarifas de cada servicio son: masajes: 45000, peluquería 30000,uñas 20000. La empresa requiere un sistema de información con registro de usuarios, manejo de sesiones, pagos en línea, donde sus clientes puedan agendar citas de tal manera que a la hora de hacerlo se muestren los empleados que pueden dar el servicio con su respectivo horario de disponibilidad. 
La aplicación construida debe ser de consola.
El entregable es link del repositorio de la aplicación,ya sea github o gitlab
Use funciones en la codificación del sistema*/

let empleados = [{ "emplado": "Pablo", "horario": ["13", "17"], "masajes": 45000, "agenda": [] }, { "empleado": "Samuel", "horario": ["08", "12"], "masajes": 45000, "agenda": []}, { "empleado": "Victor", "horario": ["08", "12"], "peluquería": 30000, "agenda": []}, { "empleado": "Ingrid", "horario": ["13", "17"], "peluquería": 30000, "agenda": []}, { "empleado": "Daniela", "horario": ["08", "12"], "uñas": 20000, "agenda": []}]

console.log(empleados);
let usuario = [{}];
let pregunta = true;
let iterador = 0;

function agendar(empleados,usuario) {
    for (let index = 0; index < empleados[0].agenda; index++) {
        if (empleados[0].agenda[index].horario == usuario[iterador].cita) {
            hayTurnoDisponible = false
        }
    
    }
    
}
function regUsuario(usuario, pregunta, iterador) {
    while (pregunta == true) {
        usuario[iterador].documento = parseInt(prompt("Ingrese su documento"));
        usuario[iterador].nombre = prompt("Ingrese sus nombres");
        usuario[iterador].apellido = prompt("Ingrese sus apellidos");
        usuario[iterador].pago = prompt("Ingrese sus modo de pago");
        usuario[iterador].empleado = prompt("Ingrese con quién desea la cita");
        usuario[iterador].cita = prompt("Ingrese la hora de su cita");
        console.log(usuario);
        if (usuario[iterador].empleado == "Pablo") {
            let hayTurnoDisponible = true
        agendar(empleados,usuario);
            if (hayTurnoDisponible) {
                empleados[0].agenda.push({ horario: usuario[iterador].cita, cliente: usuario[iterador].documento })
            }
            console.log(empleados[0]);
        }
        else if (usuario[iterador].empleado == "Samuel") {
          let hayTurnoDisponible = true
        disponible(empleados,usuario);
            if (hayTurnoDisponible) {
                empleados[1].agenda.push({ horario: usuario[iterador].cita, cliente: usuario[iterador].documento })
        }
            console.log(empleados[1]);
      }
        else if (usuario[iterador].empleado == "Victor") {
            let hayTurnoDisponible = true
            disponible(empleados,usuario);
                if (hayTurnoDisponible) {
                    empleados[2].agenda.push({ horario: usuario[iterador].cita, cliente: usuario[iterador].documento })
            }
                console.log(empleados[2]);
         }
         else if (empleado == "Ingrid") {
            let hayTurnoDisponible = true
            disponible(empleados,usuario);
                if (hayTurnoDisponible) {
                    empleados[3].agenda.push({ horario: usuario[iterador].cita, cliente: usuario[iterador].documento })
            }
                console.log(empleados[3]);
         }
         else if (empleado == "Daniela") {
            let hayTurnoDisponible = true
            disponible(empleados,usuario);
                if (hayTurnoDisponible) {
                    empleados[4].agenda.push({ horario: usuario[iterador].cita, cliente: usuario[iterador].documento })
            }
                console.log(empleados[4]);
         }
         else {
             console.log("No existe ese empleado");
         }
         alert("Registro Exitoso.");
         pregunta = confirm("Desea registrar nuevo usuario");
         if (pregunta == true) {
             usuario.push({})
         }
             iterador++;
    pregunta=confirm("Desea ingresar otro valor") }
    return usuario;
}

regUsuario(usuario, pregunta, iterador);

let validacion = confirm("Si desea verificar su informacion.");
























































/* Programe un procedimiento que no reciba parámetros, sume los números
enteros 12 y 23, e imprima el resultado de la suma de estos dos números.
Haga las respectivas versiones para pseudocódigo y código.

function suma() {
    let suma_sin_parametros=12+23;
    return suma_sin_parametros;
}

let valor=suma();
console.log("funcion:",valor);
*/