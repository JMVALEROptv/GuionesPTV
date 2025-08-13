(() => {
  const pasos = {
    paso1: {
      pregunta: "¿El cliente ha pagado la factura?",
      opciones: [
        {
          texto: "Sí",
          siguiente: "paso2",
          resultado: "El cliente ha pagado la factura.",
        },
        {
          texto: "No",
          siguiente: "paso3",
          resultado: "El cliente no ha pagado la factura.",
        },
      ],
    },
    paso2: {
      pregunta: "¿El cliente está en domicilio?",
      opciones: [
        { texto: "Sí", siguiente: "paso5", resultado: "El cliente está en domicilio." },
        {
          texto: "No",
          siguiente: "paso4ND",
          resultado: "El cliente no está en domicilio.",
        },
      ],
    },
    paso3: {
      pregunta:
        "Informar al cliente que debe pagar la factura y que, si quiere, lo hacemos en llamada.",
      opciones: [
        {
          texto: "Sí, pagar ahora",
          siguiente: "paso1",
          resultado: "El cliente ha decidido pagar la factura ahora.",
        },
        {
          texto: "No, no pagar ahora",
          siguiente: null,
          resultado:
            "El cliente no ha querido pagar la factura ahora. Se le informa que el servicio se restablecerá al pagar.",
        },
      ],
    },
    paso4D: {
      pregunta: "Comprobamos U200.",
      opciones: [
        {
          texto: "No es Fiber issues",
          siguiente: "paso8",
          resultado: "El cliente está en domicilio, seguimos revisando con él.",
        },
        {
          texto: "Sí es Fiber issues",
          siguiente: null,
          resultado: "Envío de técnico para resolución.",
        },
        {
          texto: "Miramos tipología de red para ver si es avería general o particular",
          siguiente: "paso6",
          resultado: "Revisamos si es avería general o particular.",
        },
      ],
    },
        paso4ND: {
      pregunta: "Comprobamos U200.",
      opciones: [
        {
          texto: "No es Fiber issues",
          siguiente: null,
          resultado:
            "Cargamos incidencia a OYM dejándola abierta e indicando cuándo estará el cliente en domicilio para su resolución.",
        },
        {
          texto: "Sí es Fiber issues",
          siguiente: null,
          resultado: "Envío de técnico para resolución.",
        },
        {
          texto: "Miramos tipología de red para ver si es avería general o particular",
          siguiente: "paso6",
          resultado: "Revisamos si es avería general o particular.",
        },
      ],
    },
    paso5: {
      pregunta: "¿Niveles correctos?",
      opciones: [
        {
          texto: "Sí, todo correcto",
          siguiente: "paso7",
          resultado: "Todo correcto. Revisamos historial de incidencias.",
        },
        {
          texto: "No, niveles con error",
          siguiente: "paso4D",
          resultado: "Revisamos en U200 el estado de la ONT.",
        },
      ],
    },
    paso6: {
      pregunta: "¿Hay avería general detectada?",
      opciones: [
        {
          texto: "Sí, hay avería general",
          siguiente: null,
          resultado:
            "Informamos al cliente de la avería general y le indicamos que se restablecerá el servicio cuando se resuelva. Asignamos el contrato a la incidencia.",
        },
        {
          texto: "No, no hay avería general",
          siguiente: null,
          resultado: "Informamos a N2 para su gestión.",
        },
      ],
    },
    paso7: {
      pregunta: "¿Hay incidencias previas?",
      opciones: [
        {
          texto: "Sí, hay incidencias previas en los últimos 30 días",
          siguiente: "paso9",
          resultado:
            "Es reiterativa. Cargamos a OYM. Buscamos solución y mandamos técnico como avería igualmente.",
        },
        {
          texto: "No, no hay incidencias previas",
          siguiente: "paso9",
          resultado: "No es reiterativa. Sondeamos al cliente.",
        },
      ],
    },
    paso8: {
      pregunta: "Revisamos cableado y conexión eléctrica de ONT/router",
      opciones: [
        {
          texto: "Todo correcto",
          siguiente: "paso5",
          resultado: "Todo correcto. Volvemos a revisar niveles.",
        },
        {
          texto: "La ONT no responde o no enciende",
          siguiente: null,
          resultado: "Mandamos técnico como avería.",
        },
      ],
    },
    paso9: {
      pregunta:
        "Sondeo al cliente: dispositivo afectado, tiempo desde el inicio del problema, síntomas, etc.",
      opciones: [
        {
          texto:
            "Fallo en servicios de streaming, IPTV, videoconsolas, webs del gobierno, etc.",
          siguiente: "paso10",
          resultado:
            "Fijamos IP al cliente y seguimos revisando tras comprobar si ya le funciona.",
        },
        {
          texto: "Fallo en navegación, velocidad, etc.",
          siguiente: "paso10",
          resultado:
            "Revisamos configuración de router, ancho de banda, canales, band steering, etc.",
        },
      ],
    },
    paso10: {
      pregunta: "¿Problema resuelto?",
      opciones: [
        {
          texto: "Sí, problema resuelto",
          siguiente: null,
          resultado:
            "Cargamos incidencia a OYM como resuelta y descargada si no es reiterativa.",
        },
        {
          texto: "No, problema no resuelto",
          siguiente: "paso11",
          resultado:
            "Reaprovisionamos ONT con reset en cascada de dispositivos.",
        },
      ],
    },
    paso11: {
      pregunta: "¿Problema resuelto tras reaprovisionar?",
      opciones: [
        {
          texto: "Sí, problema resuelto",
          siguiente: null,
          resultado:
            "Cargamos incidencia a OYM como resuelta y descargada si no es reiterativa.",
        },
        {
          texto: "No, problema no resuelto",
          siguiente: null,
          resultado: "Mandamos técnico como avería.",
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
