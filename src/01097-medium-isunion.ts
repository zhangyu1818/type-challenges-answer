/*
  1097 - IsUnion
  -------
  by null (@bencor) #medium #union

  ### Question

  Implement a type `IsUnion`, which takes an input type `T` and returns whether `T` resolves to a union type.

  For example:

  ```ts
  type case1 = IsUnion<string> // false
  type case2 = IsUnion<string | number> // true
  type case3 = IsUnion<[string | number]> // false
  ```

  > View on GitHub: https://tsch.js.org/1097
*/

/* _____________ Your Code Here _____________ */

/**
 * distributive-conditional-types
 * https://stackoverflow.com/questions/55382306/typescript-distributive-conditional-types
 *
 * if T = 'a'|'b'|'c'
 *
 * T extends T => ('a' extends 'a'|'b'|'c') | ('b' extends 'a'|'b'|'c') | ('c' extends 'a'|'b'|'c')
 *
 * [R] extends [T] => ['a'|'b'|'c'] extends ['a'] => invalid
 */

type IsUnion<T, R = T> = [T] extends [never] ? false : T extends T ? ([R] extends [T] ? false : true) : never

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsUnion<string>, false>>,
  Expect<Equal<IsUnion<string | number>, true>>,
  Expect<Equal<IsUnion<'a' | 'b' | 'c' | 'd'>, true>>,
  Expect<Equal<IsUnion<undefined | null | void | ''>, true>>,
  Expect<Equal<IsUnion<{ a: string } | { a: number }>, true>>,
  Expect<Equal<IsUnion<{ a: string | number }>, false>>,
  Expect<Equal<IsUnion<[string | number]>, false>>,
  // Cases where T resolves to a non-union type.
  Expect<Equal<IsUnion<string | never>, false>>,
  Expect<Equal<IsUnion<string | unknown>, false>>,
  Expect<Equal<IsUnion<string | any>, false>>,
  Expect<Equal<IsUnion<string | 'a'>, false>>,
  Expect<Equal<IsUnion<never>, false>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/1097/answer
  > View solutions: https://tsch.js.org/1097/solutions
  > More Challenges: https://tsch.js.org
*/
