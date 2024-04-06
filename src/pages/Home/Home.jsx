import NewsCards from "../../Components/NewsCards";
import Header from "../Shared/Header";
import LeftsideNav from "../Shared/LeftsideNav";
import Navbar from "../Shared/Navbar";
import RightSideNav from "../Shared/RightSideNav";

const Home = () => {
  return (
    <div className="mt-5">
      <Header />
      <Navbar></Navbar>
      <div className="grid md:grid-cols-4 gap-5">
        <LeftsideNav />
        <div className="md:col-span-2">
          <NewsCards/>
        </div>
        <RightSideNav />
      </div>
    </div>
  );
};

export default Home;
