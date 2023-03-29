import React, { useEffect, useState } from "react";
import axios from "axios";
import { NewsCard } from "../components";

const Home = () => {
  const [dataLimit, setDataLimit] = useState(6);
  const [totalPage, setTotalPage] = useState(0);
  const [pagesArray, setPagesArray] = useState([]);
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
      setTotalPage(Math.ceil(data.count / dataLimit));
      if (totalPage > 0) {
        let pagesArr = [];
        for (let i = 0; i < totalPage; i++) {
          pagesArr.push(i);
        }
        setPagesArray(pagesArr);
      }
    };
    fetchData();
  }, [dataLimit, pageNo]);

  return (
    <section className="lg:ml-[260px] py-2 lg:py-6 px-2 mg:px-8 lg:px-12">
      <h1 className="font-bold text-xl md:text-2xl lg:text-3xl mb-4">News</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 md:gap-4 xl:gap-6 px-2">
        {newsData?.map((news) => (
          <NewsCard key={news._id} news={news} />
        ))}
      </div>

      {/* page pagination */}
      <div className="mt-4 flex items-center gap-4 justify-center border-t-2 border-gray-500 pt-2">
        {pagesArray?.map((number) => (
          <button
            className={`bg-blue-400 w-6 h-6 text-white rounded hover:bg-red-400 hover:scale-[1.05] flex items-center justify-center ${
              pageNo === number && "bg-red-400"
            }`}
            key={number}
            onClick={() => setPageNo(number)}
          >
            {number}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Home;
