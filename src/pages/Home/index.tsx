import { Link } from "react-router-dom";

export default function Home() {
  return (
    <main className="mt-72 flex w-full max-w-[1440px] items-center justify-between px-40">
      <div className="flex w-[540px] flex-col gap-6">
        <h2 className="text-light-blue gap-6 text-2xl uppercase">
          So, you want to travel to
        </h2>
        <span className="font-Bellefair text-9xl text-white">SPACE</span>
        <p className="text-light-blue w-[480px] text-xl">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link
        to="destination"
        className="font-Bellefair text-dark-blue flex h-[272px] w-[272px] items-center justify-center rounded-full bg-white text-4xl uppercase transition-all"
      >
        Explore
      </Link>
    </main>
  );
}
