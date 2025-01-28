import Image from "next/image"
import Link from "next/link"
import { Search } from 'lucide-react';
import { Heart } from 'lucide-react';
import { ShoppingCart } from 'lucide-react';
import { User } from 'lucide-react';

export default function Navbar () {
    return(
        <div>
            <div className="w-full bg-[#FBEBB5]   h-[px] white ">
            <div className="flex py-4 justify-end pr-40 gap-60">
                        <ul className="flex gap-16 pl- mt-2 text-base font-semibold">
                            <li className="hover:underline-offset-4 hover:underline hover:decoration-black"><Link href="/">Home</Link></li>
                            <li className="hover:underline-offset-4 hover:underline hover:decoration-inherit"><Link href="/Shop">Shop</Link></li>
                            <li className="hover:underline-offset-4 hover:underline hover:decoration-inherit"><Link href="/">About</Link></li>
                            <li className="hover:underline-offset-4 hover:underline hover:decoration-inherit"><Link href="/">Contact</Link></li>
                            
                        </ul>
                            <div className="flex gap-8 py-2">
                                <Link href="/"><User className="hover:fill-inherit" /></Link>
                                <Link href="/"><Search className="hover:fill-inherit"/></Link>
                                <Link href="/"><Heart className="hover:fill-inherit"/></Link>
                                <Link href="/"><ShoppingCart className="hover:fill-inherit"/></Link>
                            </div>
                    
                </div>
                

           

            </div>
             
             
        </div>
    )
};