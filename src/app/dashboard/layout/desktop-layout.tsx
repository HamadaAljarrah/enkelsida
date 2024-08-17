import React, { ReactNode } from 'react'
import { Bell, FileText, Headset, KeySquare, LogOut, MessageSquareMore, MonitorSmartphone, Workflow } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import SidebarLink from '@/components/sidebar-link'
import Container from '@/components/container'
import { Button } from '@/components/ui/button'


const DesktopLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='hidden lg:flex gap-4'>

            <div className='w-[17rem] max-w-[30%] h-screen flex flex-col justify-start border-none items-start shadow-sm p-8 bg-background'>
                <div className='flex gap-1 items-end w-fit mx-auto'>
                    <h1 className='text-xl font-bold'>Enkelsida</h1>
                    <span className='w-2 h-2 rounded-full bg-red-500 mb-1'></span>
                </div>
                <div className='flex flex-col gap-3 mt-20'>
                    <SidebarLink icon={<MonitorSmartphone size={20} />} text='Websites' href='/dashboard/websites' />
                </div>
                <div className="mt-auto">
                    <Link href='/dashboard/settings' className='flex px-5 py-3 rounded-xl w-full transition-all items-center gap-3 pl-5 hover:bg-accent/10'>
                        <LogOut size={20} />
                        <p>Logga ut</p>
                    </Link>
                </div>
            </div>

            <div className='flex-grow col-span-10'>
                <Container className='mt-2'>
                    <nav className='flex gap-10 items-end justify-between mb-8'>
                        <div className='flex items-center gap-4'>

                            <Button variant="ghost" className='opacity-70 flex items-center gap-2'>
                                <MessageSquareMore size={16} />
                                <p>Feedback</p>
                            </Button>
                            <Button variant="ghost" className='opacity-70 flex items-center gap-2'>
                                <Headset size={16} />
                                <p>Kundtjänst</p>
                            </Button>
                        </div>

                        <div className='flex items-center gap-2'>
                            <Button variant={"ghost"} size="icon" className='opacity-70 flex items-center gap-2'>
                                <Bell size={20} />
                            </Button>
                            <Button variant={"ghost"} className='flex items-center gap-4'>
                                <h1 className='whitespace-nowrap'>Hamada Aljarrah</h1>
                                <Image src='/avatar.png' alt="src" width={40} height={40} className='rounded-full w-8 h-8' />
                            </Button>
                        </div>
                    </nav>
                    {children}
                </Container>
            </div>
        </main >
    )
}

export default DesktopLayout