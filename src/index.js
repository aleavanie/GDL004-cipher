window.onload = function() {
  // Botón para la función de cifrar.
  const eventoCifrar = document.getElementById("cifrar");
  eventoCifrar.addEventListener("click", () => {
    // Evento que sucede al dar click en el botón "cifrar".
    let mensajeOriginal = document.getElementById("mensajeOriginal").value; // Se guarda el valor de "mensajeOriginal" en la variable con el mismo nombre.
    let desplazamientos = document.getElementById("desplazamientos").value; // Se guarda el valor de "desplazamientos" en la variable con el mismo nombre.
    window.cipher.encode(mensajeOriginal, desplazamientos); // Se mandan los valores obtenidos a la función encode.
    document.getElementById("textoCifradoDescrifrado").innerHTML = window.cipher.encode(mensajeOriginal,desplazamientos); // // Trae el resultado de la función para ponerlo en la caja del texto cifrado/descifrado.
  });

  //Botón para la función de descifrar.
  const eventoDescifrar = document.getElementById("descifrar");
  eventoDescifrar.addEventListener("click", () => {
    // Evento que sucede al dar click en el botón "descifrar".
    let mensajeOriginal = document.getElementById("mensajeOriginal").value; // Se guarda el valor de "mensajeOriginal" en la variable con el mismo nombre.
    let desplazamientos = document.getElementById("desplazamientos").value; // Se guara el valor de "desplazamientos" en la variable con el mismo nombre.
    window.cipher.decode(mensajeOriginal, desplazamientos); // Se mandan los valores obtenidos a la función decode.
    document.getElementById("textoCifradoDescrifrado").innerHTML = window.cipher.decode(mensajeOriginal,desplazamientos); // Trae el resultado de la función para ponerlo en la caja del texto cifrado/descifrado.
  });
};
