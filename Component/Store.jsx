import React from "react";
import { useGlobalContext } from "./Context";

const Store = () => {
  const { hits, isLoading, removePost} = useGlobalContext();
// console.log(hits);
  if (isLoading) {
    return (
      <h1 className="font-medium text-transparent text-4xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        Loading...
      </h1>
    );
  } else {
    return (
      <>
        <div>
          
          {hits.map((elm) => {
            const { title, author, url, num_comments, objectID} = elm;
            
            return (
              
                <div
                  className="w-1/2 h-1/5 bg-gray-50 m-auto grid grid-flow-row mt-2 p-3"
                  key={objectID}
                >
                  <h1 className="font-serif text-gray-700">{title}</h1>
                  <hr />
                  <p className="first-letter:uppercase text-sm text-gray-500 ">
                    {author} | {num_comments} comments
                  </p>

                  <div className="flex justify-between">
                    <button className="text-teal-400 text-sm font-mono">
                      <a href={url} target="_blank">
                        Read more
                      </a>
                    </button>
                    <button className="text-red-400 text-sm font-mono" onClick={()=>removePost(objectID)}>
                      <a href="#">Remove</a>
                    </button>
                  </div>
                </div>
              
            );
          })}
        </div>
      </>
    );
  }
};

export default Store;
