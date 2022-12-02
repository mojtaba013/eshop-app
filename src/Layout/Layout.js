import Navigation from "../Navigation/Navigation";

const Layout = ({ children }) => {
  return (
    <div className="container   max-w-screen-xl m-auto">
      <Navigation />
      {children}
    </div>
  );
};

export default Layout;
