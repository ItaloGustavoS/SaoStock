import React, { useEffect } from "react";

import "../css/notFound.css";

function NotFound() {
  useEffect(() => {
    const links = [];

    const font = document.createElement("link");
    font.href = "https://fonts.googleapis.com/css?family=Kanit:200";
    font.rel = "stylesheet";
    links.push(font);

    const fontAwesome = document.createElement("link");
    fontAwesome.href =
      "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/js/all.min.js";
    fontAwesome.rel = "stylesheet";
    fontAwesome.type = "text/css";
    links.push(fontAwesome);

    links.forEach((link) => document.head.append(link));
  }, []);

  return (
    <div id="notfound">
      <div className="notfound">
        <div className="notfound-404">
          <h1>404</h1>
        </div>
        <h2>Infeeeerno!</h2>
        <p>
          O prontuário que você está procurando sumiu, já tentou olhar na
          recepção?
        </p>
        <img
          src="https://media.giphy.com/media/h3ulu0JbrZftJ8bqR6/giphy.gif"
          alt="Renata Girando"
          width="285"
        />
        <br />
        <a href="/">Voltar para o Ínicio</a>
      </div>
    </div>
  );
}

export default NotFound;
