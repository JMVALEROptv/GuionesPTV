(() => {
  const pasos = {
    paso1: {
      pregunta: "¿Cliente de red indirecta Mas Movil o Orange?",
      opciones: [
        {
          texto: "Mas Movil",
          siguiente: "paso1M",
          resultado: "Cliente de red indirecta Mas Movil.",
        },
        {
          texto: "Orange",
          siguiente: "paso1O",
          resultado: "Cliente de red indirecta Orange.",
        },
      ],
    },
    paso1M: {
      pregunta: "¿Estado de el router( todas las luces encendidas)?",
      opciones: [
        {
          texto: "Sí",
          siguiente: "paso2M",
          resultado:
            "Router en estado óptimo. Proceder con las siguientes gestiones.",
        },
        {
          texto: "No",
          siguiente: "paso2M",
          resultado:
            "Router no operativo. Proceder con las gestiones de incidencia.",
        },
      ],
    },
    paso2M: {
      pregunta:
        "¿Cableado correcto( router enchufado, cable de red conectado, en caso de tener ONT cable de fibra conectado)?",
      opciones: [
        {
          texto: "Sí",
          siguiente: "paso3M",
          resultado: "Cableado correcto.",
        },
        {
          texto: "No",
          siguiente: "paso3M",
          resultado:
            "Cableado incorrecto, corregir cableado y volver a comprobar.",
        },
      ],
    },
    paso3M: {
      pregunta: "¿Sigue sin servicio?",
      opciones: [
        {
          texto: "Sí",
          siguiente: "paso4M",
          resultado:
            "Reset en cascada de los dispositivos y comprobar si se restablece el servicio.",
        },
        {
          texto: "No",
          siguiente: null,
          resultado: "Servicio restablecido. Cargar incidencia y solucionar.",
        },
      ],
    },
    paso4M: {
      pregunta: "¿Sigue sin servicio tras el reset?",
      opciones: [
        {
          texto: "Sí",
          siguiente: "paso5M",
          resultado:
            "Harder reset del router y ONT si corresponde y revisar si se restablece el servicio.",
        },
        {
          texto: "No",
          siguiente: null,
          resultado: "Servicio restablecido. Cargar incidencia y solucionar.",
        },
      ],
    },
    paso5M: {
      pregunta: "¿Sigue sin servicio tras el harder reset?",
      opciones: [
        {
          texto: "Sí",
          siguiente: null,
          resultado: "Cargar incidencia y derivar a red indirecta.",
        },
        {
          texto: "No",
          siguiente: null,
          resultado: "Servicio restablecido. Cargar incidencia y solucionar.",
        },
      ],
    },
    paso1O: {
      pregunta: "¿Estado del router en SUMA?",
      opciones: [
        {
          texto: "Test Ping correcto",
          siguiente: "paso3O",
          resultado: "Router responde.",
        },
        {
          texto: "Test Ping incorrecto",
          siguiente: "paso2O",
          resultado: "Router no responde.",
        },
      ],
    },
    paso2O: {
      pregunta: "¿Test de fibra correcto?",
      opciones: [
        {
          texto: "Sí",
          siguiente: "paso3O",
          resultado: "Fibra en estado óptimo.",
        },
        {
          texto: "No",
          siguiente: null,
          resultado:
            "Test erróneo, Cargar incidencia y derivar a red indirecta.",
        },
      ],
    },
    paso3O: {
      pregunta: "¿Estado de las luces del router?",
      opciones: [
        {
          texto: "Todas encendidas",
          siguiente: "paso4O",
          resultado: "Router en estado óptimo.",
        },
        {
          texto: "Luces apagadas o parpadeando erroneamente",
          siguiente: "paso4O",
          resultado:
            "Router no operativo.",
        },
      ],
    },
    paso4O: {
      pregunta: "¿Cableado correcto( router enchufado, cable de red conectado, en caso de tener ONT cable de fibra conectado)?",
      opciones: [
        {
          texto: "Sí",
          siguiente: "paso5O",
          resultado: "Cableado correcto.",
        },
        {
          texto: "No",
          siguiente: "paso5O",
          resultado:
            "Cableado incorrecto, corregir cableado y volver a comprobar.",
        },
      ],
    },
    paso5O: {
        pregunta: "¿Sigue sin servicio?",
        opciones: [
            {
            texto: "Sí",
            siguiente: "paso6O",
            resultado:
                "Reset en cascada de los dispositivos y comprobar si se restablece el servicio.",
            },
            {
            texto: "No",
            siguiente: null,
            resultado: "Servicio restablecido. Cargar incidencia y solucionar.",
            },
        ],
        },
    paso6O: {
      pregunta: "¿Sigue sin servicio tras el reset?",
        opciones: [
            {
            texto: "Sí",
            siguiente: "paso7O",
            resultado:
                "Harder reset del router y ONT si corresponde y revisar si se restablece el servicio.",
            },
            {
            texto: "No",
            siguiente: null,
            resultado: "Servicio restablecido. Cargar incidencia y solucionar.",
            },
        ],
    },
    paso7O: {
        pregunta: "¿Sigue sin servicio tras el harder reset?",
        opciones: [
            {
            texto: "Sí",
            siguiente: null,
            resultado: "Cargar incidencia y derivar a red indirecta.",
            },
            {
            texto: "No",
            siguiente: null,
            resultado: "Servicio restablecido. Cargar incidencia y solucionar.",
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
          setTimeout(() => iniciarPaso(opcion.siguiente), 2000);
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
