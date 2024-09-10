"use client";
import style from "./about.module.scss";
import { globalContext } from "../../(context)/globalcontext";
import { useContext } from "react";
import { useTranslations } from "next-intl";
import { teachersEN, teachersIT } from "../../utils/teacherList";
import { useLocale } from "next-intl";

export default function About() {
  const t = useTranslations("About");
  const { aboutRef } = useContext(globalContext);
  const locale = useLocale();
  const teachers = (locale === "it" ? teachersIT : teachersEN);

  return (
    <section
      role={"contentAbout"}
      aria-label={"La scuola e le docenti"}
      ref={aboutRef} className={style.container}>

      <div className={style.section}>

        <div className={style.littleSection}>
          <h2>{t("school")}</h2>
          <p>{t("description")}</p>
        </div>

        <div className={style.littleSection}>
          <h2> {t("teachers")} </h2>

          <div className={style.carousel}>
            {teachers.map((teacher, index) =>
              <div className={style.carouselCard} key={index}>
                <h3> {teacher.name} </h3>
              </div>
            )}
          </div>

        </div>

      </div>

      <div className={`${style.section} ${style.image}`} />

    </section>
  );
}