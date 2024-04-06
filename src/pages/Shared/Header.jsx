import logo from "../../assets/logo.png";
import moment from "moment";
import LatestNews from "../Home/LatestNews";

const Header = () => {
  return (
    <div>
      <div className="text-center mb-5">
        <img className="mx-auto mb-3" src={logo} />
        <p className="mb-3 text-[#706F6F] text-lg">
          Journalism Without Fear or Favour
        </p>
        <p className="text-[#403F3F] font-medium text-xl">
          {moment().format("dddd, MMMM D, YYYY")}
        </p>
      </div>
      <LatestNews />
    </div>
  );
};

export default Header;
