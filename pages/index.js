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
        <div className="w-full flex flex-col justify-start items-center">
            <Image width={187.5} height={51} src={Logo} alt="The ReHal logo"></Image>
            <h1 className="text-3xl font-bold">Játékszabályok</h1>
            <p className="w-full">
                Kedves Vásárló!
                <br/>
                Először is kérlek engedd meg nekünk, hogy megköszünjük, azt, hogy iskolánkat egy lépéssel közelebb jutattad egy új zongora vásárlásának lehetőségéhez.
                <br/>
                Minőségi tartalmakért figyelmedbe ajánljuk az <a className="underline decoration-black decoration-wavy text-black" href="https://www.instagram.com/rehal_e5vos/">Instagram oldalunkat (@rehal_e5vos)</a>.
                <br/>
                Játék előtt fontos eldönteni, hogy ki fog kezdeni. Azt javasoljuk, hogy erre használjátok a &quot;Ki evett utoljára halat?&quot; módszer. Játékunkat több mint 3 (három) módon játszatod:
            </p>
            <ul>
                <li className="underline decoration-wavy">- <Link href="/alehetoseg">&quot;A&quot; lehetőség</Link></li>
                <li className="underline decoration-wavy">- <Link href="/blehetoseg">&quot;B&quot; lehetőség</Link></li>
                <li className="underline decoration-wavy">- <Link href="/clehetoseg">&quot;C&quot; lehetőség</Link></li>
            </ul>
            <p className="w-full">Ha ezeket elolvastad (vagy nem), akkor mi el is köszönnénk tőled. Szeretnénk jó szórakozást és jó játékot kívánni neked és társaidnak!<br/><br/> Sok szeretettel, az Eötvös József Gimnázium 2021/22 évfolyamának &quot;B&quot; osztályának ReHal csapata.</p>
            <br/>
            <p className="w-full">UI.: A kártyán lévő aláírások egyszer még sokat érhetnek, javasojuk, hogy tartsd meg!</p>
        </div>
      </>
  )
}

export default Home