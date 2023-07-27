import Header from "@/components/Header";
import {useEffect, useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import Ticket from "@/components/Ticket";
import Dashboard from "@/components/Dashboard";
import Badge from "@/components/Badge";
import Bookmark from "@/components/Bookmark";

const DashBoard = {
  image: "/images/test-image.jpeg",
  username: "두세라핌",
  blogname: "조세라핌",
};

const BookmarkData = [
  {
    image: "/images/test-image.jpeg",
    text: "bookmark1",
  },
  {
    image: "/images/test-image.jpeg",
    text: "bookmark2",
  },
  {
    image: "/images/test-image.jpeg",
    text: "bookmark3",
  },
  {
    image: "/images/test-image.jpeg",
    text: "bookmark4",
  },
  {
    image: "/images/test-image.jpeg",
    text: "bookmark5",
  },
  {
    image: "/images/test-image.jpeg",
    text: "bookmark6",
  },
];

const BadgeData = [
  {
    image: "/images/test-image.jpeg",
    region: "sex1",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex2",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex3",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex4",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex5",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex6",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex7",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex8",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex9",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex10",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex11",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex12",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex13",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex14",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex15",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex16",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex17",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex18",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex19",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex20",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex21",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex22",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex23",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex24",
  },
  {
    image: "/images/test-image.jpeg",
    region: "sex25",
  },
];

const TicketData = [
  {
    qrcode: "/images/test-image.jpeg",
    qrnumber: "1",
  },
  {
    qrcode: "/images/test-image.jpeg",
    qrnumber: "2",
  },
  {
    qrcode: "/images/test-image.jpeg",
    qrnumber: "3",
  },
  {
    qrcode: "/images/test-image.jpeg",
    qrnumber: "4",
  },
];

export default function Mypage() {
  return (
    <>
      <div className="relative w-screen min-h-screen bg-white pb-10">
        <Header title={"trippy"}></Header>
        <div className="mx-20">
          <div className="mx-10 mt-[70px] h-[725px] flex flex-row">
            <div className="w-1/2 h-full flex flex-col">
              <div className="text-h3 mb-[43px]">userID's Dashboard</div>
              <Dashboard dashboard={DashBoard} />

              <div className="text-h3 mt-[40px] mb-[43px]">userID's Bookmark</div>
              <div className="w-[540px] h-[335px] grid grid-cols-3 gap-[55px] shadow-md">
                {BookmarkData.map((bookmark, index) => {
                  return <Bookmark key={index} bookmark={bookmark} />;
                })}
              </div>
            </div>
            <div className="w-1/2 flex flex-col">
              <div className="text-h3 mb-[43px]">userID's Badge</div>
              <div className="w-[540px] h-[560px] grid grid-cols-5 gap-[35px]">
                {BadgeData.map((badge, index) => {
                  return <Badge key={index} badge={badge} />;
                })}
              </div>
              <div className="w-[540px] h-[50px] mt-[40px] flex items-center justify-center shadow-md text-p100 text-subtitle1">
                더 많은 여행을 떠나고 더 많은 뱃지를 수집해보세요!
              </div>
            </div>
          </div>
          <div className="mx-10 mt-[40px] h-[585px]">
            <div className="text-h3 mt-[40px] mb-[58px]">userID's Ticket</div>
            <div className="w-full h-full grid grid-cols-2">
              {TicketData.map((ticket, index) => {
                return <Ticket key={index} ticket={ticket} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
