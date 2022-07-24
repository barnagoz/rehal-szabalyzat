import Head from 'next/head'
import Image from 'next/image'
import Logo from '../public/logo.jpg'
import Link from 'next/link'
import Script from 'next/script'

function Home() {
  return (
      <>
        <Head>
          <title>ReHal - újrahasznosítva</title>
        </Head>
        <div className="w-full flex flex-col justify-start items-center">
            <h1 className="font-poppins font-black text-3xl tracking-tight">Üdvözlet</h1>
            <p className="w-full font-poppins">
                Kedves látogató!
                <br/>
                Üdvözöllek a ReHal hivatalos weboldalán! Köszönjük, hogy a projektünkkel kapcsolatos érdeklődésed ide vezetett.
                <br/>
                <br/>
                Ha még nem tudnád, a projektünk célja az, hogy a társasjátékokat pénzügyileg elérhetőbbé tegyük, és ezzel a bolygónk megmentését is segítsük. Ennek pontosabb kifejtését a <Link href="/tortenet" passHref><span className="decoration-dashed hover:decoration-dotted underline cursor-pointer">&quot;TÖRTÉNETÜNK&quot;</span></Link> oldalon éred el.
                <br/>
                Viszont sok más ok is lehet, ami válaszol a kérdésre, hogy miért tévedtél ide, ezekhez itt találsz oldalakat:
            </p>
            <ul>
                <li className="underline decoration-dashed hover:decoration-dotted">- <Link href="/jatekszabaly"><a className="underline decoration-dashed hover:decoration-dotted">&quot;KÁRTYAPAKLI JÁTÉKSZABÁLY&quot;</a></Link></li>
                <li className="underline decoration-dashed hover:decoration-dotted">- <Link href="/tortenet"><a className="underline decoration-dashed hover:decoration-dotted">&quot;TÖRTÉNETÜNK&quot;</a></Link></li>
                <li className="underline decoration-dashed hover:decoration-dotted">- <Link href="/gyik"><a className="underline decoration-dashed hover:decoration-dotted">&quot;GYAKRAN ISMÉTELT KÉRDÉSEK&quot;</a></Link></li>
                <li className='underline decoration-dashed hover:decoration-dotted'>- <Link href="/posztjaink"><a className="underline decoration-dashed hover:decoration-dotted">&quot;POSZTJAINK&quot;</a></Link></li>
            </ul>
            <p className="w-full">
              Reméljük te is azonosulni tudsz céljainkkal és továbbra is érdeklődéssel fordulsz majd a projektünk felé! 
            </p>
            <br/>
            <div className="w-full" id="curator-feed-default-feed-layout">
              <a href="https://curator.io" target="_blank" className="crt-logo crt-tag" rel="noreferrer">Powered by Curator.io</a>
              <Script id='curator' strategy="lazyOnload">
                {`(function(){
var i,e,d=document,s="script";i=d.createElement("script");i.async=1;i.charset="UTF-8";
i.src="https://cdn.curator.io/published/39cc41e5-f9c9-4f6b-99b4-f9b787c39420.js";
e=d.getElementsByTagName(s)[0];e.parentNode.insertBefore(i, e);
                })();`}
              </Script>
            </div>
        </div>
      </>
  )
}

export default Home