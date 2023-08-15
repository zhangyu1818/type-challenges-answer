/*
  4425 - Greater Than
  -------
  by ch3cknull (@ch3cknull) #medium #array

  ### Question

  In This Challenge, You should implement a type `GreaterThan<T, U>` like `T > U`

  Negative numbers do not need to be considered.

  For example

  ```ts
  GreaterThan<2, 1> //should be true
  GreaterThan<1, 1> //should be false
  GreaterThan<10, 100> //should be false
  GreaterThan<111, 11> //should be true
  ```

  Good Luck!

  > View on GitHub: https://tsch.js.org/4425
*/

/* _____________ Your Code Here _____________ */

type NumberToArray<
  T extends number,
  S extends string = `${T}`,
  V extends number[] = [],
> = S extends `${infer R extends number}${infer N}` ? (R extends '' ? V : NumberToArray<T, N, [...V, R]>) : V

type GreaterThanLength<
  V1 extends number[],
  V2 extends number[],
  R extends number[] = [],
> = R['length'] extends V1['length']
  ? false
  : R['length'] extends V2['length']
  ? true
  : GreaterThanLength<V1, V2, [...R, 1]>

type POP<T extends number[]> = T extends [...infer R, infer _] ? R : T
type Last<T extends number[]> = T extends [...infer _, infer R] ? R : 0

type GreaterThanValue<V1 extends number[], V2 extends number[]> = Last<V1> extends Last<V2>
  ? GreaterThanValue<POP<V1>, POP<V2>>
  : GreaterThanValueImp<Last<V1>, Last<V2>>

type GreaterThanValueImp<
  V1 extends number,
  V2 extends number,
  R extends number[] = [],
> = R['length'] extends V1 ? false : R['length'] extends V2 ? true : GreaterThanValueImp<V1, V2, [...R, 1]>

type GreaterThan<Value1 extends number, Value2 extends number> =
  // if the values are same
  Value1 extends Value2
    ? false
    : // ff the lengths are same
    NumberToArray<Value1>['length'] extends NumberToArray<Value2>['length']
    ? // recursively compare the last digit
      GreaterThanValue<NumberToArray<Value1>, NumberToArray<Value2>>
    : // compare the length
      GreaterThanLength<NumberToArray<Value1>, NumberToArray<Value2>>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<GreaterThan<1, 0>, true>>,
  Expect<Equal<GreaterThan<5, 4>, true>>,
  Expect<Equal<GreaterThan<4, 5>, false>>,
  Expect<Equal<GreaterThan<0, 0>, false>>,
  Expect<Equal<GreaterThan<10, 9>, true>>,
  Expect<Equal<GreaterThan<20, 20>, false>>,
  Expect<Equal<GreaterThan<10, 100>, false>>,
  Expect<Equal<GreaterThan<111, 11>, true>>,
  Expect<Equal<GreaterThan<1234567891011, 1234567891010>, true>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4425/answer
  > View solutions: https://tsch.js.org/4425/solutions
  > More Challenges: https://tsch.js.org
*/
