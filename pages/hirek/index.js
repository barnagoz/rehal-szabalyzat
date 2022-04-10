import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Logo from '../../public/logo.jpg'
import Link from 'next/link'

function Index(props) {
  return (
    <>
        <Head>
          <title>ReHal - újrahasznosítva</title>
        </Head>
        <div className="w-full flex flex-col justify-start items-center">
            <Image width={187.5} height={51} src={Logo} alt="The ReHal logo"></Image>
            <h1 className="text-3xl font-bold">Hírek</h1>
            <p>
                Az oldalunk jelenleg fejlesztés alatt áll. Hamarosan elérhetővé válik az oldalunk!
            </p>
            <Link href="/" passHref><h1 className="underline decoration-wavy cursor-pointer">Vissza</h1></Link>
        </div>
      </>
  )
}

export default Index
