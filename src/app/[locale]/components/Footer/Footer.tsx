import Language from "../Language/Language";
import style from "./footer.module.scss";

export default function Footer() {
    return (
        <footer className={style.footerContainer}>
            <div>Copyright © MUA Lab</div>
            <div><Language /></div>
        </footer>
    )
}