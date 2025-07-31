
import { Headset } from "lucide-react"
export default function TopNav() {

    return (
        <nav
            className="flex justify-between items-center p-7 gap-5">
            <div><img className="h-15 pt-2 " src="/logo.png" alt="Site Logo Here" />

            </div>

            <div className="flex gap-10 font-bold text-2xl">
                <a href="/services">Services</a>
                <a href="/works">Works</a>
                <a href="/notes">Notes</a>
                <a href="/experience">Experience</a>
                </div>

            <div className="flex gap-2">
                <div>01800000000</div>
                <Headset size={20} className="bg-amber-50 rounded-full" />
            </div>

        </nav>
        

    )











}