import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
         <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-3xl font-bold">The best URL Shortener in the Market</p>
          <p className="text-sm px-56 text-center">We are the most straightforward URL Shortener in World, We know the hasle, they make you login or make watch big AD's. We got your Back!  </p>
          <div className='flex gap-3'>
                <Link href="/shorten"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>Try Now</button></Link>
                <Link href="/github"><button className='bg-purple-500 rounded-lg shadow-lg p-3 py-1 font-bold text-white'>GitHub</button></Link>
            </div>
         </div>
         <div className="flex justify-start relative ">
          <Image className="mix-blend-darken w-[500px] h-[400px]" alt="url-vector-image" src={"/vector.jpg"} fill={true} />
         </div>
      </section>
    </main>
  );
}
