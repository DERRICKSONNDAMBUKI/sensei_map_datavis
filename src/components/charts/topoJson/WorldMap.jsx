import { json } from "d3";
import React, { useEffect, useState } from "react";
import { feature } from "topojson";
import { Marks } from "./Marks";
import { UseData } from "./UseData";
import './worldMap.css'

const width = 960;
const height = 500;

export const WorldMap = () => {
  const data = UseData();

  if (!data) return <pre>Loading...</pre>;

  return (
    <>
      <h1>Contries with topojson</h1>;
      <svg width={width} height={height}>
        <Marks data={data} />
      </svg>
    </>
  );
};
