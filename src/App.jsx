import React from "react";
import "./styles.css";
import pic1 from "./img/tension.jpg";
import { useState } from "react";

const App = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === "input1") {
      setInput1(value);
    } else if (name === "input2") {
      setInput2(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const value1 = parseInt(input1);
    const value2 = parseInt(input2);

    if(value1 >= 120 && value1 <=140 && value2 >= 60 && value2 <= 90) {
      console.log("tansiyonunuz normal");
    }
    else if(value1 <= 90 && value2 <= 60){
      console.log("tansiyonunuz dusuk");
    }
    else {
      console.log("tansiyonunuz yuksek");
    }

    setInput1('');
    setInput2('');
  };

  return (
    <div className="main">
      <img alt="" src={pic1}></img>
      <h1>Tansiyon Hesaplama</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputs">
          <input
            className="input"
            required
            type="text"
            name="input1"
            value={input1}
            placeholder="büyük tansiyonunuzu giriniz"
            onChange={handleInputChange}
          ></input>
          <input
            className="input"
            required
            type="text"
            name="input2"
            value={input2}
            placeholder="küçük tansiyonunuzu giriniz"
            onChange={handleInputChange}
          ></input>
        </div>
        <div className="buttons">
          <button className="button" type="submit">
            Hesapla
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
