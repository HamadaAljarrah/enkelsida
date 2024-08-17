import HeroBlockView from '@/components/blocks/hero-block/hero-block-view';
import TwoColumnBlockView from '@/components/blocks/tow-column-block/two-column-block-view';
import { IBlock, IHeroBlock, ITwoColumnBlock } from '@/data/types';
import { getWebsiteById } from '@/services/pages';
import { notFound } from 'next/navigation';
import React from 'react'

type Props = {
    params: {
        website_id: string;
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
    const website = await getWebsiteById({websiteId: params.website_id});
    if (!website) return notFound()



    return (
        <div className='bg-background'>
            {website && website.pages && website.pages[0]?.blocks?.map((block:any) => {
                return <div className='h-screen' key={block.id}>{findBlock(block)}</div>
            })}
        </div>
    )
}

export default page