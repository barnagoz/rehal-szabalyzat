import React from "react";
import Image from "next/image";
import PakliMüv2 from "../public/PakliMüv2.jpg";
import Head from "next/head";
import Link from "next/link";

function MasodikSzab(props) {
  return (
    <div className="w-full flex flex-col justify-start items-center">
      <Head>
        <title>ReHal - újrahasznosítva</title>
      </Head>

      <h1 className="text-3xl font-bold">&quot;B&quot; szabály</h1>
      <br></br>
      <Image
        src={PakliMüv2}
        alt="Egy kép egy ReHal pakliról a fűben"
        className="rounded-md"
      ></Image>
      <br></br>
      <p className="font-semibold">Általános szabályzat:</p>
      <p>
        A kártyákat egy kupacba rakjuk. A soron következő játékos kihív egy
        másik játékost egy párbajra. Mindketten húznak egy kártyát a pakliból és
        a kihívó eldönti, hogy támad vagy védekezik. Ha az egyik játékos támad,
        akkor a másiknak védekeznie kell és fordítva. Párbaj kezdetén
        visszaszámolnak háromtól és egyszerre lecsapják a kártyákat egymás
        mellé, majd megnézik, hogy melyik szám a nagyobb, a támadás vagy a
        védekezés. Az nyer akinek nagyobb a száma. A nyertes elveszi a vesztes
        kártyáját és maga mellé rakja. Ez akkor is így van ha a kihívó a
        védekezést választja. A kártyát, amivel megnyerte a kört, vissza kell
        keverni a pakliba. Az elnyert kártya már nem játszik. Az nyer, akinek a
        legtöbb ilyen kártyája van a játék végén. A játék a közös kupacban lévő
        lapok elfogyásáig tart. Ha a két szám egyenlő, akkor mindkét kártyán a
        másik számot kell nézni. Ezekből a számokból, akié a nagyobb, az nyeri a
        párbajt. Ha ez is egyenlő, akkor ezeket visszakeverik a pakliba, új
        lapokat húznak és azokkal játszanak tovább. Képességek: A kártya alján
        található műveletek, amelyeket a kártya “lecsapásakor” kell elvégezni.
      </p>
      <p className="font-semibold">Kártya specifikus szabályok:</p>
      <p>
        Egyetemi halgató: amikor ezt a lapot lecsapod, rakd a kártya kupac mellé
        és húzz fel két lapot a kezedbe. Válassz egyet, a másikat pedig keverd
        bele a pakliba majd játsszátok le a kört mint egy rendes menetet. Ha az
        nyer aki az egyetemi halgatót használta, a kártyát keverjétek vissza a
        pakliba. Ha a másik játékos nyer, ő az egyetemi halgatót és a harcban
        használt kártyát is a díszpaklijába rakhatja. Ha az egyetemi halgatót
        utolsó kártyaként húzzák fel, a képessége nem működik.
      </p>
      <br></br>
      <Link href="/jatekszabaly" passHref>
        <h1 className="underline decoration-dashed hover:decoration-dotted cursor-pointer">
          Vissza
        </h1>
      </Link>
    </div>
  );
}

export default MasodikSzab;
