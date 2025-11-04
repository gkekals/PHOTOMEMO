import React from 'react'
import { Link } from 'react-router-dom'
import "./style/Landing.scss"

const Landing = () => {
    return (
        <section className="landing">
            <div className="container">
                <div className="landing-hero">
                    <h1>PlayLog</h1>
                    <p className="landing-sub">
                        앨범 커버 이미지 + 감상 메모. 곡명·아티스트 , 관리자 검수와 인기 감상글 추천까지.
                    </p>
                    <Link to="/admin/login" className="btn primary">시작하기</Link>
                </div>

                <ul className="landing-features">
                    <li>
                        <h3>감상 기록</h3>
                        <p>앨범 커버 이미지를 올리고 음악 감상 메모를 남길 수 있습니다.</p>
                    </li>
                    <li>
                        <h3>검색·필터</h3>
                        <p>곡명, 아티스트, 상황별로 손쉽게 감상글을 찾을 수 있습니다.</p>
                    </li>
                    <li>
                        <h3>관리 및 추천</h3>
                        <p>관리자가 감상글을 검수하고, 인기 감상글을 추천 또는 저작권/불건전 내용을 관리합니다.</p>
                    </li>
                </ul>
            </div>
        </section>
    )
}

export default Landing
