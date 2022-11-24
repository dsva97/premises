import fs from "fs";
import React from "react";
import { IPremise } from "./types";
import { Premise } from "./components";

const primesesData: IPremise[] = [
  {
    address: "Prado 15, Madrid",
    fullAddress: "Prado, 15. 28014 Madrid",
    phone: "+ (34) 910 60 94 76",
    photo:
      "https://www.goiko.com/wp-content/uploads/2017/02/GG_PD-SALA-e1516134735124-300x300.jpg",
    dates: [],
    icons: [],
  },
];

export const App = () => {
  return (
    <html>
      <head>
        <link rel="stylesheet" href="./styles.css" />
      </head>
      <body>
        <div>
          {primesesData.map((data, index) => (
            <Premise {...data} key={index} />
          ))}
        </div>
      </body>
    </html>
  );
};
