const { useState, useEffect } = React;

function Paso({ paso, onBack }) {
  const [casoSeleccionado, setCasoSeleccionado] = useState(null);
  const [scriptSrc, setScriptSrc] = useState(null);

  useEffect(() => {
    if (!scriptSrc) return;

    const existing = document.querySelector(`script[src="${scriptSrc}"]`);
    if (existing) return;

    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [scriptSrc]);

  if (casoSeleccionado !== null) {
    const caso = paso.pasos[casoSeleccionado];

    return React.createElement(
      "div",
      { style: { marginLeft: 20, marginBottom: 8 } },
      
      React.createElement(
        "div",
        {},
        React.createElement("b", {}, caso.titulo),
        React.createElement(
          "div",
          { style: { marginTop: 8 } },
          React.createElement(
            "ol",
            { style: { paddingLeft: 24 } },
            caso.pasos.map((sub, i) => {
              let contenidoPrincipal = null;

              if (typeof sub === "string") {
                if (sub.includes(".js")) {
                  // Solo mostrar mensaje; carga del script la maneja useEffect
                  if (!scriptSrc) {
                    // Cargar script solo una vez
                    setScriptSrc(sub);
                  }
                  contenidoPrincipal = React.createElement("div", {
                    id: "script-container",
                  });
                } else {
                  contenidoPrincipal = sub;
                }
              } else if (typeof sub === "object") {
                contenidoPrincipal = sub.titulo || JSON.stringify(sub);
              }

              const subPasos =
                sub.pasos && Array.isArray(sub.pasos)
                  ? React.createElement(
                      "ul",
                      {},
                      sub.pasos.map((step, j) =>
                        React.createElement("li", { key: j }, step)
                      )
                    )
                  : null;

              return React.createElement(
                "li",
                { key: i, className: "arbol-leaf" },
                React.createElement(
                  "span",
                  { style: { fontWeight: "bold" } },
                  contenidoPrincipal
                ),
                subPasos
              );
            })
          )
        )
      ),
      React.createElement(
        "button",
        {
          className: "arbol-btn",
          onClick: () => {
            setCasoSeleccionado(null);
            setScriptSrc(null); // limpiar script
          },
          style: { marginBottom: 12 },
        },
        "← Volver a los casos"
      ),
    );
  }

  if (Array.isArray(paso.pasos)) {
    return React.createElement(
      "div",
      { style: { marginLeft: 20, marginBottom: 8 } },
      onBack &&
        React.createElement(
          React.Fragment,
          null,
          React.createElement("b", {}, paso.titulo),
          React.createElement("br", {})
        ),
      React.createElement(
        "div",
        { style: { marginTop: 8 } },
        paso.pasos.map((caso, i) =>
          React.createElement(
            "div",
            { key: i, style: { marginBottom: 8 } },
            React.createElement(
              "button",
              {
                className: "arbol-btn",
                onClick: () => {
                  setCasoSeleccionado(i);
                  setScriptSrc(null); // resetear script al cambiar de caso
                },
              },
              caso.titulo
            )
          )
        )
      ),
      React.createElement(
        "button",
        {
          className: "arbol-btn",
          onClick: onBack,
          style: { marginBottom: 12 },
        },
        "← Volver a tipologías"
      )
    );
  }

  return React.createElement("span", { className: "arbol-leaf" }, paso.titulo);
}

function App() {
  const [tipologiaSeleccionada, setTipologiaSeleccionada] = useState(null);

  return React.createElement(
    "div",
    { className: "container" },
    React.createElement("h1", {}, "Guiones Administrativos"),
    React.createElement(
      "div",
      {},
      tipologiaSeleccionada === null
        ? tipologias.map((tip, idx) =>
            React.createElement(
              "div",
              { key: idx, style: { marginBottom: 16 } },
              React.createElement(
                "button",
                {
                  className: "arbol-btn",
                  onClick: () => setTipologiaSeleccionada(idx),
                },
                tip.titulo
              )
            )
          )
        : React.createElement(Paso, {
            paso: tipologias[tipologiaSeleccionada],
            onBack: () => setTipologiaSeleccionada(null),
          })
    )
  );
}
