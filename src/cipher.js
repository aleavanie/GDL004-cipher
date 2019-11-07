window.cipher = {
  encode: (text, shifts) => {

    let cifrar = ""; // Guardar las letras a remplazar.
    for (let i = 0; i < text.length; i++) {
      // La función va recorriendo cada letra del string hasta llegar a la última.
      let txt = text.charCodeAt(i);
      // Traducción de letras a ASCII.
      if (65 <= txt && txt <= 90) {
        // Rango de mayúsculas en ASCII.
        cifrar += String.fromCharCode(
          ((txt - 65 + parseInt(shifts)) % 26) + 65
        ); // Aquí se aplica la fórmula para obtener el nuevo número, y traspasarlo a la letra correspondiente en mayúscula.
      } else if (97 <= txt && txt <= 122) {
        // Rango de minúsculas en ASCII.
        cifrar += String.fromCharCode(
          ((txt - 97 + parseInt(shifts)) % 26) + 97
        ); // Aquí se aplica la fórmula para obtener el nuevo número, y traspasarlo a la letra correspondiente en minúscula.
      } else {
        cifrar += text.charAt(i);
      } // Los caracteres se muestran igual.
    }
    return cifrar;
    // Retornar el mensaje cifrado.
  },

  decode: (text, shifts) => {

    let descifrar = ""; // Guardar las letras a remplazar.
    for (let i = 0; i < text.length; i++) {
      // La función va recorriendo cada letra del string hasta llegar a la última.
      let txt = text.charCodeAt(i);
      // Traducción de letras a ASCII.
      if (65 <= txt && txt <= 90) {
        // Rango de mayúsculas en ASCII.
        descifrar += String.fromCharCode(
          ((txt + 65 - parseInt(shifts)) % 26) + 65
        ); // Aquí se aplica la fórmula para obtener el nuevo número, y traducir la letra del mensaje.
      } else if (97 <= txt && txt <= 122) {
        // Rango de minúsculas en ASCII.
        descifrar += String.fromCharCode(
          ((txt - 97 - parseInt(shifts) + 52) % 26) + 97
        ); // Aquí se aplica la fórmula para obtener el nuevo número, y traspasarlo a la letra correspondiente en minúscula.
      } else {
        descifrar += text.charAt(i);
      } // Los caracteres se muestran igual.
    }
    return descifrar;
    // Retornar el mensaje descifrado.
  }
};
