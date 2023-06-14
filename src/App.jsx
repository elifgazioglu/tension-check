import React from "react";
import "./styles.css";
import pic1 from "./img/tension.jpg";
import pic2 from "./img/tension2.jpg";
import pic3 from "./img/tension4.jpg";
import pic4 from "./img/tension3.jpg";
import pic5 from "./img/tension5.jpg";
import error from "./img/error.jpg";
import { useState } from "react";

const App = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState("");

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

    if ((value1 >= 90 && value1 <= 120) || (value2 >= 60 && value2 <= 80)) {
      setMessage("normal");
    } else if (
      (value1 >= 121 && value1 <= 139) ||
      (value2 >= 80 && value2 <= 90)
    ) {
      setMessage("yüksek normal");
    } else if (
      (value1 >= 70 && value1 <= 89) ||
      (value2 >= 40 && value2 <= 59)
    ) {
      setMessage("düşük");
    } else if (value1 >= 140 || value2 >= 90) {
      setMessage("hipertansiyon");
    } else {
      setMessage("default");
    }

    setInput1("");
    setInput2("");

    setSubmitted(true);
  };

  return (
    <div>
      {submitted ? (
        <div className="results">
          {message === "normal" && (
            <div className="result">
              <img src={pic2} alt="" className="pic"></img>
              <h2>Tansiyonunuz normal🥳</h2>
              <p className="warning">
                Tansiyon değerleriniz 120/80 olarak ölçüldü. Bu değerler, genel
                olarak kabul edilen normal tansiyon aralığındadır ve sağlıklı
                bir durumu yansıtmaktadır. Sağlıklı bir yaşam tarzı
                tansiyonunuzu bu şekilde korumanıza yardımcı olabilir ve kalp
                krizi veya felç geçirme riskinizi azaltabilir. Diğer sağlık
                sorunlarına da yardımcı olabilir. Eğer yapabilirseniz;
                <ul>
                  <li>Sağlıklı bir kiloda kalmaya çalışın.</li>
                  <li>
                    Fiziksel olarak aktif olun: Düzenli olarak egzersiz yapmak,
                    tansiyonu kontrol altında tutmaya yardımcı olabilir. Fiziksel aktiviteyi günlük rutininizin bir
                    parçası haline getirmek önemlidir.
                  </li>
                  <li>
                    Sağlıklı beslenme alışkanlıkları geliştirin: Düzenli olarak
                    dengeli bir beslenme planı uygulayın. Yeterli miktarda
                    meyve, sebze, tam tahıllar, düşük yağlı protein kaynakları
                    ve sağlıklı yağlar tüketmeye özen gösterin.
                  </li>
                  <li>
                    Tuz alımınızı sınırlayın ve işlenmiş gıdaların tuz içeriğini
                    kontrol edin.
                  </li>
                  <li>Daha az alkol ve kafein içmeye çalışın.</li>
                  <li>Sigarayı bırakın.</li>
                </ul>
              </p>
            </div>
          )}
          {message === "düşük" && (
            <div className="result">
              <img src={pic3} alt="" className="pic"></img>
              <h2>Tansiyonunuz düşük 😕</h2>
              <p>
                Tansiyon değerleriniz 90/60 olarak ölçüldü. Bu değerler düşük
                tansiyon olarak kabul edilir. Düşük tansiyon genellikle belirgin
                semptomlara yol açabilir, ancak bazı insanlar için normal
                olabilir. Eğer şağıdaki belirtilerden herhangi birine neden
                oluyorsa bir doktora görünmeniz tavsiye edilir:
                <ul>
                  <li>Göğüs ağrısı</li>
                  <li>Terlemek</li>
                  <li>Nefes darlığı</li>
                  <li>Istikrarsızlık</li>
                  <li>Baş dönmesi veya baş dönmesi hissi</li>
                  <li>Bayılma</li>
                </ul>
                Düşük tansiyonu iyileştirmek için bazı önlemler de
                alabilirsiniz. İşte bu önlemlerden birkaçı:
                <ul>
                  <li>Sıvı alımını artırın</li>
                  <li>
                    Kahve veya çay tüketin. Kafein, geçici olarak kan basıncını
                    yükseltebilir
                  </li>
                  <li>
                    Tuz tüketimini artırın: Tuz, vücutta sıvı tutulumunu artırır
                    ve kan basıncını yükseltebilir.
                  </li>
                </ul>
              </p>
            </div>
          )}
          {message === "yüksek normal" && (
            <div className="result">
              <img src={pic5} alt="" className="pic"></img>
              <h2>Tansiyonunuz biraz yüksek 😳</h2>
              <p>
                Tansiyon değerleriniz olarak ölçüldü. Bu değerler yüksek normal
                tansiyon olarak kabul edilir. Yüksek normal tansiyon, normalden
                yüksek, ancak hipertansiyon (yüksek tansiyon) olarak
                sınıflandırılmayan bir aralıktır. Sağlıklı bir yaşam tarzı ve
                düzenli takip ile tansiyonunuzu kontrol altında tutabilirsiniz.
                Eğer yapabilirsen:
                <ul>
                  <li>Sağlıklı bir kiloda kalmaya çalışın</li>
                  <li>Düzenli egzersiz</li>
                  <li>Sigarayı bırakın</li>
                  <li>Daha az alkol ve kafein tüketin</li>
                  <li>Bol bol taze meyve ve sebze yiyin</li>
                </ul>
                Kan basıncınızı düzenli olarak kontrol edin ve bir fark görmeye
                başlamalısınız. Bununla birlikte tansiyona iyi gelen yiyecek ve
                içeceklerden faydalanarak da doğal ve bitkisel yollardan
                tansiyon değerlerini dengelemek mümkündür.
                <ul>
                  <li>
                    Muz: İçeriğinde barındırdığı yüksek oranda potasyum
                    sayesinde kan basıncını düzene sokar.
                  </li>
                  <li>
                    Pancar: İçeriğinde yer alan nitrat sayesinde tansiyonu
                    dengeler.
                  </li>
                  <li>
                    Nar: Polifenol, C vitamini ve antioksidan açısından
                    zengindir. Bu sayede kan basıncını dengeler.
                  </li>
                  <li>
                    Sarımsak: Sarımsak, doğal tansiyon düşürücü olarak
                    tanımlanan bir doğal kaynaktır.
                  </li>
                  <li>
                    Limon: Limon da yüksek tansiyon problemine karşı sarımsak
                    kadar etkili bir doğal kaynaktır.
                  </li>
                </ul>
              </p>
            </div>
          )}
          {message === "hipertansiyon" && (
            <div className="result">
              <img src={pic4} alt="" className="pic"></img>
              <h2>Tansiyonunuz çok yüksek❗️</h2>
              <p>
                Tansiyon değerleriniz 160/100 olarak ölçüldü. Bu değerler
                hipertansiyon (yüksek tansiyon) olarak kabul edilir. Yüksek
                tansiyon, kalp ve damar hastalıklarına yol açabilen ciddi bir
                sağlık sorunudur. Doktorunuzla iletişime geçmeniz, uygun tedavi
                ve yaşam tarzı değişiklikleri konusunda destek almanız
                önemlidir.Yüksek tansiyonu düşürmek adına evde bazı yöntemler
                uygulayabilir, bazı besinler tüketilebilirsiniz:
                <ul>
                  <li>
                    Başınızı soğuk su ile yıkamanız yüksek tansiyonunuzu
                    düşürmek için doğru bir adım olacaktır. Çünkü soğuk su
                    sinirlerinizi uyardığı için tansiyonunuzun düşmesine ön ayak
                    olacaktır.
                  </li>
                  <li>Yoğurt veya ayran tüketebilirsiniz.</li>
                  <li>
                    Limon tüketimi doğru bir tercih olacaktır. Çünkü limon suyu
                    damarların tıkanmasına neden olan bazı maddeleri
                    vücudumuzdan temizleme görevini üstleniyor.
                  </li>
                  <li>
                    Sarımsaklı ürünler tercih edebilirsiniz. Sarımsak
                    tansiyonunuzun düşmesini hızlı bir şekilde sağlayacaktır.
                  </li>
                  <li>
                    Kuşburnu çayı ile tansiyonunuzu düzene sokma yoluna
                    gidebilirsiniz.
                  </li>
                </ul>
              </p>
            </div>
          )}
          {message === "default" && (
            <div className="error">
              <img src={error} alt="" className="pic"></img>
              <p>Lütfen değerlerinizin doğruluğunu kontrol edin...</p>
            </div>
          )}
        </div>
      ) : (
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
      )}
    </div>
  );
};

export default App;
