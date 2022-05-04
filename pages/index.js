import Head from 'next/head'
import HeaderBlock from "../components/blocks/header"
import ContentBlock from "../components/blocks/content"
import {useEffect, useState} from "react";
export default function Home() {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 100)
    })
  }, [])
  return (
    <>
      <Head>
        <title>Elfto - React Business Template with Next Js</title>
        <meta name="viewport" content="width=device-width,initial-scale=1,viewport-fit=cover" />
        <meta name="description" content="Elfto - React Business Template with Next Js" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div id="page">
        <HeaderBlock scroll={scroll}/>
        <ContentBlock scroll={scroll}/>
      </div>
    </>
  )
}
