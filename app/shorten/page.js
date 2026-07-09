"use client"
import React from 'react'
import { useState } from 'react'

const Shorten = () => {
    const [url, setUrl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generated, setGenerated] = useState(false)

 

    return (
        <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-4'>
            <h1 className='font-bold text-2xl'>Generate your Short URL's</h1>
            <div className="flex flex-col gap-2">
                <input type="text"
                value={url}
                    className='px-4 py-2 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your URL here!'
                    onChange={e =>{setUrl(e.target.value)}} />

                <input type="text"
                value={shorturl}
                    className='px-4 py-2 focus:outline-purple-600 rounded-md'
                    placeholder='Enter your prefered URL shorten here!'
                    onChange={e =>{setShorturl(e.target.value)}} />
                <button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold'>Generate</button>
            </div>
        </div>
    )
}

export default Shorten
