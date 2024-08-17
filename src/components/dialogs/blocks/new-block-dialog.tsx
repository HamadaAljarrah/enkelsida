import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../ui/dialog'
import { Button } from '../../ui/button'
import { PlusCircle } from 'lucide-react'
import { Input } from '../../ui/input'
import { DialogClose } from '@radix-ui/react-dialog'

const NewBlockDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className='flex gap-2 items-center'
                    variant="secondary">
                    Add block <PlusCircle className='icon-size' />
                </Button>
            </DialogTrigger>
            <DialogContent className=''>
                <DialogHeader className='mb-8'>
                    <DialogTitle>Add new block</DialogTitle>
                </DialogHeader>
                <p>New block here...</p>
                <div className='gap-3 mt-5 flex items-center justify-end'>
                    <DialogClose asChild>
                        <Button variant='secondary'>Cancel</Button>
                    </DialogClose>
                    <Button>Add block</Button>
                </div>

            </DialogContent>

        </Dialog>
    )
}

export default NewBlockDialog