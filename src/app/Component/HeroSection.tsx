import Link from "next/link"
import Image from "next/image"

export default function HeroSection () {
    return(
        <div>
            <div  className="bg-[#FBEBB5] flex w-full h-[860px]">
                <div className="w-5/12 text-6xl font-semibold pl-[265px] py-[408px] " >
                    <h1>Rocket Single Seater</h1>
                    <h3 className="text-base underline underline-offset-8 pt-8 hover:decoration-2"><Link href="/Shop">Shop Now</Link></h3>
                </div>
                <div className="">
                    <Image 
                    src="/SideTabe2.png"
                    alt="Rocket Single Seater"
                    height={1000}
                    width={853}
                    className=""/>
                </div>
                

            </div>
            
        </div>
    )
}