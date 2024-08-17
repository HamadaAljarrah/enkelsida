import DeletePageDialog from "@/components/dialogs/pages/delete-page.dailog"
import NewPageDialog from "@/components/dialogs/pages/new-page-dialog"
import { Card } from "@/components/ui/card"
import { getWebsites } from "@/services/pages"
import Link from "next/link"




const page = async () => {
    const websites = await getWebsites();

    return (
        <Card>
            <div className='flex justify-between items-center mb-10'>
                <h1 className="text-3xl font-bold ">Pages</h1>
                <NewPageDialog />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {websites.map((website) => (
                    <Link key={website.id} href={`/dashboard/websites/${website.id}`}>
                        <div className=" border rounded-lg">
                            <div className="w-full h-[200px] bg-accent rounded-lg"></div>
                            <div className="px-5 py-3">
                                <h2 className="text-lg font-bold">{website.name}</h2>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </Card>

    )
}

export default page