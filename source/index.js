export default ({
  from: { low: fromLow, high: fromHigh },
  to: { low: toLow, high: toHigh }
}) => value =>
  (value - fromLow) * (toHigh - toLow) / (fromHigh - fromLow) + toLow
