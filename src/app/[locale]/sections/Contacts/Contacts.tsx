"use client";
import style from "./contacts.module.scss";
import { globalContext } from "../../(context)/globalcontext";
import { useContext } from "react";

export default function Contacts() {
  const { contactsRef } = useContext(globalContext);
    return (
      <div ref={contactsRef} className={style.container}>
        Questa è la sezione Contatti.
      </div>
    );
  }