import Image from "next/image";
import GameCard from "./components/GameCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        <h1>Fancy Newspaper Mini Games</h1>
      </div>

      <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
      
        <GameCard imageUrl={'sample'} label={'Wordle'} />
        <GameCard imageUrl={'sample'} label={'Mini'} />
        <GameCard imageUrl={'sample'} label={'Strands'} />
      </div>

    </main>
  );
}
