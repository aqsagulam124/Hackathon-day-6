import Link from "next/link";
import Image from "next/image";

export default function NewArrivals () {
    return(
        <div>
            <div className="flex w-full h-[639px] bg-[#FFF9E5]">
                <div>
                    <Image src="/asgaard_sofa.png" alt="Asgaard_Sofa" width={900} height={607} className="pt-6 ml-[58px]"/>
                </div>
                <div className="w-[331px] h-[205px] mt-52 ml-20 text-center">
                    <h1 className="text-2xl font-semibold">New Arrivals</h1>
                    <h2 className="text-5xl mt-4 font-bold">Asgaard Sofa</h2>
                    <Link href="/"><div className="w-[255px] h-[64px] ml-9 border border-black flex justify-center mt-12 py-4 text-xl font-semibold hover:text-white hover:bg-black hover:font-semibold "><p>Order Now</p></div></Link>
                </div>

            </div>

        </div>
    );
}