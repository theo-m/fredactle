const axios = require("axios");
const fs = require("fs");
const { parse } = require("node-html-parser");

const wikiBase = "https://fr.m.wikipedia.org";

const main = async () => {
  const res = await axios.get(
    "https://fr.m.wikipedia.org/wiki/Wikip%C3%A9dia:Articles_vitaux/Niveau_4"
  );
  const html = parse(res.data);
  const tables = html.querySelectorAll(".wikitable");
  const catsUrls = [...tables[1].querySelectorAll("td[align=left] a")]
    .map((a) => a.attrs["href"])
    .filter((a) => !a.endsWith("Personnalit%C3%A9s"));

  const articles = (
    await Promise.all(
      catsUrls.map((url) => {
        return axios.get(`${wikiBase}${url}`).then((res) => {
          console.log("proc", url);
          const cat = parse(res.data);
          const found = [...cat.querySelectorAll("li > a[title]")];
          return found.map((f) => f.attrs["href"]);
        });
      })
    )
  )
    .flat()
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

  shuffleArray(articles);
  fs.writeFileSync(
    "../french_article_urls.txt",
    articles.map((a) => decodeURI(a)).join("\n")
  );
};

main();
