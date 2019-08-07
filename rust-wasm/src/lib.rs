use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub fn hello_world() -> String {
  let mut string = String::new();
  string.push_str("Hello, rust-wasm!");
  return string;
}