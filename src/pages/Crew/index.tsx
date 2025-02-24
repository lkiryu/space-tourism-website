import { useParams, NavLink } from "react-router-dom";
import { useFetchData } from "../../hooks/useFetchData";

export default function Crew() {
  const { data, isLoading } = useFetchData("crew");
  const { id } = useParams();

  if (isLoading) return <p className="text-8xl text-white">Loading...</p>;

  const { name, images, role, bio } = data?.find(
    (item: { role: string }) =>
      item.role.split(" ")[0].toLowerCase() === id?.toLowerCase(),
  );

  return (
    <main className="flex w-full max-w-[1440px] items-center justify-between px-40">
      <div className="flex w-[550px] flex-col justify-between gap-[200px]">
        <h3 className="text-2xl font-light tracking-widest text-white uppercase">
          <span className="mr-6 font-medium opacity-25">02</span>Meet your crew
        </h3>
        <div>
          <h3 className="font-Bellefair mb-4 text-4xl text-white uppercase opacity-50">
            {role}
          </h3>
          <h2 className="font-Bellefair mb-6 text-5xl text-white uppercase">
            {name}
          </h2>
          <p className="text-light-blue text-2xl font-extralight">{bio}</p>
        </div>
        <nav className="flex gap-10">
          <NavLink
            to="/crew/commander"
            className={({ isActive }) =>
              `rounded-full p-2 transition-all ${isActive ? "bg-white" : "bg-dark-gray opacity-15 hover:opacity-50"}`
            }
          ></NavLink>
          <NavLink
            to="/crew/mission"
            className={({ isActive }) =>
              `rounded-full p-2 transition-all ${isActive ? "bg-white" : "bg-dark-gray opacity-15 hover:opacity-50"}`
            }
          ></NavLink>
          <NavLink
            to="/crew/pilot"
            className={({ isActive }) =>
              `rounded-full p-2 transition-all ${isActive ? "bg-white" : "bg-dark-gray opacity-15 hover:opacity-50"}`
            }
          ></NavLink>
          <NavLink
            to="/crew/flight"
            className={({ isActive }) =>
              `rounded-full p-2 transition-all ${isActive ? "bg-white" : "bg-dark-gray opacity-15 hover:opacity-50"}`
            }
          ></NavLink>
        </nav>
      </div>
      <img src={images.png} alt={name} />
    </main>
  );
}
