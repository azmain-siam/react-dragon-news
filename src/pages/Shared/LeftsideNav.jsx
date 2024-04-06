import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftsideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  return (
    <div>
      <h3 className="text-[#403F3F] font-semibold text-xl mb-4 ">
        All Categories
      </h3>
      <div className="flex flex-col">
        {categories.map((category) => (
          <NavLink
            className="p-4 active:bg-[#E7E7E7] hover:bg-[#E7E7E7] text-lg text-[#9F9F9F] active:text-[#403F3F] hover:text-[#403F3F] font-semibold"
            to={`/category/${category.id}`}
            key={category.id}
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftsideNav;
