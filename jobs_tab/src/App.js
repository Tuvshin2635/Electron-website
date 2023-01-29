import "./App.css";
import { useState } from "react";
import ButtonShow from "./component/buttonShow";
import Header from "./component/header";
import DATA from "./data/data";

function App() {
  const [show, setShow] = useState(true);
  // const [show1, setShow1] = useState(false);
  // const [show2, setShow2] = useState(false);

  return (
    <div className="App">
      {show ? <ButtonShow setShow={setShow} /> : <div> hi </div>}
      {/* {PRODUCTS.map((product) => (
        <Product data={product} />
      ))} */}
      {/* {!show ? (
        <ButtonShow setShow={setShow} />
      ) : (
        <div>
          <Header />
          exnii paragrat
        </div>
      )}
      {!show ? (
        <ButtonShow setShow={setShow} />
      ) : (
        <div>
          <Header />
          exnii paragrat
        </div>
      )} */}
    </div>
  );
}

export default App;
