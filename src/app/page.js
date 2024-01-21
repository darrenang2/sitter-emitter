import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-1">
      <div className="relative">
        <div className="opacity-50">
        <Image src="/midori.jpg" alt="Baby pic" width={1500} height={500} />
        </div>

  <p className= "absolute top-0 left-1/2 transform -translate-x-1/2 text-white p-20 text-7xl font-serif">
    Sitter Emitter
  </p>
      </div>

    </main>
  );
}
