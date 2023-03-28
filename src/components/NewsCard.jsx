import React from "react";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";

const NewsCard = ({ news }) => {
  console.log("news", news);
  const {
    _id,
    title,
    content,
    meta,
    tags,
    authorMedia,
    writer,
    featured,
    slug,
    thumbnail,
  } = news;
  return (
    <section className="flex justify-center mb-2">
      <div className="rounded-md shadow hover:scale-[1.01] bg-white pb-1 flex flex-col justify-between">
        <div>
          <img
            src={
              thumbnail?.secure_url ||
              "https://images.pexels.com/photos/97050/pexels-photo-97050.jpeg?auto=compress&cs=tinysrgb&w=600"
            }
            alt="newsThumbnail"
            className="rounded-t-md h-[240px] w-[400px]"
          />
          <div className="mt-1 px-2 ">
            <h1 className="text-sm font-bold">{title}</h1>
            <p>{content}</p>
            <div className="mt-1">
              <p className="flex gap-1 items-end text-sm">
                Tags:
                <span className="flex items-center gap-1">
                  {tags.map((tag, index) => (
                    <p key={index} className="text-[#3486a2] text-[13px]">
                      #{tag}
                    </p>
                  ))}
                </span>
              </p>
            </div>
          </div>
        </div>
        {/* edit and delete */}
        <div className="flex mt-1 gap-3 px-2 border-t-2 border-gray-300 pt-1">
          <AiTwotoneDelete className="btn bg-red-400" />
          <AiFillEdit className="btn bg-blue-400" />
        </div>
      </div>
    </section>
  );
};

export default NewsCard;
