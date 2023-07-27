import {useState, useEffect, useRef} from "react";
import {useRouter} from "next/router";
import Logo from "../../public/icons/logo.svg";
import Search from "../../public/icons/search.svg";
import Alarm from "../../public/icons/alarm.svg";
import Profile from "../../public/icons/profile.svg";
import Link from "next/link";

export interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const {title} = props;
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const router = useRouter();

  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleProfileClick = () => {
    setIsProfileOpen(!isProfileOpen);
  };
  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsProfileOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="relative mx-20">
      <div className="flex items-center justify-between">
        <div className="ml-10 mt-7 mb-7">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="flex items-center space-x-10 mr-10 mt-7 mb-7">
          <Link href="/search">
            <Search />
          </Link>
          <Alarm />
          <div className="relative" ref={dropdownRef}>
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
      <hr className="border border-[#F5F5F5] mx-10" />
    </div>
  );
}
