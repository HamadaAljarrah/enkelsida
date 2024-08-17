import React from 'react'
import { notFound } from 'next/navigation';
import { Card } from '@/components/ui/card';
import Link from 'next/link';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/block-dialog"
import { Button } from '@/components/ui/button';
import { Edit, Edit2, ExternalLink } from 'lucide-react';
import { PAGES } from '@/data/pages';
import { IBlock, IHeroBlock, ITwoColumnBlock } from '@/data/types';
import TwoColumnBlockEdit from '@/components/blocks/tow-column-block/two-column-block-edit';
import HeroBlockEdit from '@/components/blocks/hero-block/hero-block-edit';
import { getPageBlocks, getPageBySlug } from '@/services/pages';
import { DialogClose } from '@/components/ui/dialog';
import EditBlockDialog from '@/components/dialogs/blocks/edit-block.dialog';
import RemoveBlockDialog from '@/components/dialogs/blocks/remove-block.dialog';



type Props = {
    params: {
        page_slug: string;
    }
}



const page = async ({ params }: Props) => {
    const page = await getPageBySlug(params.page_slug);

    if (!page) return notFound();

    const blocks = await getPageBlocks(page.id);


    return (
        <Card>
            <div className='flex justify-between items-center mb-10'>
                <h1 className="text-3xl font-bold">{page.name}</h1>
                <Link
                    target='_blank'
                    href={`/preview/${page.id}`}>
                    <Button
                        className='flex gap-2 items-center'
                        variant="secondary">
                        Preview <ExternalLink className='w-4 h-4' />
                    </Button>
                </Link>
            </div>
            <div className="flex flex-col gap-4">
                {blocks.map((block: any) =>
                    <>
                        <div className='flex justify-between items-center w-full text-start p-4 rounded-md border border-l-primary border-l-4'>
                            <p>{block.name}</p>
                            <div className='flex gap-4 items-center'>
                                <RemoveBlockDialog />
                                <EditBlockDialog block={block} key={block.id} />
                            </div>
                        </div>
                    </>
                )}

            </div>
        </Card>
    )
}

export default page