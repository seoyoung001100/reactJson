import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRecoilValue } from 'recoil';
import { UseUserList, UserPostList } from '../recoil/ReactAtoms';



// const posts = data && data.filter((item) => item.userId == userId);

const tabs = [
  { name: '전체', current: true}, // 여기에 content내용을 담을 수도 있다. (ex. content: 'Tab menu ONE')
  { name: '작성중', current: false },
  { name: '완료', current: false },
];

// const selectMenuHandler = (index) => {
//   // parameter로 현재 선택한 인덱스 값을 전달해야 하며, 이벤트 객체(event)는 쓰지 않아도 자동 전달됨
//   // 함수가 실행되면 현재 선택된 Tab Menu 가 갱신된다.
//   setCurrentTab(index);
// // };


// useEffect(()=>{

// })

// export default function PostList() {
//   const [currentTab, setCurrentTab] = useState(tabs.find(tab => tab.current));
//   const data = useRecoilValue(UserPostList);

//   const { userId } = useParams();
//   const posts = data && data.filter((item) => item.userId == userId);

//   const description = data && data.filte()

//   const TabMenus = {
//     "전체":()=>
//     <div>{posts && posts.map((post, index) => (
//       <div key={index}>
//         <ul>
//           <li>
//             <Link to={`/postList/${post.userId}/${post.id}`}>{post.title} 전체 id : {post.id}, userid : {post.userId}</Link>
//           </li>
//         </ul>
//       </div>
//     ))}</div>,
//     "작성중":()=>
//     <div>{posts && posts.map((post, index) => (
//       <div key={index}>
//         <ul>
//           <li>
//             <Link to={`/postList/${post.userId}/${post.id}`}>{post.title} 작성중 id : {post.id}, userid : {post.userId}</Link>
//           </li>
//         </ul>
//       </div>
//     ))}</div>,
//     "완료":()=>
//     <div>{posts && posts.map((post, index) => (
//       <div key={index}>
//         <ul>
//           <li>
//             <Link to={`/postList/${post.userId}/${post.id}`}>{post.title} 완료 id : {post.id}, userid : {post.userId}</Link>
//           </li>
//         </ul>
//       </div>
//     ))}</div>
//   };

  // const TabMenu = TabMenus[currentTab.name];

  // console.log({userId})


  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function Example() {
    // const [currentTab, setCurrentTab] = useState(0);
    // const { userId } = useParams();
    return (
      <div className="border-b border-gray-200 pb-5 sm:pb-0">
        <h3 className="text-base font-semibold leading-6 text-gray-900">Candidates</h3>
        <div className="mt-3 sm:mt-4">
          <div className="sm:hidden">
            <label htmlFor="current-tab" className="sr-only">
              Select a tab
            </label>
            <select
              id="current-tab"
              name="current-tab"
              className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              defaultValue={tabs.find((tab) => tab.current).name}
            >
              {tabs.map((tab) => (
                <option key={tab.name}>{tab.name}</option>
              ))}
            </select>
          </div>
          <div className="hidden sm:block">
            <nav className="-mb-px flex space-x-8">
              {tabs.map((tab) => (
                <a
                  key={tab.name}
                  href={tab.href}
                  className={classNames(
                    tab.current
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                    'whitespace-nowrap border-b-2 px-1 pb-4 text-sm font-medium'
                  )}
                  aria-current={tab.current ? 'page' : undefined}
                >
                  {tab.name}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    )
}