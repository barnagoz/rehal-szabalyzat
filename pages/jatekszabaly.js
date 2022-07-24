import Head from 'next/head'
import Image from 'next/image'
import Szabalyfeltoltes from '../public/szabalybekuldes.png'
import Link from 'next/link'

function Jatekszabaly() {
  return (
      <>
        <Head>
          <title>A ReHal pakli szabályai</title>
        </Head>
        <div className="w-full flex flex-col justify-start items-center">
            
            <h1 className="text-3xl font-bold">Játékszabályok</h1>
            <p className="w-full">
                Játékunk jelenleg 2 azaz kettő játékszabály van kártyapaklinkhoz. Természetesen ez folyamatosan bővülni fog, és az elkövetkező játékszabályokat is itt fogod megtalálni. Azért addig sem hagyunk játék nélkül, nehogy azt hidd, hogy nem foglalkozunk veletek.
            </p>
            <br></br>
            <p className='w-full font-semibold '>Kérlek válassz a lehetőségek közül:</p>
            <ul>
                <li className="underline decoration-dashed hover:decoration-dotted">- <Link href="/alehetoseg"><a className="underline decoration-dashed hover:decoration-dotted">&quot;A&quot; szabály</a></Link></li>
                <li className="underline decoration-dashed hover:decoration-dotted">- <Link href="/blehetoseg"><a className="underline decoration-dashed hover:decoration-dotted">&quot;B&quot; szabály</a></Link></li>
                <li className="underline decoration-dashed hover:decoration-dotted">- <a href='https://md0jgab4t0n.typeform.com/to/Stup0eVs' className="underline decoration-dashed hover:decoration-dotted">Szabályfeltöltés</a></li>
            </ul>
            <br/>
            
              <p className="font-semibold">Szabályfeltöltés</p><p>
              Hogy mindenki, szuper jókat játszhasson a ReHal paklival, te is besegíthetsz a szabálykitalálásba. Ezzel a mi munkánkat is megkönnyíted. Amennyiben van egy jó ötleted és úgy érzed készen állsz ezt megosztani a világgal, kérlek tedd a következőket: gondold át hogy a szabályod szerepel-e az oldalon, mivel ez esetlegesen a szabályjavaslat elvetéséhez vezethet. Ha ezt megtetted akkor a <kbd>Szabályfeltöltés</kbd> gombra kattintva el is kezdheted a szabályfeltöltési folyamatot. Köszönjük, hogy végigolvastad. Amennyiben bármiben elakadnál, írj nyugodtan e-mailt a <a className="underline decoration-dashed hover:decoration-dotted" href="mailto:hali@rehal.ga">&quot;hali@rehal.ga&quot;</a> címre.
            </p>
            <Image src={Szabalyfeltoltes}></Image>
            <br/>
            
            <Link href="/" passHref><h1 className="underline decoration-dashed hover:decoration-dotted cursor-pointer">Vissza</h1></Link>
        </div>
      </>
  )
}

export default Jatekszabaly