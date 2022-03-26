import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo.jpg'
import Link from 'next/link'

function MasodikSzab(props) {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <Image width={187.5} height={51} src={Logo} alt="The ReHal logo"></Image>
      <h1 className="text-3xl font-bold">&quot;B&quot; lehetőség</h1>
      <p>A kártyákat egy kupacba rakjuk. Kihív egy másik játékost egy párbajra. Mindketten húznak egy kártyát a pakliból és a kihívó eldönti, hogy támad vagy védekezik. Ha az egyik játékos támad akkor a másiknak védekezni kell és fordítva. Ha támad akkor visszaszámolnak háromtól és egyszerre lecsapják a kártyákat egymás mellé és megnézik, hogy melyik szám a nagyobb a támadás vagy a védekezés, fordítva is így van. Az nyer akinek nagyobb a száma  a nyertes elveszi a vesztes kártyáját és maga mellé rakja. Ez akkor is így van ha a kihívó a védekezés választja. A kártyát amivel megnyerte a kört vissza kell keverni a pakliba. Az elnyert kártya már nem játszik az nyer akinek a legtöbb ilyen kártyája van a játék végén az nyer. A játék a közös kupacban lévő lapok elfogyásáig tart. Ha a két szám egyenlő akkor mindkét kártyán a másik számot kell nézni. Ezekből a számokból akié a nagyobb az nyeri a párbajt. Ha ez is egyenlő akkor ezeket visszakeverik a pakliba, új lapokat húznak és azokkal játszanak tovább. 
      Képességek: A kártya alján található műveletek, amelyeket a kártya “lecsapásakor” kell elvégezni.
      Speciális képességgel rendelkező kártyák: 
       - Egyetemi hallgató: amikor ezt a lapot lecsapott rakd a kártya kupac mellé és húzz fel két lapot a kezedbe és válassz egyet, a másikat keverd bele a pakliba, ezután játsszátok le a kört mint egy rendes menetet, ha az nyer aki az egyetemi hallgatót használta, a kártyát keverjétek vissza a pakliba, ha a másik játékos nyer, ő az egyetemi hallgatót és a harcban használt kártyát is a díszpaklijába rakható. Ha az egyetemi hallgatót utolsó kártyaként húzzák fel a képessége nem működik

</p>
<Link href="/" passHref><h1 className="underline decoration-wavy cursor-pointer">Vissza</h1></Link>
    </div>
  )
}

export default MasodikSzab
