import remap from "../source/index"

test(`it is a function`, () => {
  expect(typeof remap).toEqual(`function`)
})

test(`it returns a function`, () => {
  expect(
    typeof remap({ from: { low: 0, high: 0 }, to: { low: 0, high: 0 } })
  ).toEqual(`function`)
})

test(`it returns the expected output`, () => {
  const map = remap({
    from: {
      low: 1,
      high: 10
    },
    to: {
      low: 100,
      high: 1000
    }
  })
  const expected = 500
  const actual = map(5)
  expect(actual).toEqual(expected)
})
