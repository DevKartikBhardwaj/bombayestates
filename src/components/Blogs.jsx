import React from "react";
import { Link } from "react-router-dom";
//images
import p1 from "../images/propertycard/p1.jpg";
import p2 from "../images/propertycard/p2.jpg";
import p3 from "../images/propertycard/p3.jpg";

const Blogs = ({ blogsSecRef }) => {
  return (
    <section className="blogsSection" ref={blogsSecRef}>
      <h5 className="secondaryHeading testing">Blogs</h5>
      <h1 className="primaryHeading">Recent Blogs</h1>
      <div className="blogCardWrapper">
        <BlogCard
          color={"orange"}
          category={"Flat"}
          date={"March 27, 2022"}
          headline={"Flat is for sale at all time low in Noida"}
          img={p1}
        />
        <BlogCard
          color={"green"}
          category={"Villa"}
          date={"March 27, 2022"}
          headline={"Flat is for sale at all time low in Noida"}
          img={p2}
        />
        <BlogCard
          color={"orange"}
          category={"Flat"}
          date={"March 27, 2022"}
          headline={"Flat is for sale at all time low in Noida"}
          img={p3}
        />
        <BlogCard
          color={"black"}
          category={"Condo"}
          date={"March 27, 2022"}
          headline={"Flat is for sale at all time low in Noida"}
          img={p1}
        />
        <BlogCard
          color={"red"}
          category={"Appartment"}
          date={"March 27, 2022"}
          headline={"Flat is for sale at all time low in Noida"}
          img={p3}
        />
        <BlogCard
          color={"orange"}
          category={"Flat"}
          date={"March 27, 2022"}
          headline={"Flat is for sale at all time low in Noida"}
          img={p2}
        />
        <BlogCard
          color={"blue"}
          category={"Duplex"}
          date={"March 27, 2022"}
          headline={"Flat is for sale at all time low in Noida"}
          img={p3}
        />
        <BlogCard
          color={"orange"}
          category={"Flat"}
          date={"March 27, 2022"}
          headline={"Flat is for sale at all time low in Noida"}
          img={p1}
        />
      </div>
    </section>
  );
};

const BlogCard = ({ img, color, category, date, headline }) => {
  return (
    <div className="blogCard">
      <img src={img} alt="blog img" className="blogImage" />
      <div className="midContainer">
        <button className="blogSticker" style={{ backgroundColor: color }}>
          {category}
        </button>
        <span className="date">{date}</span>
      </div>
      <Link to="/" className="blogLink">
        <h4 className="blogHeading">{headline}</h4>
      </Link>
    </div>
  );
};

export default Blogs;
