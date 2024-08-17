import React from 'react'
import { Dialog, DialogContent, DialogClose, DialogTrigger } from '../../ui/block-dialog'
import { Button } from '../../ui/button'
import { Edit, PlusCircle } from 'lucide-react'
import { Input } from '../../ui/input'
import { IBlock, IHeroBlock, ITwoColumnBlock } from '@/data/types'
import TwoColumnBlockEdit from '@/components/blocks/tow-column-block/two-column-block-edit'
import HeroBlockEdit from '@/components/blocks/hero-block/hero-block-edit'

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


const EditBlockDialog = ({ block }: { block: IBlock }) => {
    return (
        <Dialog key={block.id}>
            <DialogTrigger asChild >
                <Button variant="ghost" size="icon">
                    <Edit className='icon-size' />
                </Button>
            </DialogTrigger>

            <DialogContent className='w-screen bg-accent  h-screen p-6'>
                <div className='gap-3 mb-5 flex items-center justify-end'>
                    <DialogClose asChild>
                        <Button variant='secondary'>Discard</Button>
                    </DialogClose>
                    <Button>Save Changes</Button>
                </div>
                <div className='w-full h-[93%] rounded-lg bg-background shadow-md overflow-hidden'>
                    {findBlock(block)}
                </div>

            </DialogContent>
        </Dialog>
    )
}

export default EditBlockDialog