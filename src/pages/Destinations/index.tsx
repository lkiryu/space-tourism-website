import { useParams, NavLink } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";

export default function Destinations() {
  const { data, isLoading } = useFetchData("destinations");
  const { id } = useParams();

  if (isLoading) return <p className="text-8xl text-white">Loading...</p>;

  const { images, name, description, distance, travel } = data?.find(
    (item: { name: string }) => item.name.toLowerCase() === id?.toLowerCase(),
  );

  return (
    <main className="flex w-full max-w-[1440px] items-center justify-between px-40">
      <div>
        <h3 className="mb-40 text-2xl font-light tracking-widest text-white uppercase">
          <span className="mr-6 font-medium opacity-25">01</span> Pick your
          destination
        </h3>
        <img src={images.png} alt={name} />
      </div>
      <div className="flex w-[380px] flex-col gap-10">
        <nav className="flex gap-4">
          <NavLink
            className={({ isActive }) =>
              `relative font-extralight tracking-widest uppercase after:absolute after:-bottom-3 after:left-0 after:h-1 after:transition-all after:content-[''] hover:after:w-full ${isActive ? "text-white after:w-full after:bg-white" : "after:bg-light-gray text-light-blue after:w-0"}`
            }
            to="/destination/Moon"
          >
            Moon
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `relative font-extralight tracking-widest uppercase after:absolute after:-bottom-3 after:left-0 after:h-1 after:transition-all after:content-[''] hover:after:w-full ${isActive ? "text-white after:w-full after:bg-white" : "after:bg-light-gray text-light-blue after:w-0"}`
            }
            to="/destination/Mars"
          >
            Mars
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `relative font-extralight tracking-widest uppercase after:absolute after:-bottom-3 after:left-0 after:h-1 after:transition-all after:content-[''] hover:after:w-full ${isActive ? "text-white after:w-full after:bg-white" : "after:bg-light-gray text-light-blue after:w-0"}`
            }
            to="/destination/Europa"
          >
            Europa
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `relative font-extralight tracking-widest uppercase after:absolute after:-bottom-3 after:left-0 after:h-1 after:transition-all after:content-[''] hover:after:w-full ${isActive ? "text-white after:w-full after:bg-white" : "after:bg-light-gray text-light-blue after:w-0"}`
            }
            to="/destination/Titan"
          >
            Titan
          </NavLink>
        </nav>
        <div className="flex flex-col gap-4">
          <h2 className="font-Bellefair text-8xl text-white uppercase">
            {name}
          </h2>
          <p className="text-light-blue text-xl font-extralight">
            {description}
          </p>
        </div>
        <hr className="border-gray-600" />
        <div className="flex gap-20">
          <div>
            <h4 className="text-light-blue mb-3 font-extralight uppercase">
              Avg. distance
            </h4>
            <h3 className="font-Bellefair text-2xl text-white uppercase">
              {distance}
            </h3>
          </div>
          <div>
            <h4 className="text-light-blue mb-3 font-extralight uppercase">
              Est. travel time
            </h4>
            <h3 className="font-Bellefair text-2xl text-white uppercase">
              {travel}
            </h3>
          </div>
        </div>
      </div>
    </main>
  );
}
