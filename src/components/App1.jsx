import Product from "./Product";
import Variant from "./Variant";
import Calc from "./Calc";
export default function App1() {
  let a = 10;
  let b = 20;
  return (
    <>
      <h1>This is App1 Component</h1>
      <Product name="Laptop" price={50000} />
      <Variant />
      <Calc v1={a} v2={b} />
    </>
  );
}