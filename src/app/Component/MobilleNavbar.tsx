import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/Sheet"
import { Menu } from "lucide-react"

export default function MobileNavbar () {
    return(
        <div>
             <Sheet>
        <SheetTrigger>
         <Menu />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle><div>
            <nav className="w-full bg-slate-200 ">
                <ul className="flex justify-center flex-col p-4 gap-2 text-black border-b border-white">
                    <li className="border-b border-white pb-2">Home</li>
                    <li className="border-b border-white pb-2">Contact</li>
                    <li className="border-b border-white pb-2">Gallery</li>
                    <li className=" border-white pb-2">About</li>
                </ul>
            </nav>
        </div></SheetTitle>
            <SheetDescription> 

            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

             
             <div className="">

            </div>
        </div>
    )
}