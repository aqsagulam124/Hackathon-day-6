import Link from "next/link"
import Image from "next/image"
import { Clock } from 'lucide-react';
import { Calendar } from 'lucide-react';


export default function OurBlogs () {
    return (
        <div>
            <div className=" w-full h-[944px] text-center justify-items-center">

                <div className="w-[479px] h-[91px]  mt-16">
                    <h4 className="text-4xl font-semibold">Our Blogs</h4>
                    <h3 className="tracking-wide text-base text-[#9F9F9F] font-semibold mt-4">Find a bright ideal to suit your taset with out great selection</h3>
                </div>

                <div className="w-[1240px]  h-[679px]">

                    <div className="pt-12 flex justify-between">
                        <div className="w-[393px] h-[555px]">
                            <Image  src="/blog1.png" alt="pic" width={400} height={400} />
                            <p className="text-xl pt-4">Going all-in with millennial design</p>
                             <Link href="/"><p className="text-2xl pt-3 font-medium underline underline-offset-[16px]">Read More</p>
                             </Link>
                             <div className="mt-10 flex justify-center gap-6">
                                <div className="flex gap-2">
                                 <Clock />
                                 <p className=""> 5 mins</p>
                                </div>
                                <div className="flex gap-2">
                                    <Calendar />
                                <p>12th Oct 2024</p>
                                </div>
                             </div>
                        </div>

                        <div className="w-[393px] h-[555px]">
                            <Image  src="/blog2.png" alt="pic" width={400} height={400} />
                            <p className="text-xl pt-4">Going all-in with millennial design</p>
                             <Link href="/"><p className="text-2xl pt-3 font-medium underline underline-offset-[16px]">Read More</p>
                             </Link>
                             <div className="mt-10 flex justify-center gap-6">
                                <div className="flex gap-2">
                                 <Clock />
                                 <p className=""> 5 mins</p>
                                </div>
                                <div className="flex gap-2">
                                    <Calendar />
                                <p>12th Oct 2024</p>
                                </div>
                             </div>
                        </div>

                        <div className="w-[393px] h-[555px]">
                            <Image  src="/blog3.png" alt="" width={400} height={400} />
                            <p className="text-xl pt-4">Going all-in with millennial design</p>
                             <Link href="/"><p className="text-2xl pt-3 font-medium underline underline-offset-[16px]">Read More</p>
                             </Link>
                             <div className="mt-10 flex justify-center gap-6">
                                <div className="flex gap-2">
                                 <Clock />
                                 <p className=""> 5 mins</p>
                                </div>
                                <div className="flex gap-2">
                                    <Calendar />
                                <p>12th Oct 2024</p>
                                </div>
                             </div>
                        </div>

                    </div>
                </div>

                <div className="w-full underline underline-offset-[12px] text-lg mt- font-semibold text-center hover:decoration-2">
                        <Link href="/"><p>View More</p>
                        </Link>
                    </div>


            </div>

        </div>
    )

}