import React from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../../ui/dialog'
import { Button } from '../../ui/button'
import { Edit, PlusCircle } from 'lucide-react'
import { Input } from '../../ui/input'
import { DialogClose } from '@radix-ui/react-dialog'

const EditPageDialog = () => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    className='flex gap-2 items-center'
                    size="icon"
                    variant="ghost">
                    <Edit className='icon-size' />
                </Button>
            </DialogTrigger>
            <DialogContent className=''>
                <DialogHeader className='mb-8'>
                    <DialogTitle>Edit  Page</DialogTitle>
                </DialogHeader>
                <p>Edit Page here...</p>
                <div className='gap-3 mt-5 flex items-center justify-end'>
                    <DialogClose asChild>
                        <Button variant='secondary'>Cancel</Button>
                    </DialogClose>
                    <Button>Save</Button>
                </div>

            </DialogContent>

        </Dialog>
    )
}

export default EditPageDialog