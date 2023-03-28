import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import { MdCreateNewFolder } from "react-icons/md";

const Sidebar = ({ title }) => {
  return (
    <section className="w-full h-full py-[10px]">
      <div
        className={`flex flex-col items-center ${
          title && "!my-2"
        } my-2 gap-3 px-4`}
      >
        {title && (
          <h1 className="text-2xl lg:text-3xl xl:text-4xl font-semibold">
            News<span className="text-[#4d75cc]">Grid</span>
          </h1>
        )}

        <Link to="/" className="link">
          <AiTwotoneHome className="text-xl" />
          <p>Home</p>
        </Link>
        <Link to="/create" className="link">
          <MdCreateNewFolder className="text-xl" />
          <p>Create</p>
        </Link>
      </div>
    </section>
  );
};

export default Sidebar;
