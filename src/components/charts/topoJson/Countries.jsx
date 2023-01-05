import { json } from "d3";
import React, { useEffect, useState } from "react";
import { feature } from "topojson";
import { UseData } from "./UseData";

const width = 960;
const height = 500;

export const Countries = () => {
  const data = UseData();

  if (!data) return <pre>Loading...</pre>;

  return (
    <>
      <svg width={width} height={height}>
        {/* <Marks
          data={data}
         
        /> */}
      </svg>
    </>
  );
};
