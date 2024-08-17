import DeletePageDialog from "@/components/dialogs/pages/delete-page.dailog"
import NewPageDialog from "@/components/dialogs/pages/new-page-dialog"
import { Card } from "@/components/ui/card"
import { getPages } from "@/services/pages"
import { Edit, PlusCircle } from "lucide-react"
import Link from "next/link"
import { headers } from 'next/headers';




const page = async () => {
    const pages = await getPages({ websiteId: "1" });

    
    return (
        <Card>
            <div className='flex justify-between items-center mb-10'>
                <h1 className="text-3xl font-bold ">Pages</h1>
                <NewPageDialog />
            </div>
            <div className="flex flex-col gap-4">
                {pages.map((page: any) => (
                    <div className="border flex justify-between items-center rounded-md px-4 py-2 border-l-primary border-l-4" key={page.id}>
                        <div>
                            <h2>{page.name}</h2>
                            <p className="text-sm opacity-50">{page.path}</p>
                        </div>

                        <div className="flex items-center gap-4">
                            <DeletePageDialog />
                            <Link href={`pages/${page.slug}`} >
                                <Edit />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </Card>

    )
}

export default page