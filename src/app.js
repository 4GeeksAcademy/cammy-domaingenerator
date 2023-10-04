/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  document.querySelector.innerHTML = generateDomainName();
};

let generateDomainName = () => {
  let pronoun = ["the", "my", "your", "our"];
  let adj = ["beautiful", "funny", "small", "loud", "cute"];
  let noun = ["bunny", "meme", "baker", "worker", "diver"];
  let domain = [".com", ".org", ".net", ".io", ".us"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let domainIndex = Math.floor(Math.random() * domain.length);

  console.log(
    pronoun[pronounIndex] +
      adj[adjIndex] +
      noun[nounIndex] +
      domain[domainIndex]
  );
};
