import { FaEye, FaRegBookmark } from "react-icons/fa6";
import { MdOutlineShare } from "react-icons/md";

const SingleNewsCard = ({ news }) => {
  const {
    rating,
    total_view,
    title,
    author,
    thumbnail_url,
    image_url,
    details,
  } = news;

  return (
    <div className="border border-[#E7E7E7] rounded-md">
      <div className="p-5 bg-[#E7E7E7] flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <div className="h-10 w-10 rounded-full bg-slate-300">
            <img
              src={author.img}
              className="rounded-full object-cover"
              alt=""
            />
          </div>
          <div>
            <h3 className="font-semibold text-[#403F3F]">
              {author.name || "Unknown"}
            </h3>
            <p className="text-sm text-[#706F6F]">{author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-2 text-[#706F6F]">
          <FaRegBookmark size={20} style={{ cursor: "pointer" }} />
          <MdOutlineShare size={21} style={{ cursor: "pointer" }} />
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-xl text-[#403F3F] mb-4 leading-8">
          Biden Pledges Nearly $3 Billion To Ukraine In Largest U.S. Military
          Aid Package Yet
        </h3>
        <div className="w-full h-64 rounded-md mb-7">
          <img
            src={image_url}
            className="h-full object-cover w-full rounded-md"
            alt=""
          />
        </div>
        <p className="text-[#706F6F] leading-6 mb-2">{details.slice(0, 250)+"......"}</p>
        <span className="font-semibold text-[#FF8C47] cursor-pointer">
          Read More
        </span>
        <hr className="my-4" />
        <div className="flex justify-between">
          <p className="font-medium text-[#706F6F]">{rating.number}</p>
          <div className="flex gap-2 items-center text-[#706F6F]">
            <FaEye size={20}></FaEye>
            <p className="font-medium">{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNewsCard;
