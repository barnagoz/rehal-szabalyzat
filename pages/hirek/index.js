import React from "react";
import Head from "next/head";
import Image from "next/image";
import Logo from "../../public/logo.jpg";
import Link from "next/link";

function Index(props) {
  return (
    <>
      <Head>
        <title>ReHal - újrahasznosítva</title>
      </Head>
      <div className="w-full flex flex-col justify-start items-center">
        <Image
          width={187.5}
          height={51}
          src={Logo}
          alt="The ReHal logo"
        ></Image>
        <h1 className="text-3xl font-bold">Hírek</h1>
        <div className="w-full h-auto flex flex-col justify-start items-center">
          <Link href="/hirek/2022-05-16-uj-szabalybekuldo-rendszer" passHref>
            <div className="border-4 w-full h-auto border-black p-2 rounded-md cursor-pointer">
              <h3 className="font-poppins font-bold text-lg">Új szabálybeküldő rendszer</h3>
              <p>A mai nap sikeresen befejeztük az oldal frissítését. Ezzel együtt megjelent az új szabály beküldő oldal, mellyel...</p>
            </div>
          </Link>
          {/*<Link href="/hirek/teszthir" passHref><div className="border-4 w-full h-auto border-black p-2 rounded-md cursor-pointer">
                <h3 className="font-poppins font-bold text-lg">Teszthír</h3>
                <p>lorem ipsum dolor sit amet, consectetur adip lorem ips</p>
  </div></Link>*/}
        </div>
        <br/>
        <Link href="/" passHref>
          <h1 className="underline decoration-wavy cursor-pointer">Vissza</h1>
        </Link>
      </div>
    </>
  );
}

export default Index;
