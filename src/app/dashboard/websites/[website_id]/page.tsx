import DeletePageDialog from "@/components/dialogs/pages/delete-page.dailog"
import NewPageDialog from "@/components/dialogs/pages/new-page-dialog"
import { Card } from "@/components/ui/card"
import { Edit, ExternalLink, EyeIcon } from "lucide-react"
import Link from "next/link"
import { getWebsiteById } from "@/services/pages"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"


type Props = {
    params: {
        website_id: string;
    }
};

const page = async ({ params }: Props) => {
    const website = await getWebsiteById({ websiteId: params.website_id });


    return (

        <Tabs defaultValue="pages" >
            <TabsList >
                <TabsTrigger value="pages">Pages</TabsTrigger>
                <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>
            <TabsContent value="pages" className="flex flex-col gap-4">
                <Card>

                    <div className='flex justify-between items-center mb-10'>
                        <h1 className="text-3xl font-bold ">Pages</h1>
                        <div className="flex gap-2 items-center">
                            <Link
                                target='_blank'
                                href={`http://${params.website_id}.${process.env.NEXT_PUBLIC_APP_DOMAIN}/`}>
                                <Button
                                    className='flex gap-2 items-center'
                                    variant="secondary">
                                    Preview <ExternalLink className='w-4 h-4' />
                                </Button>
                            </Link>
                            <NewPageDialog />

                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        {website?.pages?.map((page) => (
                            <div className="border flex justify-between items-center rounded-md px-4 py-2 border-l-primary border-l-4" key={page.id}>
                                <div>
                                    <h2>{page.name}</h2>
                                    <p className="text-sm opacity-50">{page.path}</p>
                                </div>

                                <div className="flex items-center gap-4">
                                    <DeletePageDialog />
                                    <Link href={`/dashboard/page?website=${website.id}&page=${page.id}`} >
                                        <Edit />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </Card>
            </TabsContent>
            <TabsContent value="settings">Settings here</TabsContent>
        </Tabs>



    )
}

export default page