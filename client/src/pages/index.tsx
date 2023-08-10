import Head from "next/head";
import { Inter } from "next/font/google";
import { Container, Main } from "@/styles/globals";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Managemoney</title>
        <meta name="description" content="Managing my money" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Main className={`${inter.className}`}>
        <Container>Hello mundo!</Container>
      </Main>
    </>
  );
}
