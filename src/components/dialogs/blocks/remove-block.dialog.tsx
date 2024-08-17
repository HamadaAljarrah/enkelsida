import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../ui/dialog'
import { Button } from '../../ui/button'
import { PlusCircle, Trash } from 'lucide-react'
import { Input } from '../../ui/input'
import { DialogClose } from '@radix-ui/react-dialog'

const RemoveBlockDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className='flex gap-2 items-center'
                    size="icon"
                    variant="ghost">
                    <Trash className=' text-red-500 icon-size' />
                </Button>
            </DialogTrigger>
            <DialogContent className=''>
                <DialogHeader className='mb-8'>
                    <DialogTitle>Remove block</DialogTitle>
                </DialogHeader>
                <p>Are you sure you want to remove this block? This action cannot be undone</p>
                <div className='gap-3 mt-5 flex items-center justify-end'>
                    <DialogClose asChild>
                        <Button variant='secondary'>Cancel</Button>
                    </DialogClose>
                    <Button variant="destructive">Remove block</Button>
                </div>

            </DialogContent>

        </Dialog>
    )
}

export default RemoveBlockDialog