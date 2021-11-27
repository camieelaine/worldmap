import { line, curveNatural } from "d3";
export const Marks = ({
  data,
  xScale,
  yScale,
  xAccessor,
  yAccessor,
  tooltipFormat,
  circleRadius,
}) => (
  <g className="marks">
    <path
      fill="none"
      stroke="black"
      d={line()
        .x((d) => xScale(xAccessor(d)))
        .y((d) => yScale(yAccessor(d)))
        .curve(curveNatural)(data)}
    />
    {data.map((d) => (
      <circle
        cx={xScale(xAccessor(d))}
        cy={yScale(yAccessor(d))}
        r={circleRadius}
      >
        <title>{tooltipFormat(xAccessor(d))}</title>
      </circle>
    ))}
  </g>
);
