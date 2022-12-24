import Navigation from "../Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <div className=" ">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
