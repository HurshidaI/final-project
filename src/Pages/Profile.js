import React from 'react'
import './Profile.css'
import Feed from '../Components/feed/Feed'

export default function Profile() {
  return (
    <>
      <div className="profile">
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/person/12.png"
                alt=""
              />
              <img
                className="profileUserImg"
                src="assets/person/11.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Hurshida</h4>
              <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
          </div>
        </div>
      </div>
    </>
  )
}
