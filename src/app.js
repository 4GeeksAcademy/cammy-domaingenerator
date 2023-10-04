/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  let pronouns = ["the", "my", "your", "our"];
  let adjs = ["beautiful", "funny", "small", "loud", "cute"];
  let nouns = ["bunny", "meme", "baker", "worker", "diver"];
  let domains = [".com", ".org", ".net", ".io", ".us"];

  let domainNames = [];

  for (let pronoun of pronouns) {
    for (let adj of adjs) {
      for (let noun of nouns) {
        for (let domain of domains) {
          console.log(`${pronoun}${adj}${noun}${domain}`);
        }
      }
    }
  }
};
