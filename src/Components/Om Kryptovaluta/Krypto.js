import React from "react";
import { Link } from "react-router-dom";
import "./button.css";
import "./Other.css";

export const Krypto = () => (
  <div className="Main-body">
    <h2>Vad är kryptovaluta?</h2>
    <p>
      Kryptovalutor har blivit ett globalt fenomen som de flesta känner till.
      <br />
      Och även om temat ännu uppfattas något ’nördigt’ och de flesta inte
      förstår <br />
      vad det handlar om, så har banker, myndigheter och många stora
      <br /> företag insett hur viktigt kryptovalutor har blivit. Det har
      faktiskt blivit så viktigt <br />
      att år 2017 skulle du ha behövt leta länge för att hitta en större bank,
      en stor
      <br /> revisionsbyrå, ett större mjukvaruföretag eller land som inte
      tillbringat tid <br />
      och ansträngning att sätta sig in i kryptovalutor eller börjat med så
      kallade ’blockkedje’-projekt.
    </p>
    <div className="mer-Krypto">
      <Link className="Klink" to="/Guide">
        Mer om guiden!
      </Link>
    </div>
  </div>
);

export default Krypto;
