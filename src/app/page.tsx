"use client"
import TwoColumnBlockView from '@/components/blocks/tow-column-block/two-column-block-view';
import { Button } from '@/components/ui/button';
import { ITwoColumnBlock } from '@/data/types'
import { loggedInUser } from '@/data/users';
import React from 'react'
import ReactDOMServer from 'react-dom/server';



const page = () => {

    const data: ITwoColumnBlock = {
        pageId: '1',
        id: '1',
        name: 'Home',
        type: '1',
        imageDirection: 'left',
        mediaType: 'image',
        image: '/hero.jpg',
        video: '1',
        header: '1',
        paragraph: '1',
    }


    const handleClick = async () => {

        const html = ReactDOMServer.renderToStaticMarkup(
            <div className=" border rounded-lg">
                <div className="w-full h-[200px] bg-gray-50 rounded-lg"></div>
                <div className="px-5 py-3">
                    <h2 className="text-lg font-bold">{loggedInUser.id}</h2>
                </div>
            </div>
        )

        const url = 'http://localhost:8080/data'
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify({ html, user: loggedInUser }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await res.json()
        console.log(json);


    }

    return (
        <div>
            <Button onClick={handleClick} >Click</Button>
        </div>
    )
}

export default page