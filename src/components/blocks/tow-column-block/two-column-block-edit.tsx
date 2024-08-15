"use client"
import React from 'react'
import Image from 'next/image'
import EditTextInput from '@/components/edit-text-input.module'
import { ITwoColumnBlock } from '@/data/types'
import SiteContainer from '@/components/site-container'


const TwoColumnBlockEdit = ({ id, header, image, imageDirection, mediaType, name, paragraph, type, video }: ITwoColumnBlock) => {
   
    return (
        <SiteContainer className='h-full'>
            <div className='h-full flex flex-col md:flex-row justify-center md:justify-between gap-20 md:gap-10 md:items-center'>
                <div className='md:w-1/2'>
                    <EditTextInput
                        defaultValue={header}
                        className='text-6xl font-bold mb-6 md:mb-8 break-words w-full'
                        placeholder="Type your header..."
                        onchange={(e) => console.log(e)}
                    />
                    <EditTextInput
                        defaultValue={paragraph}
                        className='text-lg opacity-70 break-words w-full'
                        placeholder="Type your paragraph..."
                        onchange={(e) => console.log(e)}
                    />

                </div>
                <div className='md:w-1/2'>
                    {mediaType === "image" ? (
                        <Image
                            className='w-full object-cover'
                            src={image || ""}
                            alt={name}
                            width={600}
                            height={600} />
                    ) : (
                        <video width="600" height="600" controls>
                            <source src={video || ""} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    )}
                </div>
            </div>
        </SiteContainer>
    )
}

export default TwoColumnBlockEdit