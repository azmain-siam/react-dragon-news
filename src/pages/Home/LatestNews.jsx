import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
  return (
    <div className="p-4 bg-[#F3F3F3] flex">
      <button className="px-6 py-2 bg-[#D72050] font-medium text-xl text-white cursor-default">
        Latest
      </button>
      <Marquee
        style={{ fontWeight: 600, fontSize: "18px" }}
        pauseOnHover
        speed={100}
      >
        <Link className="mr-7">
          Foreign Minister Hasan Mahmud today said that the Kuki-Chin National
          Front (KNF), an armed group in the Chittagong Hill Tracts, is carrying
          out various terrorist activities including bank robberies...
        </Link>
        <Link className="mr-7">
          2 arrested for abducting MFS trader pretending to be Rab in Tangail...
        </Link>
        <Link className="mr-7">
          Bank manager risked his life to save nations wealth: Rab...{" "}
        </Link>
      </Marquee>
    </div>
  );
};

export default LatestNews;
