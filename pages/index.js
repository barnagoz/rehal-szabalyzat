import Head from 'next/head'
import Image from 'next/image'
import Logo from '../public/logo.jpg'
import Link from 'next/link'

function Home() {
  return (
      <>
        <Head>
          <title>ReHal - újrahasznosítva</title>
        </Head>
        <div className="w-full flex flex-col justify-start items-center">
            <Image width={187.5} height={51} src={Logo} alt="The ReHal logo"></Image>
            <h1 className="text-3xl font-bold">Kezdőlap</h1>
            <p className="w-full">
                Kedves látogató!
                <br/>
                Üdvözöllek a ReHal hivatalos weboldalán! Köszönjük, hogy a projektünkkel kapcsolatos érdeklődésed ide vezetett.
                <br/>
                <br/>
                Ha még nem tudnád, a projektünk célja az, hogy a társasjátékokat pénzügyileg elérhetőbbé tegyük, és ezzel a bolygónk megmentését is segítsük. Ennek pontosabb kifejtését a <Link href="/tortenet" passHref><span className="decoration-wavy underline cursor-pointer">&quot;TÖRTÉNETÜNK&quot;</span></Link> oldalon éred el.
                <br/>
                Viszont sok más ok is lehet, ami válaszol a kérdésre, hogy miért tévedtél ide, ezekhez itt találsz oldalakat:
            </p>
            <ul>
                <li className="underline decoration-wavy">- <Link href="/jatekszabaly">&quot;KÁRTYAPAKLI JÁTÉKSZABÁLY&quot;</Link></li>
                <li className="underline decoration-wavy">- <Link href="/tortenet">&quot;TÖRTÉNETÜNK&quot;</Link></li>
                <li className="underline decoration-wavy">- <Link href="/hirek">&quot;HÍREK&quot;</Link></li>
                <li className="underline decoration-wavy">- <Link href="/gyik">&quot;GYAKRAN ISMÉTELT KÉRDÉSEK&quot;</Link></li>
            </ul>
            <p className="w-full">A <Link href="/hirek" passHref><span className="decoration-wavy underline cursor-pointer">&quot;HÍREK&quot;</span></Link> oldal mellett rendszeresen frissítjük <a className="underline decoration-black decoration-wavy text-black" href="https://www.instagram.com/rehal_e5vos/">Instagram oldalunkat</a> is, ahol gyorsabban értesülhetsz híreinkről.</p>
            <br/>
            <p className="w-full">
              Reméljük te is azonosulni tudsz céljainkkal és továbbra is érdeklődéssel fordulsz majd a projektünk felé! 
            </p>
        </div>
      </>
  )
}

export default Home