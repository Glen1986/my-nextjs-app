import Image from 'next/image'
import Link from 'next/link'
import Comet from '/public/img/comet.png'
export default function Home() {
    // <Image src="/img/comet.png" width={400} height={400} />

    return (
        <div>
            <p>Index</p>
            <Link href="/chancho">chancho</Link>
            <br />
            <Link href="/Componente">componente</Link>
            <Image src={Comet} width={400} height={400}></Image>
        </div>
    )
}
