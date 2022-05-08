export const formula = ({ v1, v2, v }) => {
  if (v1 && v2 && v === undefined) {
    return {
      v1,
      v2,
      v: v2 - v1
    }
  }

  return {
    v1,
    v2,
    v
  }
}
