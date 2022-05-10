import Link from 'next/link'
export default function Home() {
    return (
        <div>
            <p>Index</p>
            <Link href="/chancho">chancho</Link>
            <br />
            <Link href="/Componente">componente</Link>
        </div>
    )
}
