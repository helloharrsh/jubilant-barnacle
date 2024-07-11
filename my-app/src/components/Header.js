import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import Link from "next/link";

export default function Header(){
    const session = getServerSession(authOptions);
    return (
        <header className="bg-white border-b py-4">
            <div className="max-w-4xl flex justify-between mx-auto px-6">
            <div className="flex gap-6">
                <Link href={'/'}> resume.  </Link> 
                <nav className="flex gap-4 items-center text-slate-700 text-sm">
                    <Link href={'/about'}> About </Link>
                    <Link href={'/pricing'}>Pricing  </Link>
                    <Link href={'/contact'}> Contact Us</Link>
                </nav>
                </div>
                <nav className=" flex gap-4 text-sm text-slate-500 ">
                <Link href={'/login'}> Sign In </Link>
                <Link href={'/login'}> Create Account </Link>
                </nav>
            </div>
          
      </header>
    );
}