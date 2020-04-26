import React, { Component } from "react";
import "./App.css";
import bitcoin from "../img/bitcoin.jpg";
import ethereum from "../img/ethereum.jpg";
import cash from "../img/cash.jpg";
import tether from "../img/tether.jpg";
import ripple from "../img/ripple.jpg";
import Litecoin from "../img/Litecoin.jpg";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      list: [],
      error: null
    };
  }

  buildList = data => {
    console.log(data);
    this.setState({ list: data });
  };

  componentDidMount() {
    let url =
      "https://my.api.mockaroo.com/cryptocurrency-data.json?key=8eb9e6f0";
    fetch(url)
      .then(response => response.json())
      .then(this.buildList)
      .catch(error => {
        this.setState({ error });
      });
  }

  render() {
    console.log("render");
    return (
      <div>
        <h1>Top 5 Kryptovaluta</h1>
        <ul className="container">
          {this.state.list.slice(0, 6).map(item => (
            <li key={item.id} id={item.symbol} id={item.rank}>
              {item.Name + " " + item.Symbol + " " + item.rank}
            </li>
          ))}
        </ul>
        <div className="container-2">
          <div className="top">
            <p>Läs mer om de 5 Valutor</p>
          </div>
        </div>

        <div className="crpto-container">
          <ul className="crypt-list">
            <li className="crypto-list-item">
              <img class="crypto-list-img" src={bitcoin} alt="bitcoin"></img>
              <h3 className="crypto-list-title">Bitcoin</h3>
              <span className="crypto-list-symbol">Btc</span>
              <p>
                Bitcoin är en implementation av kryptovaluta. Det är en digital
                valuta, skapad 2009 av Satoshi Nakamoto, vars huvudsyfte är att
                möjliggöra betalningar över Internet direkt mellan användare
                utan någon inblandning från tredje par
              </p>
            </li>
            <li className="crypto-list-item">
              <img class="crypto-list-img" src={ethereum} alt="Entherum"></img>
              <h3 className="crypto-list-title">Entherum</h3>
              <span className="crypto-list-symbol">ETH</span>
              <p>
                Ethereum är en plattform för kryptovaluta och smarta kontrakt,
                som bygger på blockkedjeteknik och <br />
                som är skapad av den rysk-kanadensiske programmeraren Vitalik
                Buterin.
              </p>
            </li>
            <li className="crypto-list-item">
              <img class="crypto-list-img" src={ripple} alt="Ripple"></img>
              <h3 className="crypto-list-title">Ripple</h3>
              <span className="crypto-list-symbol">XPR</span>
              <p>
                Kryptovalutan Ripple är ett öppet betalsystem i beta. Dess mål
                är att göra det möjligt för människor att slå sig fria från
                finansiella institutioner som banker, kreditkortsföretag och
                andra nätverk som skapar och underhåller avgifter. <br /> <br />{" "}
                Ripple den tredje största kryptovalutan, precis bakom och .
                Ripples nätverk har nu i sitt konto flera miljarder dollar i
                kryptovaluta värde.
              </p>
            </li>
            <li className="crypto-list-item">
              <img class="crypto-list-img" src={tether} alt="Tether"></img>
              <h3 className="crypto-list-title">Tether</h3>
              <span className="crypto-list-symbol">USDT</span>
              <p>
                Tether (USDT) är en token baserad på Omni-blockkedjan utfärdad
                av Tether Limited Company som kan lösas in via
                Tether-plattformen.
                <br />
                <br />
                USDT-token skapades för att underlätta överföringen av
                nationella valutor, för att ge användarna ett stabilt alternativ
                till Bitcoin och som ett alternativ till opålitliga utbyten och
                plånboksrevisioner.
              </p>
            </li>
            <li className="crypto-list-item">
              <img class="crypto-list-img" src={cash} alt="Bitcoin Cash"></img>
              <h3 className="crypto-list-title">Bitcoin Cash</h3>
              <span className="crypto-list-symbol">Btc</span>
              <p>
                Bitcoin cash är både en digital valuta och ett
                betalningsnätverk.
                <br />
                <br />
                Bitcoin cash blev till som ett resultat av en ”hard fork” i
                Bitcoin December 2017 <br />
                med syfte att öka antalet transaktioner som kunde bearbetas
                samtidigt.
              </p>
            </li>
            <li className="crypto-list-item">
              <img class="crypto-list-img" src={Litecoin} alt="Litecoin"></img>
              <h3 className="crypto-list-title">Litecoin</h3>
              <span className="crypto-list-symbol">LTC</span>
              <p>
                Litecoin är en av de första alternativa kryptovalutorna och
                beskrivs ofta som en ny och uppdaterad variant av Bitcoin. Efter
                att intresset för
                <br />
                <br />
                Bitcoin spred sig så lockade det fler och fler utvecklare med
                nya idéer och sätt för att förbättra valutan, när dessa skrev om
                och gjorde ändringar i mjukvaran och resultatet blev denna nya
                valuta. Deras egna utvecklare har länge sagt att deras avsikt är
                att skapa ”silvret” till ”Bitcoin-guldet”.
              </p>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
