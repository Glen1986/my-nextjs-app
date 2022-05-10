import Link from 'next/link'
import { useIsMounted } from './hooks/useIsMounted'

const ComponenteDinamico = () => {
    const isMounted = useIsMounted()
    console.log({ router }, router.query.id)

    if (!isMounted) {
        return null
    }
    return (
        <div>
            <p>componenete dinamico</p>
            <Link href="/">Inicio</Link>
        </div>
    )
}
export default ComponenteDinamico
