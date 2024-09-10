"use client";
import style from "./navbar.module.scss";
import { useLocale } from "next-intl";
import { navbarLists } from "../../utils/navbarLists";
import { Sling as Hamburger } from 'hamburger-react'
import { useState } from "react";
import logoImage from "../../assets/images/logo.png";
import Image from "next/image";

type NavBarItem = {
    name: string;
    ref: React.RefObject<HTMLElement>;
    condition: boolean;
}

export default function NavBar() {
    const [isMenu, setIsMenu] = useState<boolean>(false);
    const locale = useLocale();
    const { NavBarEN, NavBarIT }: { NavBarEN: NavBarItem[], NavBarIT: NavBarItem[] } = navbarLists();

    const navbar = (locale === "it" ? NavBarIT : NavBarEN);

    return (
        <nav className={style.navbarContainer}>
            <Image src={logoImage} fill={false} alt="Logo image" priority={true} className={style.image} />

            <div className={style.mobileMenu} onClick={() => setIsMenu(!isMenu)}>
                <Hamburger />
            </div>

            <div className={style.desktopMenu}>
                {navbar.map((link, index) =>
                    <span key={index}
                        className={style.link}
                        onClick={(e) => {
                            e.preventDefault();
                            link.ref.current?.scrollIntoView({
                                behavior: "smooth",
                                block: "nearest",
                            })
                        }}
                    >
                        {link.name}
                    </span>)}
            </div>

            {isMenu && <div className={style.menuFloat}>
                {navbar.map((link, index) =>
                    <p key={index} className={style.dropdownMenu}
                        onClick={(e) => {
                            e.preventDefault();
                            link.ref.current?.scrollIntoView({
                                behavior: "smooth",
                                block: "nearest",
                            })
                        }}>
                        {link.name}
                    </p>)}</div>}

        </nav>
    )
}