import React from "react";
import { useNavigate } from "react-router-dom";

const blogData = [
  {
    id: 1,
    date: "19 Jan 2022 • 30 mins",
    title: "Bill Walsh leadership lessons",
    desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    img: "/2c71d31963450c58fe599c40a68f1bf74c09b3de (1).jpg",
  },
  {
    id: 2,
    date: "19 Jan 2022 • 30 mins",
    title: "Bill Walsh leadership lessons",
    desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    img: "/2c71d31963450c58fe599c40a68f1bf74c09b3de (1).jpg",
  },
  {
    id: 3,
    date: "19 Jan 2022 • 30 mins",
    title: "Bill Walsh leadership lessons",
    desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    img: "/2c71d31963450c58fe599c40a68f1bf74c09b3de (1).jpg",
  },
   {
    id: 4,
    date: "19 Jan 2022 • 30 mins",
    title: "Bill Walsh leadership lessons",
    desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    img: "/2c71d31963450c58fe599c40a68f1bf74c09b3de (1).jpg",
  }, {
    id: 5,
    date: "19 Jan 2022 • 30 mins",
    title: "Bill Walsh leadership lessons",
    desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    img: "/2c71d31963450c58fe599c40a68f1bf74c09b3de (1).jpg",
  }, {
    id: 6,
    date: "19 Jan 2022 • 30 mins",
    title: "Bill Walsh leadership lessons",
    desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    img: "/2c71d31963450c58fe599c40a68f1bf74c09b3de (1).jpg",
  },
  {
    id: 7,
    date: "19 Jan 2022 • 30 mins",
    title: "Bill Walsh leadership lessons",
    desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    img: "/2c71d31963450c58fe599c40a68f1bf74c09b3de (1).jpg",
  },
  {
    id: 8,
    date: "19 Jan 2022 • 30 mins",
    title: "Bill Walsh leadership lessons",
    desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    img: "/2c71d31963450c58fe599c40a68f1bf74c09b3de (1).jpg",
  },
  {
    id: 9,
    date: "19 Jan 2022 • 30 mins",
    title: "Bill Walsh leadership lessons",
    desc: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    img: "/2c71d31963450c58fe599c40a68f1bf74c09b3de (1).jpg",
  },
];

function BlogPost() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F6EFF9] px-4 py-10">

      <h3 className="text-3xl font-semibold mb-8">
        All Blog Post
      </h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg p-4 shadow"
          >
            {/* IMAGE CLICK */}
            <img
              src={blog.img}
              alt=""
              className="w-full h-60 object-cover rounded cursor-pointer"
              onClick={() => navigate("/blog-details")}
            />

            <div className="pt-5">
              <p className="text-[#6941C6] font-medium">
                {blog.date}
              </p>

              <div className="flex justify-between items-center pt-2">
                <h2 className="text-xl font-semibold">
                  {blog.title}
                </h2>

                {/* ICON CLICK */}
                <img
                  src="/Icon wrap (2).png"
                  alt=""
                  className="cursor-pointer"
                  onClick={() => navigate("/blog-details")}
                />
              </div>

              <p className="text-[#667085] pt-2">
                {blog.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default BlogPost;
