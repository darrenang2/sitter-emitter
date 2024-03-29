import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="relative h-64">
        <div className="opacity-30 z-10">
          <Image src="/midori.jpg" alt="Baby pic" width={1500} height={100} />
        </div>
        <p className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white p-20 text-7xl font-serif z-20">
          Sitter Emitter
        </p>
      </div>
      <div className="z-20 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex justify-center space-x-4 mx-8">
          <p className="flex flex-1 justify-center bg-gray-400 rounded p-5 shadow">
            Thorough background check and certification to ensure well trained
            babysitters as well as submitter review system to verify exceptional
            service
          </p>
          <p className="flex flex-1 justify-center bg-gray-400 rounded p-5 shadow">
            Babysitters are sent to houses when they are needed, we guarantee
            that our certified babysitters are great with kids and moms can take
            a break without worry
          </p>
        </div>
      </div>
      <div className="mb-32 grid text-center lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left z-20">
        <div className="imgWithDes">
          <a href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">
            <button id="emergency">Emergency Babysit</button>
          </a>
          <p className="des">
            $40 per hour. A licensed, sitter certified professional will come to
            desired location immediately.
          </p>
        </div>

        <div className="imgWithDes">
          <a href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">
            <button id="tier1">Tier 1</button>
          </a>
          <p className="des">
            $200 per month. Professional sitters will arrive to the location for
            a maximum of 20 hours each month when needed.
          </p>
        </div>

        <div className="imgWithDes">
          <a href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">
            <button id="tier2">Tier 2</button>
          </a>
          <p className="des">
            $300 per month. Professional sitters will arrive to the location for
            a maximum of 35 hours each month when needed.
          </p>
        </div>

        <div className="imgWithDes">
          <a href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app">
            <button id="tier3">Tier 3</button>
          </a>
          <p className="des">
            $500 per month. Professional sitters will arrive to the location for
            a maximum of 60 hours each month when needed.
          </p>
        </div>
      </div>
    </main>
  );
}
