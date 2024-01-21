export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <div className="flex justify-center space-x-4 mx-8">
          <p className="flex flex-1 justify-center bg-gray-400 rounded p-6 shadow">
            Thorough background check and certification to ensure well trained
            babysitters as well as submitter review system to verify exceptional
            service
          </p>
          <p className="flex flex-1 justify-center bg-gray-400 rounded p-6 shadow">
            Babysitters are sent to houses when they are needed, we guarantee
            that our certified babysitters are great with kids and moms can take
            a break without worry
          </p>
        </div>
      <div className="mb-32 grid text-center lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
        <div className="imgWithDes">
          <button id="emergency">
            <a 
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              >Emergency Babysit
            </a>
          </button>
          <p className="des">
          $40 per hour. A licensed, sitter certified professional will come to desired location immediately.
          </p>
        </div>

        <div className="imgWithDes">
          <button id="tier1">
            <a 
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              >Tier 1
            </a>
          </button>
          <p className="des">
          $200 per month. Professional sitters will arrive to the location for a maximum of 20 hours each month when needed.
          </p>
        </div>

        <div className="imgWithDes">
          <button id="tier2">
            <a 
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              >Tier 2
            </a>
          </button>
          <p className="des">
          $300 per month. Professional sitters will arrive to the location for a maximum of 35 hours each month when needed.
          </p>
        </div>


        <div className="imgWithDes">
          <button id="tier3">
            <a 
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
              >Tier 3
            </a>
          </button>
          <p className="des">
          $500 per month. Professional sitters will arrive to the location for a maximum of 60 hours each month when needed.
          </p>
        </div>
      </div>
    </main>
  );
}
