import { useState, useEffect, useRef } from "react";
import { useSession, signOut } from "next-auth/react";
import Logo from "../../public/icons/logo.svg";
import Search from "../../public/icons/search.svg";
import Alarm from "../../public/icons/alarm.svg";
import Profile from "../../public/icons/profile.svg";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import AlarmList from "@/components/AlarmList";

export interface HeaderProps {
  title: string;
}

export default function Header(props: HeaderProps) {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isAlarmOpen, setIsAlarmOpen] = useState(false);
  const [userImage, setUserImage] = useState("");
  const [userId, setUserId] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);
  const alarmDropdownRef = useRef<HTMLDivElement>(null);
  const [alarmList, setAlarmList] = useState([]);

  const handleProfileClick = async () => {
    setIsProfileOpen(!isProfileOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsProfileOpen(false);
    }
    if (
      alarmDropdownRef.current &&
      !alarmDropdownRef.current.contains(event.target as Node)
    ) {
      setIsAlarmOpen(false);
    }
  };

  const handleModalClick: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation(); // 이벤트 전파 중단
  };

  const alarmshow = async () => {
    setIsAlarmOpen(!isAlarmOpen);
    const AlarmList = async () => {
      try {
        const notifications = await axios.get(`/api/notifications/${userId}`);
        setAlarmList(notifications.data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    AlarmList();
  };

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/currentUser");
        setUserImage(response.data.image);
        setUserId(response.data.id);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    fetchUser();

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const { data: session } = useSession();

  if (session) {
    return (
      <div className="relative mx-20">
        <div className="flex items-center justify-between">
          <div className="ml-10 mt-7 mb-7">
            <Link href="/">
              <Logo />
            </Link>
          </div>
          <div className="flex items-center space-x-10 mr-10 mt-7 mb-7 relative">
            <Link href="/search">
              <Search />
            </Link>
            <div onClick={handleModalClick} ref={alarmDropdownRef}>
              <div onClick={alarmshow}>
                <Alarm />
              </div>
              {isAlarmOpen && <AlarmList data={alarmList} />}
            </div>
            <div className="relative" ref={dropdownRef}>
              {userImage ? (
                <Image
                  src={userImage}
                  alt="Profile"
                  width={48}
                  height={48}
                  onClick={handleProfileClick}
                  className="w-12 h-12 cursor-pointer rounded-full"
                  style={{ objectFit: "cover" }}
                />
              ) : (
                <Profile
                  width={48}
                  height={48}
                  onClick={handleProfileClick}
                  className="w-12 h-12 cursor-pointer"
                />
              )}
              {isProfileOpen && (
                <div className="absolute mt-7 right-0 w-40 py-2 bg-white border border-gray-200 shadow z-10">
                  <ul>
                    <li>
                      <Link href="/mypage">
                        <p className="text-black text-8px mt-2 mb-7 ml-5">
                          내 정보
                        </p>
                      </Link>
                    </li>
                    <li>
                      <Link href="/setting">
                        <p className="text-black text-8px mb-7 ml-5">설정</p>
                      </Link>
                    </li>
                    <li>
                      <button onClick={() => signOut()}>
                        <p className="text-black text-8px mb-2 ml-5">
                          로그아웃
                        </p>
                      </button>
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
  return (
    <div className="relative mx-20">
      <div className="flex items-center justify-between">
        <div className="ml-10 mt-7 mb-7">
          <Link href="/">
            <Logo />
          </Link>
        </div>
        <div className="flex items-center space-x-5 mr-10 mt-7 mb-7">
          <Link href="/search">
            <Search />
          </Link>
          <Link href="/login">
            <div className="w-24 h-9 bg-p200 rounded-lg text-t100 text-subtitle1 flex items-center justify-center px-4">
              <p className="mt-1">로그인</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="z-20"></div>
      <hr className="border border-[#F5F5F5] mx-10" />
    </div>
  );
}
