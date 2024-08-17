"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


const SidebarLink = ({ href, text, icon }: {
    href: string
    text: string,
    icon: JSX.Element
}) => {
    const pathname = usePathname();

    const isActive = (path: string) => pathname.startsWith(path);
    return (
        <Link href={href} className={`px-5 py-3  rounded-xl flex items-center gap-4 transition-all ${isActive(href) ? 'bg-primary/10 rounded-l-none border-l-2 border-primary' : 'hover:bg-white/5'}`}>
            {icon}
            <p>{text}</p>
        </Link>
    )
}

export default SidebarLink