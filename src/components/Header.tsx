import { useState } from "react";
import { useRouter } from "next/router";
import Logo from "@/public/images/icons/logo.svg";
import Search from "@/public/images/icons/search.svg";
import Alarm from "@/public/images/icons/alarm.svg";
import Profile from "@/public/images/icons/profile.svg";
import Link from "next/link";

export interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const { title } = props;
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const router = useRouter();

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
      <div className="relative mx-20">
        <div className="flex items-center justify-between">
          <div className="ml-10 mt-7 mb-7">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="flex items-center space-x-10 mr-10 mt-7 mb-7">
            <Search />
            <Alarm />
            <div className="relative">
              <Profile onClick={handleProfileClick} className="cursor-pointer" />
              {isProfileOpen && (
                <div className="absolute mt-7 right-0 w-40 py-2 bg-white border border-gray-200 shadow z-10">
                  <ul>
                    <li>
                      <Link href="/">
                        <p className="text-black text-8px mt-2 mb-7 ml-5">내 정보</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <p className="text-black text-8px mb-7 ml-5">설정</p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/">
                        <p className="text-black text-8px mb-2 ml-5">로그아웃</p>
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="z-20"></div>
        <hr className="border border-[#F5F5F5] mx-10"/>
      </div>
  );
}
