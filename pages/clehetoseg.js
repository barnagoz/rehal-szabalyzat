import React from 'react'
import Image from 'next/image'
import Logo from '../public/logo.jpg'
import Link from 'next/link'

function HarmadikSzab(props) {
  return (
    <div className="w-screen flex flex-col justify-start items-center">
      <Image width={187.5} height={51} src={Logo} alt="The ReHal logo"></Image>
      <h1 className="text-3xl font-bold">&quot;C&quot; lehetőség</h1>
      <p>Találjanak ki önök saját játékszabályt, és osszák ezt meg velünk Instagramon, a “#rehaljatek” hashtaget használva, vagy keressenek további játékötleteket a @rehal_e5vos Instagram fiók posztjai között.
</p>
<Link href="/">Vissza</Link>
    </div>
  )
}

export default HarmadikSzab