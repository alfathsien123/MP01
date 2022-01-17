import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

function App() {
  const dispatch = useDispatch();

  const { count, numb } = useSelector((state) => {
    return { count: state.counter1.count, numb: state.counter2.numb };
  });

  const tambah = () => {
    dispatch({ type: "tambah", payLoad: 5 });
  };
  const kurang = () => {
    dispatch({ type: "kurang", payLoad: 5 });
  };
  const kali = () => {
    dispatch({ type: "kali", payLoad: 5 });
  };
  const bagi = () => {
    dispatch({ type: "bagi", payLoad: 5 });
  };

  return (
    <div>
      <div>
        <Button variant="primary" onClick={tambah}>
          +
        </Button>
        Count: {count}
        <Button variant="primary" onClick={kurang}>
          -
        </Button>
      </div>
      <p />
      <div>
        <Button variant="primary" onClick={kali}>
          *
        </Button>
        Numb: {numb}
        <Button variant="primary" onClick={bagi}>
          /
        </Button>
      </div>
    </div>
  );
}

export default App;
