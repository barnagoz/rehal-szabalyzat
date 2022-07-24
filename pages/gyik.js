import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Kiállítás from '../public/kiállítás.jpeg'
import Link from 'next/link'

function GYIK() {
  return (
    <>
    <Head>
          <title>ReHal - újrahasznosítva</title>
    </Head>
        <div className="w-full flex flex-col justify-start items-center">
            <h1 className="text-3xl font-bold">Gyakran Ismételt Kérdések</h1>
            <br/>
            <p className="w-full">
                <span className="font-bold">Mi az a ReHal?</span> A ReHal egy társasjáték és még sok minden más. Mikor megalapítottuk a cél az volt, hogy halkarakteres táskákat gyártsunk, de ez a folyamat közben megváltozott és létre jött a ReHal &quot;pakli&quot;. 
                <br/>Erről többet olvashatsz a <Link href="/tortenet" passHref><a className="underline decoration-dashed hover:decoration-dotted cursor-pointer">&quot;TÖRTÉNETÜNK&quot;</a></Link> oldalon.
                <br/>
                <br/>
                <span className="font-bold">Ki készítette/készíti a ReHalt?</span> A ReHal egy magyarországi gimnáziumban a Budapest V. kerületi Eötvös József Gimnáziumban született, ezen belül is a 2021/2022-es tanévi 7.b osztály készítette.
                <br/>
                <Image src={Kiállítás} alt="Kiállítás" className='rounded-md'/>
                <br/>
                <span className="font-bold">Miért jó nekem az, hogy ReHal paklit vásárolok?</span> A ReHal egy társasjáték, amely az esetleges későbbi kiadásokkal összekeverhető, és ezért egy pakli időtálló. Emellett oldalunkon egy játékmenet helyett több is megtalálható, valamint lehetőséget adunk saját feltöltésére is. Így nehezebben unható meg a játék és mindenkinek nagyobb örömöt tud szerezni.
                <br/>
                <br/>
                <span className="font-bold">Miért jó a Földnek, ha ReHal paklit vásárolok?</span> A ReHal &quot;pakli&quot;™ teljes mértékben újrahasznosított papírból készül, így a lábnyomunk máris kisebb lesz. És azzal, hogy a pakli újrafelhasználható és további paklikkal összerakható így reméljük a pakli kidobása sem fenyegeti a Földet.
                <br/>
                <br/>
                </p>
                <p className="font-bold text-center text">Más kérdésed van? Tedd fel Kúpernek a következő linken: <Link href="https://m.me/rehal.ga" passHref><a className="underline decoration-dashed hover:decoration-dotted cursor-pointer">&quot;KÚPER&quot;</a></Link>.
                <br/>
                <br/>
            </p>
            <Link href="/" passHref><h1 className="underline decoration-dashed hover:decoration-dotted cursor-pointer">Vissza</h1></Link>
        </div>
    </>
  )
}

export default GYIK