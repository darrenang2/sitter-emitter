import Image from "next/image";

export default function Home() {
  return (
    <main>
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
