"use client";
import { globalContext } from "../(context)/globalcontext";
import { useContext } from "react";

export function navbarLists() {
    const {
        homeRef,
        aboutRef,
        coursesRef,
        masterclassRef,
        contactsRef,
        isHomeInView,
        isAboutInView,
        isCoursesInView,
        isContactsInView,
        isMasterclassInView,
    } = useContext(globalContext);


    const NavBarIT = [
        {
            name: "Home",
            ref: homeRef,
            condition: isHomeInView
        },
        {
            name: "Chi siamo",
            ref: aboutRef,
            condition: isAboutInView
        },
        {
            name: "Corsi",
            ref: coursesRef,
            condition: isCoursesInView
        },
        {
            name: "Masterclass",
            ref: masterclassRef,
            condition: isMasterclassInView
        },
        {
            name: "Contatti",
            ref: contactsRef,
            condition: isContactsInView
        }
    ]

    const NavBarEN = [
        {
            name: "Home",
            ref: homeRef,
            condition: isHomeInView
        },
        {
            name: "About Us",
            ref: aboutRef,
            condition: isAboutInView
        },
        {
            name: "Courses",
            ref: coursesRef,
            condition: isCoursesInView
        },
        {
            name: "Masterclasses",
            ref: masterclassRef,
            condition: isMasterclassInView
        },
        {
            name: "Contacts",
            ref: contactsRef,
            condition: isContactsInView
        }
    ]

    return { NavBarIT, NavBarEN };
}
