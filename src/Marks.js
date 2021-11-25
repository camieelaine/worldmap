export const Marks = ({
  data,
  xScale,
  yScale,
  xAccessor,
  yAccessor,
  tooltipFormat,
  circleRadius,
}) =>
  data.map((d) => (
    <circle
      className="mark"
      cx={xScale(xAccessor(d))}
      cy={yScale(yAccessor(d))}
      r={circleRadius}
    >
      <title>{tooltipFormat(xAccessor(d))}</title>
    </circle>
  ));
