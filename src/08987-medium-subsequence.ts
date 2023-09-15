/*
  8987 - Subsequence
  -------
  by jiangshan (@jiangshanmeta) #medium #union

  ### Question

  Given an array of unique elements, return all possible subsequences.

  A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements.

  For example:

  ```typescript
  type A = Subsequence<[1, 2]> // [] | [1] | [2] | [1, 2]
  ```

  > View on GitHub: https://tsch.js.org/8987
*/

/* _____________ Your Code Here _____________ */

/**
 * Subsequence<[1, 2]>
 * => Subsequence<[2]> | [1, ...Subsequence<2>]
 * => [] | [2] | [1, ...([] | [2])]
 * => [] | [2] | [1] | [1, 2]
 *
 * the most important is [1, ...([] | [2])]
 * its result is [1] | [1, 2]
 */
type Subsequence<T> = T extends [infer R, ...infer Rest] ? Subsequence<Rest> | [R, ...Subsequence<Rest>] : []

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Subsequence<[1, 2]>, [] | [1] | [2] | [1, 2]>>,
  Expect<Equal<Subsequence<[1, 2, 3]>, [] | [1] | [2] | [1, 2] | [3] | [1, 3] | [2, 3] | [1, 2, 3]>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/8987/answer
  > View solutions: https://tsch.js.org/8987/solutions
  > More Challenges: https://tsch.js.org
*/
