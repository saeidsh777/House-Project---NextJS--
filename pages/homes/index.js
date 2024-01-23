import HomeCard from "@/Components/modules/HomeCard";
import React, { useEffect, useState } from "react";
import db from "../../data/db.json";
import Link from "next/link";

export default function index() {
  const [searchValue, setSearchValue] = useState("");
  const [sort, setSort] = useState("-1");
  const [homes, setHomes] = useState([...db.homes]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setHomes(db.homes.filter((home) => home.title.includes(searchValue)));
    
  }, [searchValue]);

  useEffect(() => {
    switch (sort) {
      case "price": {
        const newHomes = [...homes].sort((a, b) => a.price - b.price);
        setHomes(newHomes);
        break;
      }
      case "room": {
        const newHomes = [...homes].sort((a, b) => a.roomCount - b.roomCount);
        setHomes(newHomes);
        break;
      }
      case "metrage": {
        const newHomes = [...homes].sort((a, b) => a.meterage - b.meterage);
        setHomes(newHomes);
        break;
      }

      default: {
        setHomes([...db.homes]);
        break;
      }
    }
  }, [sort]);

  const paginationHandler = (e, pageNum) => {
    e.preventDefault();
    setPage(pageNum);
    let endIndex = 3 * pageNum
    let startIndex = endIndex - 3
    let paginated = [...db.homes].slice(startIndex, endIndex)
    setHomes(paginated)
  };

  return (
    <div className="home-section" id="houses">
      <div className="home-filter-search">
        <div className="home-filter">
          <select defaultValue={sort} onChange={(e) => setSort(e.target.value)}>
            <option value="-1">انتخاب کنید</option>
            <option value="price">بر اساس قیمت</option>
            <option value="room">بر اساس تعداد اتاق</option>
            <option value="metrage">بر اساس اندازه</option>
          </select>
        </div>
        <div className="home-search">
          <input
            type="text"
            placeholder="جستجو کنید"
            onChange={(e) => setSearchValue(e.target.value)}
            value={searchValue}
          />
        </div>
      </div>
      <div className="homes">
        {homes.length ? (
          homes.slice(0, 3).map((home) => <HomeCard key={home.id} {...home} />)
        ) : (
          <h1>ملکی یافت نشد ...</h1>
        )}
      </div>
      <ul
        className={
          homes.length ? "pagination__list" : "pagination__list d-none"
        }
      >
        <li className="pagination__item">
          <a href="#" className="">
            {" <<"}
          </a>
        </li>
        {Array.from({ length: Math.ceil(db.homes.length / 3) }).map(
          (item, index) => (
            <li
              key={index + 1}
              className={`${
                page == index + 1
                  ? "pagination__item active"
                  : "pagination__item"
              }`}
              onClick={(e) => paginationHandler(e, index + 1)}
            >
              <a
                href="#"
              >
                {index + 1}
              </a>
            </li>
          )
        )}
      </ul>
    </div>
  );
}
