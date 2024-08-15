"use client"
import EditTextInput from '@/components/edit-text-input.module'
import { Button } from '@/components/ui/button'
import { IHeroBlock } from '@/data/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'




const HeroBlockEdit = ({ mediaType, header, id, image, mainButton, name, paragraph, secondButton, type, video }: IHeroBlock) => {
    return (
        <div className='relative bg-gray-100 h-full flex items-center justify-center'>
            <div className='absolute w-full h-full inset-0 z-0'>
                {mediaType === "image" ? (
                    <Image
                        className='w-full h-full object-cover'
                        src={image || ""}
                        alt={name}
                        width={1920}
                        height={1080}
                    />
                ) : (
                    <video className='w-full h-full object-cover' autoPlay loop muted>
                        <source src={video || ""} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )}
            </div>
            <div className='absolute w-full h-full bg-black/40 z-0'></div>
            <div className='relative z-10 text-center'>
                <EditTextInput
                    className='text-6xl font-bold text-white mb-5 text-center'
                    placeholder="Type your header..."
                    onchange={e => console.log(e)}
                    defaultValue={header} />
                <EditTextInput
                    className='text-lg text-white opacity-90 text-center'
                    placeholder="Type your paragraph..."
                    onchange={e => console.log(e)}
                    defaultValue={paragraph}
                />
                <div className='flex justify-center mt-10'>
                    <Link href={mainButton?.link || ""}>
                        <Button size="lg" className='mr-5 rounded-full bg-white hover:text-white text-black p-6'>{mainButton?.text}</Button>
                    </Link>
                    <Link href={secondButton?.link || ""}>
                        <Button size="lg" variant='secondary' className='rounded-full bg-transparent text-white border-white border p-6'>{secondButton?.text}</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default HeroBlockEdit