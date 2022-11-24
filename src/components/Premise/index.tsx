import React from "react";
import { IPremise } from "../../types";
import { Point, Phone } from "../icons";

const Image = ({ url }: { url: string }) => {
  return (
    <div
      style={{
        height: "200px",
        width: "280px",
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
      }}
    ></div>
  );
};

export const Premise = ({ photo, address, fullAddress, phone }: IPremise) => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">{address}</h1>
      <Image url={photo} />
      <span>
        <Point />
        {fullAddress}
      </span>
      <span>
        <Phone />
        {phone}
      </span>
    </div>
  );
};
