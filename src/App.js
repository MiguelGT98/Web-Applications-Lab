import React, { useState } from "react";
import "./App.css";
import ButtonFilter from "./components/ButtonFilter";
import RangeFilter from "./components/RangeFilter";
import Button from "./components/Button";

function App() {
  const [shapes, setShapes] = useState(shapeButtons);
  const [colors, setColors] = useState(colorButtons);
  const [clarity, setClarity] = useState(clarityButtons);
  const [cuts, setCuts] = useState(cutButtons);
  const [caratValue, setCaratValue] = useState([0, 30]);
  const [priceValue, setPriceValue] = useState([200, 5000000]);

  const resetState = () => {
    setShapes(shapeButtons);
    setColors(colorButtons);
    setClarity(clarityButtons);
    setCuts(cutButtons);
    setCaratValue([0, 30]);
    setPriceValue([200, 5000000]);
  };

  const printState = () => {
    console.log({
      shapes: filterSelected(shapes) || {},
      colors: filterSelected(colors) || {},
      clarity: filterSelected(clarity) || {},
      cuts: filterSelected(cuts) || {},
      caratValue,
      priceValue,
    });
  };

  const filterSelected = (array) => array.filter((el) => el.selected)[0];

  return (
    <div className="App">
      <div className="left">
        <ButtonFilter
          setState={setShapes}
          buttons={shapes}
          title="Forma"
          tooltip="Selecciona alguna forma para tu gema."
        ></ButtonFilter>
        <ButtonFilter
          setState={setColors}
          buttons={colors}
          title="Color"
          tooltip="Selecciona algún color para tu gema."
        ></ButtonFilter>
        <ButtonFilter
          setState={setClarity}
          buttons={clarity}
          title="Claridad"
          tooltip="Selecciona alguna claridad para tu gema."
        ></ButtonFilter>
      </div>
      <div className="right">
        <ButtonFilter
          setState={setCuts}
          buttons={cuts}
          title="Corte"
          tooltip="Selecciona algun corte para tu gema."
        ></ButtonFilter>
        <RangeFilter
          imgFrom="Quilataje/pequeno.png"
          imgTo="Quilataje/grande.png"
          title="Quilataje"
          tooltip="Selecciona el rango de quilataje para tu gema."
          from={0}
          to={30}
          range={caratValue}
          setRange={setCaratValue}
        ></RangeFilter>
        <RangeFilter
          title="Precio"
          tooltip="Selecciona el rango de precio para tu gema."
          from={200}
          to={5000000}
          range={priceValue}
          setRange={setPriceValue}
          step={100}
        ></RangeFilter>
      </div>
      <div className="full-width">
        <Button
          label="Buscar"
          onClick={printState}
          className="bg-blue"
        ></Button>
        <Button
          label="Limpiar filtros"
          onClick={resetState}
          className="bg-white"
        ></Button>
      </div>
    </div>
  );
}

export default App;

const shapeButtons = [
  { label: "Redondo", src: "Forma/redondo.png" },
  { label: "Princesa", src: "Forma/princesa.png" },
  { label: "Esmeralda", src: "Forma/esmeralda.png" },
  { label: "Ovalo", src: "Forma/ovalo.png" },
  { label: "Marquesa", src: "Forma/marquesa.png" },
  { label: "Pera", src: "Forma/pera.png" },
  { label: "Asscher", src: "Forma/asscher.png" },
  { label: "Corazon", src: "Forma/corazon.png" },
  { label: "Cojin", src: "Forma/cojijn.png" },
  { label: "Baguette", src: "Forma/baguette.png" },
  { label: "Trillon", src: "Forma/trillon.png" },
  { label: "Radiante", src: "Forma/radiante.png" },
];

const colorButtons = [
  { label: "Transparente", src: "Color/incoloro.png" },
  { label: "Casi Incoloro", src: "Color/casi-incoloro.png" },
  { label: "Ligeramente amarillo", src: "Color/ligeramente-amarillo.png" },
  { label: "Amarillo claro", src: "Color/amarillo-claro.png" },
];

const clarityButtons = [
  { label: "Perfecta", src: "Claridad/perfecta.png" },
  {
    label: "Imperfecciones no visibles",
    src: "Claridad/imperfecciones-no-visibles.png",
  },
  {
    label: "Imperfecciones visibles a 10x",
    src: "Claridad/imperfecciones-10x.png",
  },
  {
    label: "Imperfecciones visibles a simple vista",
    src: "Claridad/imperfecciones-simple-vista.png",
  },
];

const cutButtons = [
  { label: "Excelente (Máximo brillo)", src: "Corte/excelente.png" },
  { label: "Muy bueno (Muy brillante)", src: "Corte/muy-bueno.png" },
  { label: "Bueno (Brillante)", src: "Corte/bueno.png" },
  { label: "Regular (Poco brillante)", src: "Corte/regular.png" },
];
