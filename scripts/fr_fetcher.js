const axios = require("axios");
const fs = require("fs");
const { parse } = require("node-html-parser");

const wikiBase = "https://fr.m.wikipedia.org";

const main = async () => {
  const res = await axios.get(
    "https://fr.m.wikipedia.org/wiki/Wikip%C3%A9dia:Articles_vitaux"
  );
  const html = parse(res.data);
  const urls = [...html.querySelectorAll("li a")]
    .map((a) => a.attrs["href"].replace("https://fr.m.wikipedia.org", ""))
    .filter(
      (a) =>
        a.startsWith("/wiki/") &&
        !a.startsWith("/wiki/Sp%C3%A9cial") &&
        !a.startsWith("/wiki/Wikip%C3%A9dia:")
    );

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  shuffleArray(urls);
  fs.writeFileSync(
    "../french_article_urls.txt",
    urls.map((a) => decodeURI(a)).join("\n")
  );
};

main();
