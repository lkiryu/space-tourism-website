import { NavLink, useParams } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";

export default function Technology() {
  const { data, isLoading } = useFetchData("technology");
  const { id } = useParams();

  if (isLoading) return <p className="text-8xl text-white">Loading...</p>;

  const { name, images, description } = data?.find(
    (item: { name: string }) =>
      item.name.split(" ").at(-1)?.toLowerCase() === id?.toLowerCase(),
  );

  return (
    <main className="flex w-full max-w-[1440px] flex-col px-40">
      <h3 className="mb-24 text-2xl font-light tracking-widest text-white uppercase">
        <span className="mr-6 font-medium opacity-25">03</span> Space launch 101
      </h3>
      <div className="flex items-center justify-center gap-8">
        <div className="flex gap-8">
          <nav className="flex flex-col gap-8">
            <NavLink
              className={({ isActive }) =>
                `font-Bellefair flex h-20 w-20 items-center justify-center rounded-full border-[1px] border-white/25 text-3xl transition-all hover:border-white ${isActive ? "text-dark-blue bg-white" : "text-white"}`
              }
              to="/technology/vehicle"
            >
              1
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-Bellefair flex h-20 w-20 items-center justify-center rounded-full border-[1px] border-white/25 text-3xl transition-all hover:border-white ${isActive ? "text-dark-blue bg-white" : "text-white"}`
              }
              to="/technology/spaceport"
            >
              2
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-Bellefair flex h-20 w-20 items-center justify-center rounded-full border-[1px] border-white/25 text-3xl transition-all hover:border-white ${isActive ? "text-dark-blue bg-white" : "text-white"}`
              }
              to="/technology/capsule"
            >
              3
            </NavLink>
          </nav>
          <div className="flex max-w-[500px] flex-col">
            <h3 className="font-Bellefair mb-4 text-3xl text-white uppercase opacity-50">
              The terminology...
            </h3>
            <h2 className="font-Bellefair mb-6 text-5xl text-white uppercase">
              {name}
            </h2>
            <p className="text-light-blue text-2xl font-extralight">
              {description}
            </p>
          </div>
        </div>
        <img className="h-[450px] w-[450px]" src={images.portrait} alt={name} />
      </div>
    </main>
  );
}
