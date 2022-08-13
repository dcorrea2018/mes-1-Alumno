console.log("Entro al main.js");

//let nombre = "diego";
//console.log(nombre);

//let nombre2 = "manuel";
//console.log(nombre2);

//string template

let nombre = `juan`;
let apellido = "perez";

//manera clasica de concatenar string
//console.log(nombre + " " + apellido);

//Esta es la manera de concatenar string con string template
console.log(`Mi nombre es: ${nombre}, mi apellido es:  ${apellido}`);

//objetos en javascript
let perro = {
  nombre: "Willy",
  color: "negro",
  raza: "Labrador",
  edad: 4,
  peso: 8,
};
console.log("el nombre es:", perro.nombre);
console.log("la raza es:", perro.raza);

let perro2 = {
  nombre: "Willy",
  color: "negro",
  raza: "Labrador",
  edad: 4,
  peso: 8,
};
//Destructuracion
const { raza, edad } = perro2;
console.log(raza);
console.log(edad);

//const edad_perro = perro2.nombre;
//const raza_porro = perro2.raza;

const json_colores = `
{
    "arrayColores":[{
            "nombreColor":"rojo",
            "valorHexadec":"#f00"
        },
        {
            "nombreColor":"verde",
            "valorHexadec":"#0f0"
        },
        {
            "nombreColor":"azul",
            "valorHexadec":"#00f"
        },
        {
            "nombreColor":"cyan",
            "valorHexadec":"#0ff"
        },
        {
            "nombreColor":"magenta",
            "valorHexadec":"#f0f"
        },
        {
            "nombreColor":"amarillo",
            "valorHexadec":"#ff0"
        },
        {
            "nombreColor":"negro",
            "valorHexadec":"#000"
        }
    ]
}
`;
const objeto_de_js = JSON.parse(json_colores);
console.log(json_colores); // esto es el JSON puro
console.log(objeto_de_js); // JSON tranformado en objeto

objeto_de_js.arrayColores.forEach((item) => {
  console.log(item.nombreColor);
});
