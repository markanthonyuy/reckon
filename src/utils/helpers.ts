export const getStartingValueInArray = (arr: number[]) => {
  if (Array.isArray(arr)) return arr[0]
  console.error('Parameter arr is not an array')
  return 0
}
export const getLowestValueInArray = (arr: number[]) => {
  if (Array.isArray(arr)) return Math.min(...arr)
  console.error('Parameter arr is not an array')
  return 0
}
export const getHighestValueInArray = (arr: number[]) => {
  if (Array.isArray(arr)) return Math.max(...arr)
  console.error('Parameter arr is not an array')
  return 0
}
export const getCurrentValueInArray = (arr: number[]) => {
  if (Array.isArray(arr)) return arr[arr.length - 1]
  console.error('Parameter arr is not an array')
  return 0
}
