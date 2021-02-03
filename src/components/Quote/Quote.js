import React, { useState, useEffect } from "react";
import "./Quote.css";

function Quote() {
  const [quote, setQuote] = useState("");
  const [id, setId] = useState(0);
  const [quoteDataLength, setQuoteDataLength] = useState(0);

  useEffect(() => {
    if (id === "" || id === null) {
      return;
    }
    //fetch("https://type.fit/api/quotes")
    fetch("data.json")
      .then((response) => response.json())
      .then((data) => {
        setQuoteDataLength(data.length);
        setQuote(data[id]);
      });
  }, [id]);

  return (
    <div className="quote">
      <h1 className="quote__heading"> Quote of the Day</h1>
      <p className="quote__text">{quote.text}</p>
      <p className="quote__author">{quote.author}</p>
      <button
        onClick={(e) => setId(Math.floor(Math.random() * quoteDataLength))}
      >
        Get New Quote
      </button>
    </div>
  );
}

export default Quote;
