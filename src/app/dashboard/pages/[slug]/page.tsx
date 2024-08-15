import React from 'react'
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { PAGES } from '@/data/pages';
import { IBlock, IHeroBlock, ITwoColumnBlock } from '@/data/types';
import TwoColumnBlockEdit from '@/components/blocks/tow-column-block/two-column-block-edit';
import HeroBlockEdit from '@/components/blocks/hero-block/hero-block-edit';



type Props = {
    params: {
        slug: string;
    }
}

const findBlock = (block: IBlock) => {

    let bockType = null;
    switch (block.type) {
        case "TwoColumnBlock":
            bockType = <TwoColumnBlockEdit {...(block as ITwoColumnBlock)} />;
            break;
        case "HeroBlock":
            bockType = <HeroBlockEdit {...(block as IHeroBlock)} />;
            break;
    }

    return bockType;
}


const page = ({ params }: Props) => {
    const currentPage = PAGES.find((page) => page.slug === params.slug);

    if (!currentPage) return notFound();


    return (
        <Card>
            <div className='flex justify-between items-center mb-10'>
                <h1 className="text-3xl font-bold">{currentPage.name}</h1>
                <Link
                    target='_blank'
                    href={`/preview/${currentPage.id}`}>
                    <Button
                        className='flex gap-2 items-center'
                        variant="secondary">
                        Preview <ExternalLink className='w-4 h-4' />
                    </Button>
                </Link>
            </div>
            <div className="flex flex-col gap-4">
                {currentPage.block.map((block, i) => (
                    <Dialog key={block.id}>
                        <DialogTrigger className='w-full text-start p-4 rounded-md border'>{block.name}</DialogTrigger>

                        <DialogContent className='w-screen bg-accent  h-screen p-6'>
                            <h3 className='text-3xl font-bold text-center mb-5'>Edit {block.name}</h3>
                            <div className='w-full h-[93%] rounded-lg bg-background shadow-md overflow-hidden'>
                                {findBlock(block)}
                            </div>
                        </DialogContent>
                    </Dialog>
                ))}

            </div>
        </Card>
    )
}

export default page