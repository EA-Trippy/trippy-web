import Header from "@/components/Header";
import Head from "next/head";
import Link from "next/link";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import React, { useEffect, useRef, useState } from "react";
import Airplane from "../../public/icons/airplane.svg";
import Arrow from "../../public/icons/arrow.svg";
import Calender from "../../public/icons/calender.svg";
import People from "../../public/icons/people.svg";
import Photoadd from "../../public/icons/photoadd.svg";
import dynamic from "next/dynamic";

const Editor = dynamic(() => import("@/components/Editor"), { ssr: false });

// const Viewer = styled.div`
//   width: calc(50% - 40px);
//   height: 400px;
//   padding: 20px;
//   margin-top: 20px;
//   border: 2px solid gray;
// `;

const commonCities = ["인천", "제주"];

const CityOptions = ({
  cities,
  onSelect,
}: {
  cities: string[];
  onSelect: (city: string) => void;
}) => {
  const handleOptionClick = (event: React.MouseEvent, city: string) => {
    event.stopPropagation();
    onSelect(city);
  };

  return (
    <div className="absolute top-0 left-0 w-[200px] bg-white p-4 border shadow rounded-2xl">
      {cities.map((city) => (
        <div
          key={city}
          className="cursor-pointer hover:text-primary"
          onClick={(event) => handleOptionClick(event, city)}
        >
          {city}
        </div>
      ))}
    </div>
  );
};

const CustomDatePickerInput = ({
  onClick,
  value,
}: {
  onClick: any;
  value: string;
}) => (
  <div className="w-full">
    <button
      type="button"
      onClick={onClick}
      className="w-full bg-[#F5F7F8] rounded-lg p-3 text-subtitle3 text-t300 outline-none flex items-center"
    >
      <Calender />
      <div className="ml-1 pt-1">{value || "선택"}</div>
    </button>
  </div>
);

const Write = () => {
  const DeparturedropdownRef = useRef<HTMLDivElement>(null);
  const DestinationdropdownRef = useRef<HTMLDivElement>(null);
  const PeopledropdownRef = useRef<HTMLDivElement>(null);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [finalDate, setFinalDate] = useState<Date | null>(null);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const datePickerDateFormat = "MM.dd.EEE";

  const [showDepartureOptions, setShowDepartureOptions] =
    useState<boolean>(false);

  const [showDestinationOptions, setShowDestinationOptions] =
    useState<boolean>(false);

  const [selectedDeparture, setSelectedDeparture] = useState<string>("");
  const [selectedDestination, setSelectedDestination] = useState<string>("");

  const handleDepartureClick = () => {
    setShowDepartureOptions((prevState) => !prevState);
  };

  const handleDestinationClick = () => {
    setShowDestinationOptions((prevState) => !prevState);
  };

  const handleDepartureSelect = (departure: string) => {
    setSelectedDeparture(departure);
    setShowDepartureOptions(false);
  };

  const handleDestinationSelect = (destination: string) => {
    setSelectedDestination(destination);
    setShowDestinationOptions(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (
        DeparturedropdownRef.current &&
        !DeparturedropdownRef.current.contains(event.target as Node)
      ) {
        setShowDepartureOptions(false);
      }

      if (
        DestinationdropdownRef.current &&
        !DestinationdropdownRef.current.contains(event.target as Node)
      ) {
        setShowDestinationOptions(false);
      }

      if (
        PeopledropdownRef.current &&
        !PeopledropdownRef.current.contains(event.target as Node)
      ) {
        setShowPeopleModal(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleUploadClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];

    if (selectedFile) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result;
        if (typeof result === "string") {
          setSelectedImage(result);
        }
      };
      reader.readAsDataURL(selectedFile);
    }
  };

  const [selectedPeople, setSelectedPeople] = useState<number>(1);
  const [showPeopleModal, setShowPeopleModal] = useState<boolean>(false);

  return (
    <>
      <Head>
        {/* 웹사이트의 탭 이름 설정 */}
        <title>글쓰기 페이지</title>
      </Head>
      <div className="relative w-screen min-h-screen bg-white pb-10">
        <Header title={"trippy"}></Header>
        <div className="mx-20">
          <div className="mx-10">
            {/* 글쓰기 페이지 헤더 */}
            <div className="min-w-full h-[200px] border shadow rounded-3xl p-5 mt-10 flex items-center">
              <div className="flex items-center justify-center w-[35%] mr-3">
                <div className="relative" ref={DeparturedropdownRef}>
                  {selectedDeparture || (
                    <>
                      <div
                        onClick={handleDepartureClick}
                        className="cursor-pointer"
                      >
                        <p className="text-h5 text-t500">KOR</p>
                        <div className="flex items-center justify-center">
                          <p className="text-subtitle2 text-t500">선택</p>
                          <Arrow />
                        </div>
                      </div>
                    </>
                  )}

                  {showDepartureOptions && (
                    <CityOptions
                      cities={commonCities}
                      onSelect={handleDepartureSelect}
                    />
                  )}
                </div>

                <div className="flex items-center justify-center mx-10">
                  <Airplane />
                </div>
                <div className="relative" ref={DestinationdropdownRef}>
                  {selectedDestination || (
                    <>
                      <div
                        onClick={handleDestinationClick}
                        className="cursor-pointer"
                      >
                        <p className="text-h5 text-t500">도착</p>
                        <div className="flex items-center justify-center">
                          <p className="text-subtitle2 text-t500">선택</p>
                          <Arrow />
                        </div>
                      </div>
                    </>
                  )}

                  {showDestinationOptions && (
                    <CityOptions
                      cities={commonCities}
                      onSelect={handleDestinationSelect}
                    />
                  )}
                </div>
              </div>
              <div className="w-[30%] ml-5 relative">
                <div className="flex">
                  <div className="w-1/2 mr-0.5">
                    <DatePicker
                      selected={startDate}
                      onChange={(date) => setStartDate(date)}
                      customInput={
                        <CustomDatePickerInput onClick={undefined} value={""} />
                      }
                      dateFormat={datePickerDateFormat}
                      wrapperClassName="w-full"
                    />
                  </div>

                  <div className="w-1/2">
                    <DatePicker
                      selected={finalDate}
                      onChange={(date) => setFinalDate(date)}
                      dateFormat={datePickerDateFormat}
                      customInput={
                        <CustomDatePickerInput onClick={undefined} value={""} />
                      }
                      wrapperClassName="w-full"
                    />
                  </div>
                </div>

                <div
                  className="bg-[#F5F7F8] p-4 rounded-2xl flex items-center mt-3 cursor-pointer"
                  onClick={() => setShowPeopleModal(true)}
                >
                  <People />
                  <div className="text-subtitle3 text-t300 ml-5 mt-1">
                    {selectedPeople}명
                  </div>
                </div>
                {showPeopleModal && (
                  <div
                    className="absolute top-50 left-0 flex items-center justify-center w-full"
                    ref={PeopledropdownRef}
                  >
                    <div className="speech-bubble px-10 rounded-lg mt-2">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="">인원</p>
                        </div>
                        <div className="flex items-center">
                          <button
                            className="p-2 text-t100 mr-4 text-h1"
                            onClick={() => {
                              if (selectedPeople > 1) {
                                setSelectedPeople(selectedPeople - 1);
                              }
                            }}
                          >
                            -
                          </button>
                          <div className="text-xl">{selectedPeople}명</div>
                          <button
                            className="p-2 text-p100 ml-4 text-h3"
                            onClick={() => {
                              if (selectedPeople < 9) {
                                setSelectedPeople(selectedPeople + 1);
                              }
                            }}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="w-[35%]">
                <div className="flex items-center justify-center mb-3 ml-5">
                  <div
                    className="flex items-center justify-center w-[128px] h-[128px] border border-t200 border-dashed cursor-pointer bg-t100 mt-5"
                    onClick={handleUploadClick}
                  >
                    {selectedImage ? (
                      // 이미지가 선택된 경우 이미지를 원 안에 표시합니다.
                      <div
                        className="w-full h-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${selectedImage})` }}
                      />
                    ) : (
                      // 이미지가 선택되지 않은 경우 기본 아이콘을 원 안에 표시합니다.
                      <Photoadd />
                    )}
                  </div>
                  <input
                    ref={fileInputRef}
                    className="hidden"
                    type="file"
                    onChange={handleFileChange}
                  />
                </div>
              </div>
            </div>
            {/* 글쓰기 페이지 에디터 */}
            <div className="min-w-full h-[1200px] border shadow rounded-3xl p-10 mt-10 mb-10">
              <input
                type="text"
                placeholder="제목"
                className="w-full placeholder:text-t300 placeholder:text-h6 text-t500 text-h6 outline-none border-b border-[#D9D9D9] mb-5"
              />
              <Editor />
            </div>
            <div className="mb-10 flex items-center justify-between">
              <Link href="/">
                <div className="bg-t200 rounded-full text-t100 text-subtitle1 px-4 py-2">
                  <p className="mt-1">돌아가기</p>
                </div>
              </Link>
              <Link href="/">
                <button
                  type="submit"
                  className="bg-p200 rounded-full text-t100 text-subtitle1 px-4 py-2"
                >
                  <p className="mt-1">게시글 작성</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Write;
