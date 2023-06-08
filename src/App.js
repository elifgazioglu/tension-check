import React from "react";
import "./styles.css";
import pic1 from "./img/tension.jpg";

const App = () => {
  return (
    <div className="main">
      <img alt="" src={pic1}></img>
      <h1>Tansiyon Hesaplama</h1>
      <form>
        <div className="inputs">
          <input
            className="input"
            required
            type="text"
            placeholder="büyük tansiyonunuzu giriniz"
          ></input>
          <input
            className="input"
            required
            type="text"
            placeholder="küçük tansiyonunuzu giriniz"
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
