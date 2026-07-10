"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, setUrl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": url,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        // the below says /api which means at any / end-point
        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                // below two make the text are empty clicking generate btn
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                setUrl("")
                setShorturl("")
                console.log(result)
                alert(result.message)
            })
            .catch((error) => console.error(error));
    }




    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>Generate your Short URL's</h1>
            <div className="flex flex-col gap-2">
                <input type="text"
                    value={url}
                    className='px-4 py-2 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your URL here!'
                    onChange={e => { setUrl(e.target.value) }} />

                <input type="text"
                    value={shorturl}
                    className='px-4 py-2 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your prefered URL shorten here!'
                    onChange={e => { setShorturl(e.target.value) }} />
                <button onClick={generate} className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Generate</button>
            </div>
                {generated && <>
                <span className='font-bold text-lg'>Your Links</span><code><Link href={generated} target="_black" >{generated}</Link></code>
                </>}

        </div>
    )
}

export default Shorten
