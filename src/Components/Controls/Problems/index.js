import { Problem1 } from './Problem1'
import { Problem2 } from './Problem2'
import { Problem3 } from './Problem3'
import { Problem4 } from './Problem4'

const Problems = [Problem1, Problem2, Problem3, Problem4]

const problemsOptions = [...Array(Problems.length).keys()].map((e) => ({ value: e, label: e + 1 }))
export { problemsOptions, Problems }
