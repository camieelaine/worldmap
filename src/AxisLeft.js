export const AxisLeft = ({ yScale, innerWidth, tickOffset = 3 }) =>
  yScale.ticks().map((tickValue) => (
    <g className="tick" transform={`translate(0,${yScale(tickValue)})`}>
      <line x2={innerWidth} />
      <text
        key={tickValue}
        style={{ textAnchor: "end" }}
        x={-tickOffset}
        dy=".32em"
      >
        {tickValue}
      </text>
    </g>
  ));

// export const AxisLeft = ({ yScale }) =>
//   yScale.ticks().map((tickValue) => (
//     <g className="tick">
//       <text
//         key={tickValue}
//         style={{ textAnchor: "end" }}
//         x={-3}
//         dy=".32em"
//         y={yScale(tickValue)}
//       >
//         {tickValue}
//       </text>
//     </g>
//   ));
