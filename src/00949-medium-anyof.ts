/*
  949 - AnyOf
  -------
  by null (@kynefuk) #medium #array

  ### Question

  Implement Python liked `any` function in the type system. A type takes the Array and returns `true` if any element of the Array is true. If the Array is empty, return `false`.

  For example:

  ```ts
  type Sample1 = AnyOf<[1, "", false, [], {}]> // expected to be true.
  type Sample2 = AnyOf<[0, "", false, [], {}]> // expected to be false.
  ```

  > View on GitHub: https://tsch.js.org/949
*/

/* _____________ Your Code Here _____________ */

/**
 * simple way
 *
 * type AnyOf<T extends any[]> = T[number] extends '' | false | 0 | [] | undefined | null | Record<string, never>
 * ? false
 * : true
 *
 * If T is [1, '', false, [], {}], then T[number] is 1 | '' | false | [] | {}.
 *
 * TypeScript checks whether each type in T[number].
 * In other words, it checks:
 *
 * 1. If 1 can be assigned to '' | false | 0 | [] | undefined | null | Record<string, never>
 * 2. If '' can be assigned to '' | false | 0 | [] | undefined | null | Record<string, never>
 * 3. If false can be assigned to '' | false | 0 | [] | undefined | null | Record<string, never>
 * 4. If [] can be assigned to '' | false | 0 | [] | undefined | null | Record<string, never>
 * 5. If {} can be assigned to '' | false | 0 | [] | undefined | null | Record<string, never>
 *
 * 1 cannot be assigned to '' | false | 0 | [] | undefined | null | Record<string, never>.
 * Therefore, return false.
 */

// map array
type AnyOf<T extends any[]> = {
  [K in keyof T]: T[K] extends '' | false | 0 | [] | undefined | null | Record<string, never> ? false : true
}[number] extends false
  ? false
  : true

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<AnyOf<[1, 'test', true, [1], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[1, '', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, 'test', false, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', true, [], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [1], {}]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], { name: 'test' }, { 1: 'test' }]>, true>>,
  Expect<Equal<AnyOf<[0, '', false, [], {}, undefined, null]>, false>>,
  Expect<Equal<AnyOf<[]>, false>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/949/answer
  > View solutions: https://tsch.js.org/949/solutions
  > More Challenges: https://tsch.js.org
*/
