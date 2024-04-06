import { Outlet } from "react-router-dom";
const Root = () => {
  return (
    <div className="w-[93%] max-w-7xl mx-auto font-poppins">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
