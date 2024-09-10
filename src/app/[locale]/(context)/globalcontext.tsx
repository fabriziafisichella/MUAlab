"use client";
import { createContext, useRef } from "react";
import { useInView } from "framer-motion";

const initialContext = {
  homeRef: { current: null },
  aboutRef: { current: null },
  coursesRef: { current: null },
  masterclassRef: { current: null },
  contactsRef: { current: null },
  isHomeInView: false,
  isAboutInView: false,
  isCoursesInView: false,
  isMasterclassInView: false,
  isContactsInView: false,
};

export const globalContext = createContext(initialContext);

const Context = ({ children }: { children: any }) => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const coursesRef = useRef(null);
  const masterclassRef = useRef(null);
  const contactsRef = useRef(null);

  const isHomeInView = useInView(homeRef);
  const isAboutInView = useInView(aboutRef);
  const isCoursesInView = useInView(coursesRef);
  const isMasterclassInView = useInView(masterclassRef);
  const isContactsInView = useInView(contactsRef);

  const value = {
    homeRef,
    aboutRef,
    coursesRef,
    masterclassRef,
    contactsRef,
    isHomeInView,
    isAboutInView,
    isCoursesInView,
    isMasterclassInView,
    isContactsInView,
  };

  return (
    <globalContext.Provider value={value}>{children}</globalContext.Provider>
  );
};

export default Context;
