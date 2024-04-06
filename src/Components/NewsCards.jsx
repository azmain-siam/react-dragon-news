import { data } from "autoprefixer";
import { useEffect, useState } from "react";
import SingleNewsCard from "./SingleNewsCard";

const NewsCards = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch("news.json")
      .then((res) => res.json())
      .then((data) => setNews(data));
  }, []);

  return (
    <div>
      <h3 className="text-xl font-semibold text-[#403F3F] mb-4">
        Dragon News Home: {news.length}
      </h3>
      {news.map((n) => (
        <SingleNewsCard key={n._id} news={n}></SingleNewsCard>
      ))}
    </div>
  );
};

export default NewsCards;
