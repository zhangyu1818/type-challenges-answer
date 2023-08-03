/*
  4182 - Fibonacci Sequence
  -------
  by windliang (@wind-liang) #medium

  ### Question

  Implement a generic `Fibonacci<T>` that takes a number `T` and returns its corresponding [Fibonacci number](https://en.wikipedia.org/wiki/Fibonacci_number).

  The sequence starts:
  1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

  For example
  ```ts
  type Result1 = Fibonacci<3> // 2
  type Result2 = Fibonacci<8> // 21
  ```

  > View on GitHub: https://tsch.js.org/4182
*/

/* _____________ Your Code Here _____________ */

// f(n)=f(n-2)+f(n-1)
// Value => n, ValueN2 => f(n-2), ValueN1 => f(n-1)
// Value => 3, ValueN2 => f(1) => 1, ValueN1 => f(2) => 1
// Value => 4, ValueN2 => f(2) => prev ValueN1, ValueN1 => f(3) => f(1) + f(2) => [prev ValueN2 + prev ValueN1]['length']
// Value => 5, ValueN2 => f(3) => prev ValueN1, ValueN1 => f(4) => f(2) + f(3) => [prev ValueN2 + prev ValueN1]['length']

type Fibonacci<
  T extends number,
  Value extends number[] = [1, 1, 1],
  ValueN2 extends number[] = [1],
  ValueN1 extends number[] = [1],
> = T extends 1 | 2
  ? 1
  : T extends Value['length']
  ? [...ValueN1, ...ValueN2]['length']
  : Fibonacci<T, [...Value, 1], ValueN1, [...ValueN2, ...ValueN1]>

/* _____________ Test Cases _____________ */
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Fibonacci<1>, 1>>,
  Expect<Equal<Fibonacci<2>, 1>>,
  Expect<Equal<Fibonacci<3>, 2>>,
  Expect<Equal<Fibonacci<8>, 21>>,
]

/* _____________ Further Steps _____________ */
/*
  > Share your solutions: https://tsch.js.org/4182/answer
  > View solutions: https://tsch.js.org/4182/solutions
  > More Challenges: https://tsch.js.org
*/
