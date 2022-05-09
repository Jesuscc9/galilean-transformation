export const formula = ({ v1, v2, v }) => {
  if (v1 && v2 && v === undefined) {
    // Case of problem 1
    return {
      v1,
      v2,
      v: v2 - v1
    }
  }

  if (v1 && v && v2 === undefined) {
    // Case of problem 2
    return {
      v1,
      v2: v1 + v,
      v
    }
  }

  return {
    v1,
    v2,
    v
  }
}
