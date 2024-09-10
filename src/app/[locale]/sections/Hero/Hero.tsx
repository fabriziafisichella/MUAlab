"use client";
import style from "./hero.module.scss";
import { globalContext } from "../../(context)/globalcontext";
import { useContext } from "react";
import { useTranslations } from "next-intl";

export default function Hero() {
  const t = useTranslations("Hero");
  const { homeRef } = useContext(globalContext);
  return (
    <section
      role={"contentHero"}
      aria-label={"MUA LAB Academy"}
      ref={homeRef}
      className={style.container}>
      
      <div className={style.textBox}>

        <h1 className={style.title}>
          Mua Lab Academy
        </h1>

        <div className={style.description}>
          {t("academy")}
        </div>

      </div>
      
    </section>
  );
}