var mensajeOriginal;
var mensaje;
var munieco = document.getElementById("munieco");

//***************************************************** */
function encriptar() {
  mensajeOriginal = document.getElementById("input-texto").value;
  if (!validar(mensajeOriginal)) {
    if (mensajeOriginal == "") {
      mensaje = "Ningún mensaje fue encontrado";
      if (window.screen.width > 1000) {
        munieco.style.display = "flex";
      }
    } else {
      mensaje = document.getElementById("input-texto").value;
      mensaje = mensaje.replaceAll("e", "enter");
      mensaje = mensaje.replaceAll("i", "imes");
      mensaje = mensaje.replaceAll("a", "ai");
      mensaje = mensaje.replaceAll("o", "ober");
      mensaje = mensaje.replaceAll("u", "ufat");
      munieco.src = "imagenes/lock.png";
      document.getElementById("mensajes-estado").innerText =
        "Mensaje ENCRIPTADO con éxito";
      document.getElementById("btn-copiar").style.display = "flex";
      document.getElementById("btn-copiar").onclick = function () {
        copiar(mensaje);
      };
    }
    document.getElementById("respuesta").innerText =
      'SU MENSAJE ENCRIPTADO: "' + mensaje + '"';
      document.getElementById("input-texto").value="";
  } else {
    document.getElementById("respuesta").innerText =
      "No se aceptan caracteres especiales, mayúsculas o tíldes, inténtelo de nuevo.";
    document.getElementById("btn-copiar").style.display = "none";
    munieco.src = "imagenes/prohibido.png";
  }
}
//*********************************************************************** */
function desencriptar(mensaje) {
  var mensajeOriginal = document.getElementById("input-texto").value;
  if (!validar(mensajeOriginal)) {
    if (mensajeOriginal == "") {
      mensaje = "Ningún mensaje fue encontrado";
      if (window.screen.width > 1000) {
        munieco.style.display = "flex";
      }
    } else {
      mensaje = document.getElementById("input-texto").value;
      mensaje = mensaje.replaceAll("imes", "i");
      mensaje = mensaje.replaceAll("ai", "a");
      mensaje = mensaje.replaceAll("enter", "e");
      mensaje = mensaje.replaceAll("ober", "o");
      mensaje = mensaje.replaceAll("ufat", "u");
      // munieco.style.display = "none";
      munieco.src = "imagenes/unlock2.png";
      document.getElementById("mensajes-estado").innerText =
        "Mensaje DESENCRIPTADO con éxito";
      document.getElementById("btn-copiar").style.display = "flex";
      document.getElementById("btn-copiar").onclick = function () {
        copiar(mensaje);
      };
    }
    document.getElementById("respuesta").innerText =
      'SU MENSAJE DESENCRIPTADO: "' + mensaje + '"';
      document.getElementById("input-texto").value="";
  } else {
    document.getElementById("respuesta").innerText =
      "No se aceptan caracteres especiales, mayúsculas o tíldes, inténtelo de nuevo.";
    document.getElementById("btn-copiar").style.display = "none";
    munieco.src = "imagenes/prohibido.png";
  }
}

//************************************************************************* *//
function copiar(textoCopiado) {
  textoPegado = document.getElementById("input-texto");
  textoPegado.value = textoCopiado;
  document.getElementById("mensajes-estado").innerText =
    "Mensaje COPIADO con éxito";
  document.getElementById("respuesta").innerText = "";
  if (window.screen.width > 1000) {
    munieco.style.display = "flex";
  }
  document.getElementById("btn-copiar").style.display = "none";
  munieco.src = "imagenes/copy.png";
}
function validar(mensajeOriginal) {
  patron = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~A-Zá-úÁ-Ú]/;
  return patron.test(mensajeOriginal);
}
