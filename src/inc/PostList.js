import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example({data}) {
  const { userId } = useParams(); // URL 파라미터에서 userId를 가져옵니다.
  // 해당 유저의 게시물만 필터링합니다.
  const userData = data ? data.filter(item => item.userId === Number(userId)) : [];
  //처음 로딩할때 안뜨지만 탭을 이리저리 바꾸면 뜬다,....


  const tabs = [
    { 
      name: '전체', 
      content: () => {
        // 전체 데이터를 반환하는 함수 호출
        return userData;
      }  
    },
    { 
      name: '작성중', 
      content: () => {
        // 전체 데이터를 반환하는 함수 호출
        return userData.filter(item => item.completed === false);
      }  
    },
    { 
      name: '완료',
      content: () => {
        // 전체 데이터를 반환하는 함수 호출
        return userData.filter(item => item.completed === true);
      } 
    },
  ];

  const [currentTab, setCurrentTab] = useState(tabs[0]);

  return (
    <div className="border-b border-gray-200 pb-5 sm:pb-0">
      <h3 className="text-base font-semibold leading-6 text-gray-900">PostList</h3>
      <div className="mt-3 sm:mt-4">
        <div className="hidden sm:block">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.name}
                onClick={() => setCurrentTab(tab)}
                className={classNames(
                  tab.name === currentTab.name
                    ? 'border-indigo-500 text-indigo-600'
                    : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                  'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium'
                )}
                aria-current={tab.name === currentTab.name ? 'page' : undefined}
              >
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
        <div>
            {currentTab.content().map(item => (
              <Link to = {`/PostList?id=${item.id}`}>
                <p key={item.id}>{item.title}</p>
              </Link>
            ))} {/* 탭에 따라 내용물이 바뀌는 부분 */}
        </div>
      </div>
    </div>
  )
}
