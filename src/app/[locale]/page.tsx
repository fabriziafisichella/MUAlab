import styles from "./page.module.scss";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Courses from "./sections/Courses/Courses";
import Masterclass from "./sections/Masterclass/Masterclass";
import Contacts from "./sections/Contacts/Contacts";

export default function Home() {
  return (
    <div className={styles.mainContainer}>
      <Hero />
      <About />
      <Courses />
      <Masterclass />
      <Contacts />
    </div>
  );
}