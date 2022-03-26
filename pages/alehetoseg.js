import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo.jpg'
import Link from 'next/link'

function ElsoSzab(props) {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <Image width={187.5} height={51} src={Logo} alt="The ReHal logo"></Image>
      <h1 className="text-3xl font-bold">&quot;A&quot; lehetőség</h1>
      <p>Osszátok ki a kártyákat lehetőleg egyenlően. Ezekből a lapokból vegyetek fel hármat a kezetekbe, a többit lefordítva rakjátok magatok elé. A kezdő játékos válasszon ki valakit, akivel párbajozni akar. A párbaj elején döntsd el, hogy meg szeretnéd támadni, vagy védekezni szeretnél. Ha azt választod, hogy megtámadod akkor a te kártyád támadó értékét és az ő kártyájának a védekező értékét kell majd összehasonlítanotok (ha valamelyik képesség nem írja máshogy). Ha úgy döntesz, hogy védekezel, akkor fordítva. Számoljatok vissza és mindkettőtök csapjon ki egy általa választott kártyát az asztalra.  A halak képességeit a lapok lerakása után érvényesítsétek először a támadó fél, majd a védekező fél képességét. Amelyikőtöknek a párbaj végén nagyobb az értéke, az nyer és elveszi a másik kártyáját és a saját kártyájával együtt beteszi az előtte lévő kártyapakli aljára. Döntetlen esetén mindkettő párbajozó félnél a másik érték számít. Ha ezek után is döntetlen, akkor a lapokat rakjátok vissza a paklitok aljára. Ezután mindketten annyi lapot húzzatok az előttetek lévő kártyapakliból, hogy a kezetekben 3 kártya legyen! Ha valaki nem tud annyi lapot húzni, hogy 3 kártya legyen a kezében, akkor az összes lapját fel kell húznia, és, ha párbajozik nem húzhat több lapot. Ha valakinek elfogy az összes lapja, akkor számoljátok meg, hogy hány lap van a birtokotokban. Annak, akinek a legtöbb lapja van megnyeri a játékot.
        <br/>Egyetemi hallgató: Ha valaki kijátssza az egyetemi hallgatót, először érvényesítsétek a képességét, majd az egyetemi halgatót és azt a kártyát, amelyet nem választottatok rakjátok középre képpel felfelé. Ebben a dobópakliban lévő kártyákat már nem használhatjátok.
</p>
<Link href="/" passHref><h1 className="underline decoration-wavy cursor-pointer">Vissza</h1></Link>
    </div>
  )
}

export default ElsoSzab
