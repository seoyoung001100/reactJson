
import '../App.css';
import axios from "axios";
import { Routes, Route } from 'react-router-dom';

import UserList from "./UserList";
import PostList from "./PostList";
import DetailView from "./DetailView";
import CommentList from './CommentList';
import Header from "./Header";
import React, { useEffect, useState } from 'react';


//axios를 통해서 데이터를 받아옴
function App() {
  const [data, setData] = useState(null);
  const [userdata, setUserdata] = useState(null);
  const [comment, setComment] = useState(null);

  useEffect(() => {
    // async()는 함수가 들어있는 라이브러리
    // async의 경우, try와 catch 문으로 에러를 감지한다
    const fetchState = async() =>{
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos');
        setData(response.data); 
  
        console.log(response.data); 
      } 
      catch (error) {
        console.error('Error', error);
      }
    };
    const userList = async() =>{
      try {
        const userData = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUserdata(userData.data); 
  
        console.log(userData.data); 
      } 
      catch (error) {
        console.error('Error', error);
      }
    };
    const userComment = async() =>{
      try {
        const comment = await axios.get('https://jsonplaceholder.typicode.com/comments?postId=1');
        setComment(comment.data); 
  
        console.log(comment.data); 
      } 
      catch (error) {
        console.error('Error', error);
      }
    };
    fetchState();
    userList();
    userComment();

 
  
  }, []);
  if (!data || !userdata || !comment) {
    return <div>Loading...</div>;
  } //새로 고침시, 로딩
  
  //Router 페이지
  return (
    <div>
    <Header></Header>
      <Routes>
        <Route path="/" element={< UserList data={userdata} />}/>
        {/* <Route path="/PostList" element={< PostList data={data} />}></Route> */}
        <Route path="/PostList/:userId" element={<PostList data={data}/>}></Route> {/* :userId를 넣으면 해당 유저 페이지에서 글이 나옴 */}
        <Route path="/PostList" element={< DetailView data={data} />}></Route>
        {/* <Route path="/DetailView" element={<DetailView data={data}/>}></Route> */}
        <Route path="/PostList" element={< CommentList data={comment} />}/>
      </Routes> {/* :userId, :id를 사용하려면 useEffect를 선언? 해줘야한다. (8번줄) */}
    </div>
  );
}

export default App;