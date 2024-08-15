import React from 'react'
import Image from 'next/image'
import { ITwoColumnBlock } from '@/data/types'
import SiteContainer from '@/components/site-container'


const TwoColumnBlockView = ({ id, header, image, imageDirection, mediaType, name, paragraph, type, video }: ITwoColumnBlock) => {

    return (
        <SiteContainer className='h-full'>
            <div className='h-full flex flex-col md:flex-row justify-center md:justify-between gap-20 md:gap-10 md:items-center'>
                <div className='break-words md:w-1/2'>
                    <h2 className='text-6xl font-bold mb-6 md:mb-8'>{header}</h2>
                    <p className='text-lg opacity-70'>{paragraph}</p>
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

export default TwoColumnBlockView