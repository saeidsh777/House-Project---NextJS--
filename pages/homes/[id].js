import React from "react";
import { useRouter } from "next/router";
import db from "../../data/db.json"

export default function SinglePageDetialsPage() {
  const route = useRouter();
  const detailesHome = db.homes.find(home => home.id == route.query.id);
  
  return (
    <div className="home-details">
      <div className="home-details-top">
        <div className="home-img">
          <img src={detailesHome?.img} alt="" />
        </div>
        <div className="home-interduce">
          <div className="home-title">
            <h1>
              <span>فروشگاه مجازی ماکسیما</span>
              <span>{detailesHome?.price.toLocaleString()} تومان</span>
            </h1>
            <div className="tags">
              <span className="tag green-tag">ویژه</span>
              <span className="tag brown-tag">برای اجاره</span>
            </div>
            <div className="adrress">آدرس : شیراز، میدان ارم</div>
          </div>
          <div className="home-review">
            <div className="home-review-top">
              <h2>مرور کلی</h2>
              <p className="">
                <span>کد ملک : </span>
                <span>{detailesHome?.code}</span>
              </p>
            </div>
            <ul className="home-review-bottom">
              <li>
                <span>نوع ملک: </span>
                <span>مغازه</span>
              </li>
              <li>
                <span>اتاق: </span>
                <span>{detailesHome?.roomCount}</span>
              </li>
              <li>
                <span>متراژ</span>
                <span>{detailesHome?.meterage}</span>
              </li>
              <li>
                <span>سال ساخت</span>
                <span>1402</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="home-details-bottom">
        <div className="home-details-description">
          <p className="">توضیحات</p>
          <p className="">{detailesHome?.desc}</p>
        </div>
      </div>
    </div>
  );
}
