import React from "react";

interface booksProps {
  isbn: number;
  title: string;
  price: number;
  summary: string;
}

export default function ForSort({ src }) {
  src.sort((m, n) => m.price - n.price);
  return (
    <dl>
      {src.map((elem: booksProps) => (
        <React.Fragment key={elem.isbn}>
          <dt>
            <a
              href={`https://wings.msn.to/books/$(elem.isbn)/$(elem.isbn).jpg`}
            >
              {elem.title} ({elem.price}円)
            </a>
          </dt>
          <dd>{elem.summary}</dd>
        </React.Fragment>
      ))}
    </dl>
  );
}
