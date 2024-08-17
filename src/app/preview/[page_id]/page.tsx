import HeroBlockView from '@/components/blocks/hero-block/hero-block-view';
import TwoColumnBlockView from '@/components/blocks/tow-column-block/two-column-block-view';
import SiteContainer from '@/components/site-container';
import { PAGES } from '@/data/pages';
import { IBlock, IHeroBlock, ITwoColumnBlock } from '@/data/types';
import { getPageBlocks, getPageById, getPageBySlug } from '@/services/pages';
import { notFound } from 'next/navigation';
import React from 'react'

type Props = {
    params: {
        page_id: string;
    }
}

const findBlock = (block: IBlock) => {

    let bockType = null;
    switch (block.type) {
        case "HeroBlock":
            bockType = <HeroBlockView {...(block as IHeroBlock)} />;
            break;
        case "TwoColumnBlock":
            bockType = <TwoColumnBlockView {...(block as ITwoColumnBlock)} />;
            break;
    }

    return bockType;
}

const page = async({ params }: Props) => {
    const page = await getPageById(params.page_id);
    const blocks = await getPageBlocks(params.page_id);

    if (!page) return notFound()



    return (
        <div className='bg-background'>
            {blocks.map((block:any) => {
                return <div className='h-screen' key={block.id}>{findBlock(block)}</div>
            })}
        </div>
    )
}

export default page