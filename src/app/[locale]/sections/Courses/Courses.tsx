"use client";
import style from "./courses.module.scss";
import { globalContext } from "../../(context)/globalcontext";
import { useContext } from "react";

export default function Courses() {
  const { coursesRef } = useContext(globalContext);

    return (
      <div ref={coursesRef} className={style.container}>
        Questa è la sezione Corsi.
      </div>
    );
  }