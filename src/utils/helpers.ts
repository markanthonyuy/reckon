export const getStartingValueInArray = (arr: number[]) => {
  if (arr.length) return arr[0]
  console.error('Parameter arr is not an array')
  return 0
}
export const getLowestValueInArray = (arr: number[]) => Math.min(...arr)
export const getHighestValueInArray = (arr: number[]) => Math.max(...arr)
export const getCurrentValueInArray = (arr: number[]) => {
  if (arr.length) return arr[arr.length - 1]
  console.error('Parameter arr is not an array')
  return 0
}
