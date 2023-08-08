import React from "react";

const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 m-2 items-center shadow-lg">
      <div className="flex items-center col-span-1 gap-2 ">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAARVBMVEX///8jHyAgHB0MAAUOBQikpKQpJSadnZ309PUAAAAIAADZ2Nj8/Pyop6cYExXBwMAtKSpta2xpZ2draWpfXV7BwcGvrq77CGWbAAABG0lEQVR4nO3cwXKCMBQFUApFTQAVtf3/Ty3tsKhLZpKSxnP+4M57JCwyt2kAAAAAAAAAAAAAAADgFQ1TX4ZpyJJvvIXYlSGGecyQcI5v5Yi39AGHsHeqJyH9ovYljXAZ4qeEm9W/pc29pCHmOGma8R7iexky3RbLovbHMvR5bnwAAAAAAAAAANhkPJUhV77hcT2U4frI8mToI5zbUpzDJX3A06Hd+7neL22X/mHbpbDXl+mHeOz2DvUk9skT1j/D+r/DZYiVn6UvcB9+2/tnZpUrHgAAAAAAAAAAbDBMe5ftrXK17M619yZq2f1bGfpLp5JGmKWDtv6E9W9p/SfNz22xdxn7Kl/LbuW9+gAAAAAAAAAAAAAAAPCffAHLSDTi5JU+gwAAAABJRU5ErkJggg=="
          alt="menu"
          className="w-10 h-10"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/2560px-Logo_of_YouTube_%282015-2017%29.svg.png"
          alt="youtube"
          className="h-8 "
        />
      </div>
      {/* 2 section */}
      <div className="col-span-10">
        <div className="flex">
          <input
            type="text"
            className=" w-1/2 p-2 rounded-l-full border-2 border-gray-200"
          />
          <button className="border rounded-r-full bg-gray-400 border-gray-500 py-2 px-5">
            🔎
          </button>
        </div>
      </div>
      {/* 3 section */}
      <div className="col-span-1">
        <img
          src="https://cdn-icons-png.flaticon.com/512/666/666201.png"
          alt="user"
          className="h-8"
        />
      </div>
    </div>
  );
};

export default Head;
