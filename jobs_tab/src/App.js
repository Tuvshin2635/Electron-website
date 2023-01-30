import "./App.css";
import { useState } from "react";
import ButtonShow from "./component/buttonShow";
import Header from "./component/header";
import DATA from "./data/data";

function App() {
  const [show, setShow] = useState(false);
  // const [show1, setShow1] = useState(false);
  // const [show2, setShow2] = useState(false);
  const titleMajor = DATA.map((data) => {
    return (
      <div>
        {/* <p> {data.order} </p>
        <p> {data.title} </p> */}
        <p> {data.company} </p>
      </div>
    );
  });

  return (
    <div className="App">
      {!show ? (
        <div>
          <ButtonShow setShow={setShow} />
        </div>
      ) : (
        <div> {titleMajor} </div>
      )}

      {/* {!show ? (
        <div>
          <ButtonShow setShow={setShow} />
        </div>
      ) : (
        <div> {titleMajor} </div>
      )} */}
    </div>
  );
}

export default App;
