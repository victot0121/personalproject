import { SignIn } from "@clerk/nextjs"

export default function page() {
    return (
       <div className="flex justify-center items-center p-3">
           <SignIn />
       </div>
    )
}
