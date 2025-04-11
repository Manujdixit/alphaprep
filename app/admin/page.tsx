import { Card } from "@/components/ui/card";
import Link from "next/link";

export default function AdminPage() {
    return (
        <div className="flex bg-black w-screen h-screen justify-center items-center gap-6
        ">
            <Link href="/admin/contacts"><Card className="flex justify-center items-center border border-white text-white size-64">See contacts</Card></Link>
            <Link href="/admin/bookings"><Card  className="flex justify-center items-center border border-white text-white size-64">See bookings</Card></Link>

    </div>
)

}