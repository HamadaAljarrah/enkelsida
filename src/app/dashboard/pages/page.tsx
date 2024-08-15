import { Card } from "@/components/ui/card"
import { PAGES } from "@/data/pages"
import Link from "next/link"




const page = () => {


    return (
        <Card>
            <h1 className="text-3xl font-bold mb-10">pages</h1>
            <div className="flex flex-col gap-4">
                {PAGES.map((page) => (
                    <Link href={`pages/${page.slug}`} className="border rounded-md px-4 py-2" key={page.id}>
                        <h2>{page.name}</h2>
                        <p className="text-sm opacity-50">{page.path}</p>
                    </Link>
                ))}
            </div>
        </Card>

    )
}

export default page