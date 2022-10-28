import { BiSearch } from "react-icons/bi";

// import logoImg from "../Logo.png"

function Header() {
  return (
    <div className="flex items-center space-x-4 p-3">

      {/* <img src={logoImg} /> */}
      <div className="flex items-center">
      <BiSearch className="text-gray-500" size={22}/>

        <input
          placeholder="search"
          className="p-2 rounded-3xl border-none Class
            bg-inherit outline-none text-gray-400"
        />
      </div>
    </div>
  );
}

export default Header;
