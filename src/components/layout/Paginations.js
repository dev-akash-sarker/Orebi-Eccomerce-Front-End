import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import Product from "./Product";
// Example items, to simulate fetching from another resources.
const items = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,
  12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7,
  8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4,
  5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14,
];

function Items({ currentItems }) {
  return (
    <>
      {currentItems &&
        currentItems.map((item, i) => (
          <div className="md:w-[49%] lg:w-[32%]" key={i}>
            <Product
              src="./assets/cap.png"
              badge={true}
              productname="Basic Crew Neck Tee"
              productprice="40.50"
              prouctcolor="Black"
              id={item}
            />
          </div>
        ))}
    </>
  );
}
export default function Paginations({ itemsPerPage }) {
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  // console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    // console.log(
    //   `User requested page number ${event.selected}, which is offset ${newOffset}`
    // );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="md:flex md:flex-wrap md:justify-between">
        <Items currentItems={currentItems} />
      </div>
      <ReactPaginate
        breakLabel="..."
        breakClassName="relative"
        breakLinkClassName="absolute bottom-2 left-1/2 -translate-x-1/2"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        previousClassName="hidden"
        previousLinkClassName="page-link"
        nextClassName="hidden"
        nextLinkClassName="page-link"
        pageClassName="page-item"
        pageLinkClassName="inline-block border-2 border-solid font-normal border-[#f0f0f0] py-2 px-3.5 hover:bg-black hover:text-white transition-all font-dmsans"
        containerClassName="flex flex-wrap gap-x-3.5 gap-y-3.5 md:gap-y-0 font-dmsans font-normal mt-12"
        activeClassName="bg-black text-white font-dmsans font-normal"
      />
      <p className=" lg:absolute lg:bottom-0 lg:right-0 font-dmsans font-normal mt-2.5 lg:mt-0 text-sm text-[#767676]">
        Products from {itemOffset} to {itemOffset + itemsPerPage} of
        {" " + items.length}
      </p>
    </>
  );
}
