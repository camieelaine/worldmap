import React, { useState, useCallback, useEffect } from "react";
import ReactDOM from "react-dom";
import {
  csv,
  scaleLinear,
  scaleTime,
  max,
  format,
  timeFormat,
  extent,
} from "d3";
import { useData } from "./useData";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";
import { Dropdown } from "./Dropdown";
import "./App.css";

const width = 960;
const menuHeight = 75;
const height = 500 - menuHeight;
const margin = { top: 20, right: 30, bottom: 65, left: 90 };
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 45;

/* const attributes = [
  { value: "sepal_length", label: "Sepal Length" },
  { value: "sepal_width", label: "Sepal Width" },
  { value: "petal_length", label: "Petal Length" },
  { value: "petal_width", label: "Petal Width" },
  { value: "species", label: "Species" },
];

const getLabel = (value) => {
  for (let i = 0; i < attributes.length; i++) {
    if (attributes[i].value === value) {
      return attributes[i].label;
    }
  }
}; */

const App = () => {
  const data = useData();

  //const initialXAttribute = "date";
  //const [xAttribute, setXAttribute] = useState(initialXAttribute);
  const xAccessor = (d) => d.date;
  const xAxisLabel = "Time";

  //const initialYAttribute = "mlytavgnormal";
  //const [yAttribute, setYAttribute] = useState(initialYAttribute);
  const yAccessor = (d) => d.mlytavgnormal;
  const yAxisLabel = "Temperature";

  if (!data) {
    return <pre>Loading...</pre>;
  }

  const innerHeight = height - margin.top - margin.bottom;
  const innerWidth = width - margin.left - margin.right;
  const xAxisTickFormat = timeFormat("%b");
  //const xAxisTickFormat = timeFormat("%a");

  const xScale = scaleTime()
    .domain(extent(data, xAccessor))
    .range([0, innerWidth])
    .nice();

  const yScale = scaleLinear()
    .domain(extent(data, yAccessor))
    .range([innerHeight, 0])
    .nice();

  return (
    <>
      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <AxisBottom
            xScale={xScale}
            innerHeight={innerHeight}
            tickFormat={xAxisTickFormat}
            tickOffset={7}
          />
          <text
            className="axis-label"
            textAnchor="middle"
            transform={`translate(${-yAxisLabelOffset},${
              innerHeight / 2
            }) rotate(-90)`}
          >
            {yAxisLabel}
          </text>
          <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={7} />
          <text
            className="axis-label"
            x={innerWidth / 2}
            y={innerHeight + xAxisLabelOffset}
            textAnchor="middle"
          >
            {xAxisLabel}
          </text>
          <Marks
            data={data}
            xScale={xScale}
            yScale={yScale}
            xAccessor={xAccessor}
            yAccessor={yAccessor}
            tooltipFormat={xAxisTickFormat}
            circleRadius={7}
          />
        </g>
      </svg>
    </>
  );
};
export default App;
