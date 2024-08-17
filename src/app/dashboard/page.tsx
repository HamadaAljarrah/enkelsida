import { redirect } from "next/navigation"


const page = () => {
    return redirect('/dashboard/websites')
}

export default page