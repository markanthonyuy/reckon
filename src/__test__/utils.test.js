import {
  getStartingValueInArray,
  getCurrentValueInArray,
  getHighestValueInArray,
  getLowestValueInArray,
} from '../utils/helpers'

describe('Utils functions', () => {
  const prices1 = [
    208.67, 208.64, 208.69, 208.66, 208.71, 208.72, 208.69, 208.74,
  ]
  const prices2 = [64.73, 64.69, 64.72, 64.68, 64.72, 64.71, 64.67, 64.7]
  const prices3 = [94.29]

  it('should get the starting value of the array', () => {
    expect(getStartingValueInArray(prices1)).toEqual(208.67)
    expect(getStartingValueInArray(prices2)).toEqual(64.73)
    expect(getStartingValueInArray(prices3)).toEqual(94.29)
  })

  it('should get the lowest value of the array', () => {
    expect(getLowestValueInArray(prices1)).toEqual(208.64)
    expect(getLowestValueInArray(prices2)).toEqual(64.67)
    expect(getLowestValueInArray(prices3)).toEqual(94.29)
  })

  it('should get the current value of the array', () => {
    expect(getCurrentValueInArray(prices1)).toEqual(208.74)
    expect(getCurrentValueInArray(prices2)).toEqual(64.7)
    expect(getCurrentValueInArray(prices3)).toEqual(94.29)
  })

  it('should get the highest value of the array', () => {
    expect(getHighestValueInArray(prices1)).toEqual(208.74)
    expect(getHighestValueInArray(prices2)).toEqual(64.73)
    expect(getHighestValueInArray(prices3)).toEqual(94.29)
  })
})
