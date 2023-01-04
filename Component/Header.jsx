import React from 'react'
import { useGlobalContext } from './Context'

const Header = () => {
    const {nbPage, page, next, prev, inputData, query} = useGlobalContext();
  return (
    <div>
      <div className="flex justify-center">
            <div className="my-3">
              <h1 className="mx-auto font-mono text-lg font-bold">
                Tech News On The Go
              </h1>
              <input
                type="text"
                value={query}
                onChange={(e)=>{inputData(e.target.value)}}
                className="border-b-2 bg-gray-50 border-gray-600"
              />
              <div className="flex justify-between mt-3">
                <button className="bg-gray-800 text-white text-xs px-3 py-1" onClick={prev}>
                  Prev
                </button>
                <p className="text-xs text-gray-700 my-auto">{page} of {nbPage}</p>
                <button className="bg-gray-800 text-white text-xs px-3 py-1" onClick={next}>
                  Next
                </button>
              </div>
            </div>
          </div>
    </div>
  )
}

export default Header
