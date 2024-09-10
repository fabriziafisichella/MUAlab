import "./globals.css";
import { Metadata } from "next";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";


export const metadata: Metadata = {
  title: "• MUA LAB •",
  description: "MUA LAB - Academy",
};


export default async function LocaleLayout({
  children,
  params: {locale}
}: {
  children: React.ReactNode;
  params: {locale: string};
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
 
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
        <NavBar />
        <main>{children}</main>
        <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}