import { Button } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { Grip, Headset, MessageSquareMore } from 'lucide-react'
import React, { ReactNode } from 'react'
import { FileText, KeySquare, LogOut, Workflow } from 'lucide-react'
import Link from 'next/link'
import SidebarLink from '@/components/sidebar-link'
import Container from '@/components/container'

const MobileLayout = ({ children }: { children: ReactNode }) => {
    return (
        <main className='block lg:hidden'>
            <div className='bg-white'>
                <Container className='flex items-center justify-between py-2'>
                    <div className='flex gap-1 items-end w-fit'>
                        <h1 className='text-xl font-bold'>Bokify</h1>
                        <span className='w-2 h-2 rounded-full bg-red-500 mb-1'></span>
                    </div>

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant={"ghost"} size="icon">
                                <Grip size={24} />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className='flex flex-col justify-start border-none items-start shadow-sm p-8 bg-primary text-background' side={'left'}>
                            <SheetTitle className='text-white'>Meny</SheetTitle>
                            <div className='flex flex-col gap-3 mt-20'>
                                <SheetClose>
                                    <SidebarLink icon={<FileText size={20} />} text='Pages' href='/dashboard/pages' />
                                </SheetClose>
                          
                            </div>
                            <div className="mt-auto">
                                <Link href='/dashboard/settings' className='flex px-5 py-3 rounded-xl w-full transition-all items-center gap-3 pl-5 hover:bg-accent/10'>
                                    <LogOut size={20} />
                                    <p>Logga ut</p>
                                </Link>
                            </div>
                        </SheetContent>
                    </Sheet>
                </Container>
            </div>


            <div className='flex items-center gap-[2px] py-1'>
                <Button variant="ghost" className='opacity-70 flex items-center gap-2'>
                    <MessageSquareMore size={16} />
                    <p>Feedback</p>
                </Button>
                <Button variant="ghost" className='opacity-70 flex items-center gap-2'>
                    <Headset size={16} />
                    <p>Kundtjänst</p>
                </Button>
            </div>
            <Container className='mt-2'>
                {children}
            </Container>
        </main>
    )
}

export default MobileLayout