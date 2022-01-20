import './Post.css'
import { MoreVert } from '@material-ui/icons'
import { AiFillLike, AiFillDislike } from 'react-icons/ai'
import { Users } from '../../dummyData'
import { useState } from 'react'

export default function Post({ post }) {
  const [like, setLike] = useState(post.like)

  const descrement = () => {
    setLike(like - 1)
  }
  const increment = () => {
    setLike(like + 1)
  }
  return (
    <div className="container">
      <div className="post">
        <div className="postWrapper">
          <div className="postTop">
            <div className="postTopLeft">
              <img
                className="postProfileImg"
                src={
                  Users.filter((u) => u.id === post?.userId)[0].profilePicture
                }
                alt=""
              />
              <span className="postUsername">
                {Users.filter((u) => u.id === post.userId)[0].username}
              </span>
              <span className="postDate">{post.date}</span>
            </div>
            <div className="postTopRight">
              <MoreVert />
            </div>
          </div>
          <div className="postCenter">
            <span className="postText">{post?.desc}</span>
            <img className="postImg" src={post.photo} alt="" />
          </div>
          <div className="postBottom">
            <div className="postBottomLeft">
              <AiFillLike
                color="#9a7b4f"
                className="likeIcon"
                alt=""
                onClick={increment}
              />
              <AiFillDislike
                color="#9a7b4f"
                className="likeIcon"
                alt=""
                onClick={descrement}
              />
              <span className="postLikeCounter"> {like}</span>
            </div>
            <div className="postBottomRight">
              <span className="postCommentText">{post.comment} comments</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
