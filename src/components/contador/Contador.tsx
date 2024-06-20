"use client";

import React from "react";
import CountUp from "react-countup";
import "./contador.scss";

interface CounterProps {
  number: number;
  title: string;
}

const Contador: React.FC<CounterProps> = ({ number, title }) => {
  return (
    <div className="numero">
        <div className="contenedorContador">
            <p>+</p>
            <CountUp duration={10} className="contador" end={number} />
        </div>
        <span className="tituloContador">{title}</span>
    </div>
  );
};

export default Contador;
