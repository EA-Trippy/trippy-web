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
];

const TicketData = [
  {
    qrcode: "/images/test-image.jpeg",
    qrnumber: "12",
  },
  {
    qrcode: "/images/test-image.jpeg",
    qrnumber: "12",
  },
  {
    qrcode: "/images/test-image.jpeg",
    qrnumber: "12",
  },
  {
    qrcode: "/images/test-image.jpeg",
    qrnumber: "12",
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
