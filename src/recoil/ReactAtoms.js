import {atom} from "recoil";
export const UseUserList = atom({
    key : "UseUserList",
    default : []
})
export const UserPostList = atom({
    key : "UserPostList",
    default : []
})
export const UserCommentList = atom({
    key: 'UserCommentList',
    default: {},
  });