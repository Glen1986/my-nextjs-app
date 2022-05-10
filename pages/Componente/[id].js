import { useRouter } from 'next/router'
// import { useState, useEffect } from 'react'

const ComponenteDinamico = () => {
    // const [loaded, setLoaded] = useState(false)
    const router = useRouter()
    //
    // useEffect(() => {
    // if (router.isReady) {
    // setLoaded(true)
    // }
    // }, [router.isReady])
    //
    // if (router.isReady) {
    // return null
    // }
    // if (!loaded) {
    // return null
    // }
    console.log({ router }, router.query.id)

    return (
        <div>
            <p>componenete dinamico</p>
        </div>
    )
}
export default ComponenteDinamico
