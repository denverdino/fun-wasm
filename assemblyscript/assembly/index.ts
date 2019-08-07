// The entry file of your WebAssembly module.

export function add(a: i32, b: i32): i32 {
  return a + b;
}

export function fib(n: i32): i32 {
  let t: i32;
  let a: i32 = 0;
  let b: i32 = 1;
  for (let i: i32 = 0; i < n; i++) {
    t = a + b;
    a = b;
    b = t;
  }
  return b;
}