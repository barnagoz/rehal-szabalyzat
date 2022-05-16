import Head from 'next/head'
import Image from 'next/image'
import Logo from '../public/logo.jpg'
import Link from 'next/link'

function Terv() {
  return (
      <>
        <Head>
          <title>ReHal - újrahasznosítva</title>
        </Head>
        <div className="w-full flex flex-col justify-start items-center">
            <Image width={187.5} height={51} src={Logo} alt="The ReHal logo"></Image>
            <h1 className="text-3xl font-bold">Történetünk</h1>
            <p>
                <span className="font-bold">Röviden: </span>Arra jutottunk, hogy a társasjátékok túlságosan szennyezik a bolygónk, ezért úgy döntöttünk újragondoljuk az egészet. A mi társasjátékunk egy egyszerű kártyapaklin alapul, viszont ezzel az egy paklival akár több játékot is lehet játszani.
            </p>
            <br/>
            <p>
              <span className="font-bold">Kifejtve: </span>Az iskolai semmittevés közepette arra jutottunk páran az osztályunkból, hogy valami hasznosat kéne tennünk. Elkezdtünk különböző vicces halakat rajzolni a táblára. Mikor pedig az osztályfőnökünk elmondta, hogy környezetvédelmi kiállítás és vásár lesz az egyik iskolai program keretében rögtön arra gondoltunk, hogy ezeket a halakat továbbvigyük. Elkezdtünk ötletelni és rájöttünk, hogy nagyon jó lenne egy újrahasznosított, újra- és újrafelhasználható társasjátékot készíteni. Munkához láttunk. Megrajzoluk a kártyákat és pár szabályt ki is találtunk. 
              De itt nem állt meg a munka. Ki kellett még találni azt is, hogy mitől újrafelhasználható a kártyapakli. Úgyhogy megalkottuk ezt a weboldalt, ahova folyamatosan töltjük fel az új játékszabályokat. A kártyákat kinyomtattattuk újrahasznosított papírra és a vásár első napján majdnem kifogytunk a készletből.
            </p>
            <br/>
            <p>
              Szóval így alakult meg a ReHal. És neked mi a történeted? Hogy találtál ide? Írj nekünk a <a className="underline decoration-wavy cursor-pointer" href="mailto:hali@rehal.ga">hali@rehal.ga</a> címre!
            </p>
            <br></br>
            <Link href="/" passHref><h1 className="underline decoration-wavy cursor-pointer">Vissza</h1></Link>
        </div>
      </>
  )
}

export default Terv