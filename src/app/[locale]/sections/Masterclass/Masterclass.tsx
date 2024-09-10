"use client";
import style from "./masterclass.module.scss";
import { globalContext } from "../../(context)/globalcontext";
import { useContext } from "react";


export default function Masterclass() {
  
  const { masterclassRef } = useContext(globalContext);

    return (
      <div ref={masterclassRef}  className={style.container}>
        Questa è la sezione Masterclass.
      </div>
    );
  }