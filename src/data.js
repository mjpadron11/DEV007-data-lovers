// estas funciones son de ejemplo

export const example = () => {
  return "example";
};

export const anotherExample = () => {
  return "OMG";
};

const big = document.querySelector(".big");
const point = document.querySelectorAll(".point");
//lleva el all porque son varos a diferencia de big que solo es uno
// se recorre todos los puntos para averiguar la posición en la que se presionar el punto, eso es con let posicion
point.forEach((cadaPunto, i) => {
  point[i].addEventListener("click", () => {
    let position = i;
    //recordar que i 0 es 0% y posicion 1  es 20%
    //la sgtte operación da el numero exacto en el eje x a traves de traslate
    let operation = position * -20;
    big.style.transform = `translateX(${operation}%)`;
    //con la linea anterior ya se desplaza al dar click a los puntos
    //ahora se recorren los puntos para dar la caracteristica de activo(cambia color)
    point.forEach((cadaPunto, i) => {
      point[i].classList.remove("active");
    });
    //el sgt añade la clase actiivo al punto presionado
    point[i].classList.add("active");
  });
});
