import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../public/logo.jpg'
import Screenshot from '../../public/szabalybekuldes.png'

function UjSzabalyBekuldoRendszer() {
  return (
    <>
    <Head>
          <title>ReHal - újrahasznosítva</title>
    </Head>
        <div className="w-full flex flex-col justify-start items-center">
            <Image src={Logo} width={187.5} height={51} alt="The ReHal logo"/>
            <h1 className="text-3xl font-bold">Új szabálybeküldő rendszer</h1>
            <br/>
            <p>2022.05.16 22:30</p>
            <br/>
            <p>
                A mai nap sikeresen befejeztük az oldal frissítését. Ezzel együtt megjelent az új szabály beküldő oldal, mellyel egyszerűsítettük a játékszabály beküldést. Innentől az új rendszerrel egyszerűbben és gyorsabban lehet szabályokat beküldeni és ezzel másoknak örömöt szerezni.
            </p>
            <Image src={Screenshot} alt="Egy képernyőkép az új szabálybeküldő rendszerről."></Image>
            <Link href="/hirek" passHref><h1 className="underline decoration-wavy cursor-pointer">Vissza</h1></Link>
        </div>
    </>
  )
}

export default UjSzabalyBekuldoRendszer
