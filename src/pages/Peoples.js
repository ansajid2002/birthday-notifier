import React, { useState, useEffect } from "react";

import { useGlobalContext } from "../context";
const Peoples = () => {
  const { peopData ,isSidebarOpen} = useGlobalContext();

  const [page, setPage] = useState(0);
  const [followers, setFollowers] = useState([]);

  const Paginate = (data) => {
    const itemsPerPage = 10;
    const numberOfPages = Math.ceil(data.length / itemsPerPage);

    const newFollowers = Array.from({ length: numberOfPages }, (_, index) => {
      const start = index * itemsPerPage;
      return data.slice(start, start + itemsPerPage);
    });
    return newFollowers;
  };

  const data = Paginate(peopData);

  useEffect(() => {
    setFollowers(data[page]);
  }, [page]);

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };
  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < 0) {
        prevPage = data.length - 1;
      }
      return prevPage;
    });
  };

  const handlePage = (index) => {
    setPage(index);
  };
  return (
    <main>
    {isSidebarOpen ? 
    <div>

    </div> :
      <>
      <div className="container">
        {followers.map((follower, index) => {
          return (
            <div className="card" key={index}>
              <img src={follower.img} alt="d" className="card-img" />
              <h4 className="card-title">{follower.name}</h4>
            </div>
          );
        })}
      </div>

      <div className="btn-container">
        <button className="prev-btn" onClick={prevPage}>
          prev
        </button>
        {data.map((item, index) => {
          return (
            <button
              key={index}
              className={`page-btn ${index === page ? "active-btn" : null}`}
              onClick={() => handlePage(index)}
            >
              {index + 1}
            </button>
          );
        })}
        <button className="next-btn" onClick={nextPage}>
          next
        </button>
      </div>
      </> }
    </main>
  );
};

export default Peoples;
