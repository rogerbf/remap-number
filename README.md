# remap-number

Port of the [Arduino map function](https://www.arduino.cc/en/Reference/Map).

## usage

```javascript
import remap from "remap-number"

const remapper = remap({
  from: {
    low: 1,
    high: 10
  },
  to: {
    low: 100,
    high: 1000
  }
})

remapper(5) // 500
```
