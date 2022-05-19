import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Logo from '../../public/logo.jpg'
import Link from 'next/link'

export default function GYIKmegjelenik() {
  return (
<>
    <Head>
          <title>ReHal - újrahasznosítva</title>
    </Head>
        <div className="w-full flex flex-col justify-start items-center">
            <Image src={Logo} width={187.5} height={51} alt="The ReHal logo"/>
            <h1 className="text-3xl font-bold">GYIK oldal</h1>
            <br/>
            <p>2022.05.19 6:00</p>
            <br/>
            <p>
                Sikeresen feltöltöttük a Gyakran Ismételt Kérdések oldalt, így sokkal egyszerűbb lesz számunkra a bemutatkozás és nektek pedig a projekt megismerése. Megpróbáltunk minden lehetséges kérdést megválaszolni, ami többször előjött első árusításunk során, viszont elképzelhető, hogy más kérdéseket kapunk közösségi felületeinken. Az oldal tovább fog frissülni természetesen.
            </p>
            <p className="font-bold">
                Lesd meg a GYIK oldulunkat itt: <Link href="/gyik" passHref><span className='underline decoration-wavy cursor-pointer'>Gyakran ismételt kérdések</span></Link>
            </p>
            <Link href="/hirek" passHref><h1 className="underline decoration-wavy cursor-pointer">Vissza</h1></Link>
        </div>
    </>
  )
}
