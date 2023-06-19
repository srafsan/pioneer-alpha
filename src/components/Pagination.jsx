import React from "react";

const Pagination = ({
  totalPosts,
  postsPerPage,
  currentPage,
  setCurrentPage,
}) => {
  let pages = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); ++i) {
    pages.push(i);
  }

  const toTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="text-center my-16">
      <div className="join">
        {pages.map((page, index) => (
          <button
            key={page.key}
            className={`join-item btn btn-lg ${
              page === currentPage ? "btn-active" : ""
            }`}
            onClick={() => {
              setCurrentPage(page);
              toTop();
            }}
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
