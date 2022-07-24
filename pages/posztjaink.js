import Script from 'next/script'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../public/logo.jpg'
import React from 'react'

export default function Posztjaink() {
  return (
    <>
    <Head>
          <title>ReHal - újrahasznosítva</title>
        </Head>
        <div className="w-full flex flex-col justify-start items-center">
            
            <h1 className="text-3xl font-bold">Posztjaink</h1>
        </div>
<div id="curator-feed-feed-layout"><a href="https://curator.io" target="_blank" class="crt-logo crt-tag">Powered by Curator.io</a></div><Script id="posztok" strategy="lazyOnload">
{`
(function(){
var i,e,d=document,s="script";i=d.createElement("script");i.async=1;i.charset="UTF-8";
i.src="https://cdn.curator.io/published/79f16b94-20ea-4f21-ae0d-d13193d5d24c.js";
e=d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
})();`}
</Script>
<div className="w-full flex flex-col justify-start items-center">
<Link href="/" passHref><h1 className="underline decoration-dashed hover:decoration-dotted cursor-pointer">Vissza</h1></Link>
</div>
</>
  )
}
