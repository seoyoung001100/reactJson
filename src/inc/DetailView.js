import React from 'react';
import { Link, useParams } from 'react-router-dom'; 
import { useNavigate } from 'react-router-dom';

function DetailView({data}){
    const {userId, id} = useParams();
    // console.log(id);
    // console.log(userId);

    //******props 대신 recoil을 사용 할 수도 있다. react전용 라이브러리 함수******
    const userArray = data && data.filter((prop) => prop.userId.toString() === userId);
    const item = userArray && userArray.filter((prop) => prop.id.toString() === id);
    const index = userArray && userArray.findIndex(prop => prop.id.toString() === id);

    const prev = userArray[index-1];
    const next = userArray[index+1];
    return(
        <div>
            {item && item.map((prop) => (
                <div key={prop.id}>
                    <p>User ID : {prop.userId}</p>
                    <p>Index : {prop.id}</p>
                    <p>Title : {prop.title}</p>
                </div>
            ))}
            {/* 다음 글로 이동, 글 제목과 같이 보여짐 */}
            {/* 이 페이지에서 새로고침하면 오류가 남... 그 전에는 잘 보여짐 */}
            {prev ? (<p><Link to={`/PostList/${prev.userId}/${prev.id}`}>이전 글 | {prev.title}</Link></p>) : (<p>이전 글이 없습니다.</p>)}
            {next ? (<p><Link to={`/PostList/${next.userId}/${next.id}`}>다음 글 | {next.title}</Link></p>) : (<p>다음 글이 없습니다</p>)}

        </div>
    );
}

export default DetailView;