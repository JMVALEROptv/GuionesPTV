const tipologias = [
  {
    titulo: "Facturación",
    pasos: [
      {
        titulo: "Cliente llama porque se le ha cobrado más este mes",
        pasos: [
          "Comprueba si es la primera factura de servicios fijos o hay nuevas portabilidades.",
          "Recuerda el ciclo de facturación y revisa las fechas de instalación o portabilidad.",
          {
            titulo: "Comprueba si hay gastos de devolución bancarios.",
            pasos: ["Recuerda que se cobran a mes vencido, revisa las fechas"],
          },
          "Comprueba si se ha acabado una promoción o hay fallo en factura.",
          "Informa al cliente sobre la duración de la promo y revisa posibles errores en la factura.",
          "Comprueba si tiene consumos efectuados y asesora sobre bloqueos y bonificaciones si aplica.",
        ],
      },
      {
        titulo: "Cliente llama porque no entiende la factura",
        pasos: [
          "Informar del ciclo de facturación.",
          "Informar gastos de devolución bancaria en caso de haberlos.",
          "Informar gastos por consumos en caso de haberlos.",
          "En caso de error, explicar y tranquilizar al cliente sobre la bonificación en el próximo ciclo.",
          "Informar sobre el estado de remesa bancaria.",
        ],
      },
      {
        titulo: "Cliente llama para pagar la factura",
        pasos: [
          "Si hay dos facturas, preguntar si quiere liquidar ambas o solo la más antigua.",
          "Indicar que tras el pago debe reiniciar los dispositivos si no funcionan en 5 minutos.",
          "Si hay terminales a plazos, debe pagar el plazo correspondiente.",
        ],
      },
    ],
  },
  {
    titulo: "Contratación",
    pasos: [
      {
        titulo: "Comprobar cobertura de fibra",
        pasos: [
          "Si hay red propia, aclarar términos, tarifas y condiciones.",
          "Si no hay red propia pero sí en el bloque contiguo, cargar aviso a ingeniería de red.",
          "Si no hay red propia, comprobar red indirecta y explicar condiciones si hay cobertura.",
          "Si no hay cobertura, informar al cliente.",
        ],
      },
      {
        titulo: "Contratación solo líneas móviles",
        pasos: [
          "Informar de tarifas y coste de la tarjeta si se envía al domicilio del cliente.",
        ],
      },
    ],
  },
  {
    titulo: "Gestiones administrativas",
    pasos: [
      {
        titulo: "Solicitud de cambio en producto o servicio",
        pasos: ["Pedir datos de seguridad.", "Ofrecer la tarifa más ajustada."],
      },
      {
        titulo: "Solicitud de cambio de domicilio",
        pasos: [
          {
            titulo: "Informar del precio (21.78€).",
            pasos: [
              "Para casos de Cambio de Domicilio entre ciudades se trabajará como baja y alta pero al coste de 21.78€",
              "Para casos en los que el cliente no quiere asumir el coste y amenaza con la baja, podemos valorar bonificar parte del coste consultando con Jefe de Equipo",
            ],
          },
          "Pedir datos de seguridad.",
          "El cliente debe llevar los dispositivos al nuevo domicilio.",
          "Dar cita considerando 3 huecos de agenda (1,5 horas).",
        ],
      },
      {
        titulo: "Solicitud de cambio de titular",
        pasos: [
          "Informar que se hace por escrito.",
          "Requiere datos y firma de ambos titulares.",
          "Puede hacerse presencial o telemáticamente.",
          "Enviar plantilla automática desde AS400 si aplica.",
          "Indicar cómo enviar el documento por email.",
        ],
      },
      {
        titulo: "Solicitud de cambio de cuenta bancaria",
        pasos: [
          "Informar que se hace por escrito.",
          "Puede hacerse presencial o telemáticamente.",
          "Enviar plantilla automática desde AS400 si aplica.",
          "Indicar cómo enviar el documento por email.",
        ],
      },
    ],
  },
  {
    titulo: "Gestiones Tecnicas",
    pasos: [
      {
        titulo: "INCIDENCIA DE INTERNET",
        pasos: ["js/net.js"],
      },
    ],
  },
  {
    titulo: "Descarga técnicos",
    pasos: [
      {
        titulo: "Averías",
        pasos: [
          "Preguntar zona y delegación.",
          "Solicitar dirección exacta.",
          "Anotar actuación del técnico.",
          "Revisión de niveles.",
          "Test de velocidad.",
          "Remoto si hay cambio de router.",
          "Confirmación del cliente.",
          "Valoración del servicio.",
        ],
      },
      {
        titulo: "Migración de TV",
        pasos: [
          "Preguntar zona y delegación.",
          "Solicitar dirección exacta.",
          "Anotar actuación del técnico.",
          "Confirmación del cliente.",
          "Valoración del servicio.",
        ],
      },
      {
        titulo: "Instalaciones (altas nuevas)",
        pasos: [
          "Revisión de niveles.",
          "Test de velocidad.",
          "Remoto.",
          {
            titulo: "Comprobaciones finales ( segun lo instalado )",
            pasos: [
              "TV sintonizada y STB conectado.",
              "Comprobación de línea fija.",
              "Entrega de tarjetas SIM.",
            ],
          },
          "Confirmación del cliente y servicios OK.",
          "Informar de llamada de bienvenida en el momento.",
        ],
      },
    ],
  },
];
