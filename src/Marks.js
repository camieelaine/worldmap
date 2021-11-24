export const Marks = ({
  data,
  xScale,
  yScale,
  xAccessor,
  yAccessor,
  tooltipFormat,
}) =>
  data.map((d) => (
    <rect
      className="mark"
      key={yAccessor(d)}
      x={0}
      y={yScale(yAccessor(d))}
      width={xScale(xAccessor(d))}
      height={yScale.bandwidth()}
    >
      <title>{tooltipFormat(xAccessor(d))}</title>
    </rect>
  ));
