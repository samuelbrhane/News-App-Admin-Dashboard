import { Link } from "react-router-dom";
import { AiTwotoneHome } from "react-icons/ai";
import { MdCreateNewFolder } from "react-icons/md";

const Sidebar = () => {
  return (
    <section className="w-full h-full">
      <div className="flex flex-col items-center mt-4 gap-3 px-4">
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
