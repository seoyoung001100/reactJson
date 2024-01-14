import React from 'react';
import { Link, useParams } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Comment from './Comment';
import CommentList from './CommentList';


export default function Example({data}) {

    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const id = query.get('id');

  // id를 사용하여 데이터에서 해당 게시물을 찾음.
    const post = data.find(item => item.id === Number(id));

  // 현재 게시물의 인덱스를 찾음.
    const index = data.findIndex(item => item.id === Number(id));

  // 이전과 다음 게시물을 찾음.
    const prev = data[index - 1];
    const next = data[index + 1];
     
    return (
        <div className="border-b border-gray-200 pb-5">
          <h3 className="text-base font-semibold leading-6 text-gray-900">{post.title}</h3>
            <p className="mt-2 max-w-4xl text-sm text-gray-500">
                ID : {post.id}
            </p>
            <p className="mt-2 max-w-4xl text-sm text-gray-500">
                UserID: {post.userId}
            </p>
          
          {/* 이전과 다음 링크를 출력 */}
          {prev ? (<p><Link to={`/PostList?id=${prev.id}`}>이전 글 | {prev.title}</Link></p>) : (<p>이전 글이 없습니다.</p>)}
          {next ? (<p><Link to={`/PostList?id=${next.id}`}>다음 글 | {next.title}</Link></p>) : (<p>다음 글이 없습니다</p>)}
          <br></br>
          <Comment></Comment>
          <CommentList></CommentList>
        </div>
        
      );
  }