import React, { useEffect, useState } from "react";
import axios from "axios";
import { NewsCard } from "../components";

const Home = () => {
  const [dataLimit, setDataLimit] = useState(6);
  const [newsCount, setNewsCount] = useState(0);
  const [pageNo, setPageNo] = useState(0);
  const [newsData, setNewsData] = useState([]);

  // fetch news data
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        `${
          import.meta.env.VITE_BACKEND_URL
        }/api/news?limit=${dataLimit}&pageNo=${pageNo}`
      );
      setNewsData(data.news);
      setNewsCount(Math.ceil(data.count / dataLimit));
    };
    fetchData();
  }, [dataLimit, pageNo]);

  console.log("setNewsCount", newsCount);

  return (
    <section className="ml-[260px] py-2 lg:py-6">
      <h1 className="font-bold text-xl">News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 xl:gap-6">
        {newsData?.map((news) => (
          <NewsCard key={news._id} news={news} />
        ))}
      </div>
    </section>
  );
};

export default Home;
