export const Marks = ({ data, xScale, yScale, xAccessor, yAccessor }) =>
  data.map((d) => (
    <rect
      key={yAccessor(d)}
      x={0}
      y={yScale(yAccessor(d))}
      width={xScale(xAccessor(d))}
      height={yScale.bandwidth()}
    />
  ));
