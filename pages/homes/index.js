import HomeCard from "@/Components/modules/HomeCard";
import React, { useEffect, useState } from "react";
import db from "../../data/db.json";

export default function index() {
  const [searchValue, setSearchValue] = useState("");
  const [searchHome, setSearchHome] = useState([...db.homes]);

  useEffect(() => {
    setSearchHome(db.homes.filter((home) => home.title.includes(searchValue)));
  }, [searchValue]);

  return (
    <div className="home-section" id="houses">
      <div className="home-filter-search">
        <div className="home-filter">
          <select name="" id="" defaultValue="-1">
            <option value="-1">انتخاب کنید</option>
            <option value="1">بر اساس قیمت</option>
            <option value="2">بر اساس تعداد اتاق</option>
            <option value="3">بر اساس ادرس</option>
            <option value="4">بر اساس اندازه</option>
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
        {searchHome.length ? (
          searchHome.map((home) => <HomeCard key={home.id} {...home} />)
        ) : (
          <h1>ملکی یافت نشد ...</h1>
        )}
      </div>
      <ul
        className={
          searchHome.length ? "pagination__list" : "pagination__list d-none"
        }
      >
        <li className="pagination__item">
          <a href="#" className="">
            {" <<"}
          </a>
        </li>
        <li className="pagination__item">
          <a href="#" className="">
            2
          </a>
        </li>
        <li className="pagination__item active">
          <a href="#" className="">
            1
          </a>
        </li>
      </ul>
    </div>
  );
}
