import Header from '@/components/Header';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import TopPostList from '@/components/TopPostList';
import NewPostList from '@/components/NewPostList';
import Pencil from '../../public/icons/pencil.svg';

const TOP_POSTS = [
  {
    image: '/images/test-image.jpeg',
    title: '일본 간사이 지역 여행 Day1',
    body: '6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 ',
    date: '2023년 7월 1일',
    profile_image: '/images/test-image.jpeg',
    nickname: '두재정',
    likedCount: 10,
    commentCount: 500,
  },
  {
    image: '/images/test-image.jpeg',
    title: '일본 간사이 지역 여행 Day1',
    body: '6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 ',
    date: '2023년 7월 1일',
    profile_image: '/images/test-image.jpeg',
    nickname: '두재정',
    likedCount: 10,
    commentCount: 500,
  },
  {
    image: '/images/test-image.jpeg',
    title: '일본 간사이 지역 여행 Day1',
    body: '6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 ',
    date: '2023년 7월 1일',
    profile_image: '/images/test-image.jpeg',
    nickname: '두재정',
    likedCount: 10,
    commentCount: 500,
  },
];

const NEW_POSTS = [
  {
    image: '/images/test-image.jpeg',
    title: '일본 간사이 지역 여행 Day1',
    body: '6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 ',
    date: '1일 전',
    profile_image: '/images/test-image.jpeg',
    nickname: '두재정',
    blogName: '두재정의 작은 공간',
    tags: ['일본', '오사카', '교토', '나라'],
    likedCount: 10,
    commentCount: 500,
  },
  {
    image: '/images/test-image.jpeg',
    title: '일본 간사이 지역 여행 Day1',
    body: '6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 ',
    date: '1일전',
    profile_image: '/images/test-image.jpeg',
    nickname: '두재정',
    blogName: '두재정의 작은 공간',
    tags: ['일본', '오사카', '후쿠오카', '나라'],
    likedCount: 10,
    commentCount: 500,
  },
  {
    image: '/images/test-image.jpeg',
    title: '일본 간사이 지역 여행 Day1',
    body: '6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 6박 7일 일본여행 ',
    date: '1일전',
    profile_image: '/images/test-image.jpeg',
    nickname: '두재정',
    blogName: '두재정의 작은 공간',
    tags: ['일본', '나라', '오사카'],
    likedCount: 10,
    commentCount: 500,
  },
];

export default function Home() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imageRef.current) {
      const boxWidth = imageRef.current.parentElement?.offsetWidth;
      if (boxWidth) {
        imageRef.current.style.width = `${boxWidth}px`;
      }
    }
  }, []);

  return (
    <>
      <div className="relative w-screen min-h-screen bg-white pb-10">
        <Header title={'trippy'}></Header>
        <div className="mx-20">
          <div className="mx-10">
            <div className="flex items-center justify-between">
              <div className="text-p100 font-bold mt-5 mb-5">
                실시간 인기 포스트
              </div>
              <div>
                <Link href="/write">
                  <div className="w-20 h-8 bg-p200 flex items-center justify-center rounded-md p-1">
                    <Pencil />
                    <p className="text-white text-subtitle3 ml-2">글 쓰기</p>
                  </div>
                </Link>
              </div>
            </div>

            <TopPostList data={TOP_POSTS} />

            <p className="text-p100 mb-5 font-bold">최신 포스트</p>
            <hr className="border border-[#F5F5F5]" />

            <NewPostList data={NEW_POSTS} />
          </div>
        </div>
      </div>
    </>
  );
}
