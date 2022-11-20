import Filter from "./Filter";
import Sort from "./Sort";

const NavBar = () => {
  return (
    <div className="flex lg:hidden">
      <Filter />
      <Sort />
    </div>
  );
};

export default NavBar;
