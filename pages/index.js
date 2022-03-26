import Head from 'next/head'
import Image from 'next/image'
import Logo from '../public/logo.jpg'
import Link from 'next/link'

function Home() {
  return (
      <>
        <Head>
          <title>ReHal játékszabály(ok)</title>
        </Head>
        <div className="w-screen flex flex-col justify-start items-center">
            <Image width={187.5} height={51} src={Logo} alt="The ReHal logo"></Image>
            <h1 className="text-3xl font-bold">Játékszabályok</h1>
            <p className="w-full">
                Kedves Vásárló!
                <br/>
                Először is kérlek engedd meg nekünk, hogy megköszünjük, azt, hogy iskolánkat egy lépéssel közelebb jutattad egy új zongora vásárlásának lehetőségéhez.
                <br/>
                Minőségi tartalmakért figyelmedbe ajánljuk az <a className="underline decoration-blue-500 decoration-wavy text-blue-500" href="https://www.instagram.com/rehal_e5vos/">Instagram oldalunkat</a>.
                <br/>
                Játékunkat több mint 3 (három) módon játszatod:
            </p>
            <ul>
                <li><Link href="/alehetoseg">&quot;A&quot; lehetőség</Link></li>
                <li><Link href="/blehetoseg">&quot;B&quot; lehetőség</Link></li>
                <li><Link href="/clehetoseg">&quot;C&quot; lehetőség</Link></li>
            </ul>
            <h1 className="text-red-600">Ez az online szabálykönyv alpha verziója! Ennél szebb lesz (talán).</h1>
        </div>
      </>
  )
}

export default Home