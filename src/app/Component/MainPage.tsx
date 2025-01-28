import Link from "next/link"
import Image from "next/image"

export default function MainPage () {
    return (
        <div>
            <div className="flex bg-[#FAF4F4] w-full h-[662px] pt-[140px]">
                <div className="">
                    <div className="  w-8/12">
                        <Image 
                        src="/sidetable_1.png"
                        alt=""
                        width={950}
                        height={570}
                        className=" ml-[148px]"/>
                    </div>
                    <div className="pl-[160px]">
                        <h3 className=" text-[40px] font-semibold">Side table</h3>
                        <p className="text-base underline underline-offset-8 pt-6 font-semibold"><Link href="/">View More</Link></p>
                    </div>
                </div>

                <div className="">
                    <div className=" w-8/12">
                        <Image 
                        src="/sidetable_2.png"
                        alt=""
                        width={1000}
                        height={570}
                        className="ml-[px] "/>
                    </div>
                    <div className="pl-[10px] pt-[29px]">
                        <h3 className=" text-[40px] font-semibold">Side table</h3>
                        <p className="text-base underline underline-offset-8 pt-6 font-semibold"><Link href="/">View More</Link></p>
                    </div>
                </div>
            </div>

            <div className=" flex flex-col bg-[#FFFFFF] w-full h-[777px]">
                <div className=" w-full">
                    <h1 className=" text-center text-4xl pt-16 font-semibold tracking-wide">Top Picks For You</h1>
                </div>

                <div className="text-center pt-6 text-lg font-medium text-[#9F9F9F]">
                    <h2>Find a bright ideal to suit your taste with our great selection of suspension, floor and table lights.</h2>
                </div>
                
                <div className="flex justify-evenly pt-14 text-center">
                    <div className="w-[286px] h-[382px] hover:shadow-lg ">
                        <Link href="/">
                            <Image src="/p1.png" alt="Trenton_modular_sofa_3" width={460} height={460} className=" "/>
                            <p className="text-xl pt-">Trenton modular sofa</p>
                            <p className="text-3xl pt-4 font-medium">Rs. 25,000.00</p>
                        </Link>
                    </div>

                    <div className="w-[286px] h-[382px] hover:shadow-lg">
                        <Link href="/">
                            <Image src="/p2.png" alt="Granite_dining_table_with_dining_chair" width={460} height={460} className=" "/>
                            <p className="text-xl">Granite dining table with chair</p>
                            <p className="text-3xl pt-4 font-medium">Rs. 25,000.00</p>
                        </Link>
                    </div>

                    <div className="w-[286px] h-[382px] hover:shadow-lg">
                        <Link href="/">
                            <Image src="/p3.png" alt="Outdoor_bar_table_and_stool" width={460} height={460} className=" "/>
                            <p className="text-xl">Outdoor bar table and stool</p>
                            <p className="text-3xl pt-4 font-medium">Rs. 25,000.00</p>
                        </Link>
                    </div>

                    <div className="w-[286px] h-[382px]  hover:shadow-lg ">
                        <Link href="/">
                            <Image src="/p4.png" alt="Trenton_modular_sofa_3" width={460} height={460} className=" "/>
                            <p className="text-xl">Plain console with teak mirror</p>
                            <p className="text-3xl pt-4 font-medium">Rs. 25,000.00</p>
                        </Link>
                    </div >
                </div>

                <div className="w-full underline underline-offset-[12px] text-lg pt-16 font-semibold text-center hover:decoration-2">
                        <Link href="/"><p>View More</p>
                        </Link>
                    </div>

            </div>

            
        </div>
    )
}