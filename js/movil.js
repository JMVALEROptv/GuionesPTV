(() => {
  const pasos = {
    paso1: {
      pregunta: "",
      opciones: [
        {
          texto: "",
          siguiente: "",
          resultado: "",
        },
        {
          texto: "",
          siguiente: "",
          resultado: "",
        },
      ],
    },
  };

  function iniciarPaso(nombrePaso) {
    const contenedor = document.getElementById("script-container");
    contenedor.innerHTML += "\n";

    const paso = pasos[nombrePaso];
    if (!paso) {
      contenedor.innerText = "Paso no encontrado.";
      return;
    }

    const titulo = document.createElement("p");
    titulo.style.fontWeight = "bold";
    titulo.style.fontSize = "1.2em";
    titulo.style.marginBottom = "8px";
    titulo.style.whiteSpace = "pre-line";
    titulo.style.textDecoration = "underline";
    titulo.innerText = paso.pregunta;
    contenedor.appendChild(titulo);

    const mensaje = document.createElement("div");
    mensaje.style.marginTop = "12px";
    mensaje.style.fontWeight = "bold";
    mensaje.style.whiteSpace = "pre-line";
    contenedor.appendChild(mensaje);

    paso.opciones.forEach((opcion) => {
      const btn = document.createElement("button");
      btn.innerText = opcion.texto;
      btn.className = "arbol-btn";
      btn.style.marginRight = "8px";
      btn.onclick = () => {
        mensaje.innerText += `${opcion.resultado}`;
        if (opcion.siguiente) {
          const botones = contenedor.querySelectorAll(".arbol-btn");
          botones.forEach((b) => (b.style.display = "none"));
          setTimeout(() => iniciarPaso(opcion.siguiente), 1500);
        } else {
          const botones = contenedor.querySelectorAll(".arbol-btn");
          botones.forEach((b) => b.remove());
        }
      };
      contenedor.appendChild(btn);
    });
  }

  requestAnimationFrame(() => iniciarPaso("paso1"));
})();
