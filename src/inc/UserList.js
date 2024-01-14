import React, { Component } from 'react';
import { Link } from 'react-router-dom';
  
  export default function Example({data}) {
    const userCount = data && data
    .filter((item, index, originalArray) => 
      originalArray.findIndex(user => user.userId === item.userId) === index);

      //filter는 중복을 제거 하고 싶을 때 사용, 호출한 인자 중에서 사용할 수 있다.
    // const userInfo = data && data;
    
    return (
      

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 p-4 padding: 1rem;">
        {data && data.map((person, index) => (
          
          <div
            key={index}
            className="relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-gray-400"
          >
            <div className="flex-shrink-0">
              {/* <img className="h-10 w-10 rounded-full" src={person.imageUrl} alt="" /> */}
            </div>
            <div className="min-w-0 flex-1">
              <Link to={`/PostList/${person.userId}`} className="focus:outline-none no-underline">
                <span className="absolute inset-0" aria-hidden="true" />
                {/* 이름을 눌리면 해당 유저가 쓴 글(PostList)로 이동 */}
                <p className="text-sm font-medium text-gray-900 text-xl">{person.name}</p> 
              <p className="truncate text-sm text-gray-500">{person.email}</p>
              <p className="truncate text-sm text-gray-500">{person.phone}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    )
  }