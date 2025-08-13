(() => {
  const pasos = {
    paso1: {
      pregunta: "Medimos niveles de señal.",
      opciones: [
        {
          texto: "Niveles correctos",
          siguiente: "U200A",
          resultado: "Niveles correctos.",
        },
        {
          texto: "Niveles incorrectos",
          siguiente: "U200B",
          resultado: "Niveles incorrectos.",
        },
      ],
    },
    U200B: {
      pregunta: "¿Estado de la ONT?",
      opciones: [
        {
          texto: "Fibber issues (LOS en rojo)",
          siguiente: null,
          resultado: "Cargar incidencia a OYM y enviar técnico.",
        },
        {
          texto: "No es Fibber issues(LOS en rojo)",
          siguiente: "paso2",
          resultado: "No hay los, comprobamos cableado.",
        },
        {
          texto: "Topología de red muestra avería general",
          siguiente: "generalAveria",
          resultado: "Avería general detectada.",
        },
      ],
    },
    generalAveria: {
      pregunta: "¿Hay avería general abierta?",
      opciones: [
        {
          texto: "Sí",
          siguiente: null,
          resultado:
            "Avería general abierta. Asociar incidencia e informar al cliente.",
        },
        {
          texto: "No",
          siguiente: null,
          resultado:
            "No hay avería general abierta. Informar a OYMN2 e informar al cliente.",
        },
      ],
    },
    paso2: {
      pregunta: "¿Cableado correcto y ONT responde?",
      opciones: [
        {
          texto: "Sí",
          siguiente: "paso1",
          resultado:
            "Cableado correcto y ONT operativa, revisamos niveles de nuevo.",
        },
        {
          texto: "No",
          siguiente: null,
          resultado:
            "cableado corregido pero ONT no responde. Cargar incidencia a OYM y enviar técnico.",
        },
      ],
    },
    U200A: {
      pregunta: "Revisamos ONT en U200, estado del PARKER.",
      opciones: [
        {
          texto: "ONT no muestra PARKER",
          siguiente: "paso3",
          resultado: "ONT no muestra PARKER.",
        },
        {
          texto: "ONT muestra PARKER",
          siguiente: null,
          resultado:
            "ONT muestra PARKER, cargamos incidencia a OYM y enviamos técnico.",
        },
      ],
    },
    paso3: {
      pregunta: "Test de llamadas desde U200.",
      opciones: [
        {
          texto: "Test de llamadas correcto, tanto entrantes como salientes",
          siguiente: "paso4",
          resultado: "Test de llamadas correcto.",
        },
        {
          texto: "Test de llamadas incorrecto, tanto entrantes como salientes",
          siguiente: "paso5",
          resultado: "Test de llamadas incorrecto.",
        },
      ],
    },
    paso4: {
      pregunta:
        "Comprobamos cableado, reinicio de terminal fijo(en caso de tener teleasistencia conectadar cable de ONT a terminal fijo directo).",
      opciones: [
        {
          texto: "Telefono funciona correctamente",
          siguiente: null,
          resultado:
            "Cableado correcto, informamos al cliente de que el servicio está operativo y que encaso de tener teleasistencia conectada el fallo es de la teleasistencia.",
        },
        {
          texto: "Telefono no funciona pero cableado esta ok",
          siguiente: null,
          resultado: "Cargamos incidencia a OYM y enviamos técnico.",
        },
      ],
    },
    paso5: {
      pregunta: "Fallo en ONT o numero de telefono, conptobar con N2.",
      opciones: [
        {
          texto: "El fallo no es de numero de telefono",
          siguiente: null,
          resultado: "Cargamos incidencia a OYM y enviamos técnico.",
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
