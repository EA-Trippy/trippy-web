import Header from "@/components/Header";
import {useEffect, useRef} from "react";
import Image from "next/image";
import Link from "next/link";
import Ticket from "@/components/Ticket";
import Dashboard from "@/components/Dashboard";
import Badge from "@/components/Badge";

const DashBoard = {
  image: "/images/test-image.jpeg",
  username: "두세라핌",
  blogname: "조세라핌",
};

const BadgeData = [
  {
    image: "/images/test-image.jpeg",
    region: "Badge1",
  },
  {
    image: "/images/test-image.jpeg",
    region: "Badge2",
  },
  {
    image: "/images/test-image.jpeg",
    region: "Badge3",
  },
  {
    image: "/images/test-image.jpeg",
    region: "Badge4",
  },
  {
    image: "/images/test-image.jpeg",
    region: "Badge5",
  },
  {
    image: "/images/test-image.jpeg",
    region: "Badge6",
  },
  {
    image: "/images/test-image.jpeg",
    region: "Badge7",
  },
  {
    image: "/images/test-image.jpeg",
    region: "Badge8",
  },
  {
    image: "/images/test-image.jpeg",
    region: "Badge9",
  },
  {
    image: "/images/test-image.jpeg",
    region: "Badge10",
  },
  {
    image: "/images/test-image.jpeg",
    region: "Badge11",
  },
  {
    image: "/images/test-image.jpeg",
    region: "Badge12",
  },
  {
    image: "/images/test-image.jpeg",
    region: "Badge13",
  },
  {
    image: "/images/test-image.jpeg",
    region: "Badge14",
  },
  {
    image: "/images/test-image.jpeg",
    region: "Badge15",
  },
];

const TicketData = [
  {
    qrcode: "/images/test-image.jpeg",
    qrnumber: "11",
  },
  {
    qrcode: "/images/test-image.jpeg",
    qrnumber: "12",
  },
  {
    qrcode: "/images/test-image.jpeg",
    qrnumber: "13",
  },
  {
    qrcode: "/images/test-image.jpeg",
    qrnumber: "14",
  },
];

export default function Profile() {
  return (
    <>
      <div className="relative w-screen min-h-screen bg-white pb-10">
        <Header title={"trippy"}></Header>
        <div className="mx-20">
          <div className="mx-10 mt-[70px] flex flex-row">
            <div className="w-1/2 flex flex-col">
              <div className="text-h3 mb-[43px]">{"userID's Dashboard"}</div>
              <Dashboard dashboard={DashBoard} />

              <div className="text-h3 mt-10 mb-[43px]">{"userID's Badge"}</div>
              <div className="w-[540px] h-[320px] grid grid-cols-5 gap-[35px]">
                {BadgeData.map((badge, index) => {
                  return <Badge key={index} badge={badge} />;
                })}
              </div>
            </div>
            <div className="w-1/2 flex flex-col">
              <div className="text-h3 mb-[58px]">{"userID's Ticket"}</div>
              <div className="flex flex-col gap-[50px]">
                {TicketData.map((ticket, index) => {
                  return <Ticket key={index} ticket={ticket} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
