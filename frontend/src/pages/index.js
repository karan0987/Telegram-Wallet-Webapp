import Head from 'next/head'
import { Inter } from 'next/font/google'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Home() {
    let router = useRouter()
    useEffect(() => {
        router.push('/dashboard')
    }, [])
    return (
        <>
            <Head>
                <title>E-Wallet - Secure Upi Wallet</title>
                <meta name="description" content="Send and receive money" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    )
}