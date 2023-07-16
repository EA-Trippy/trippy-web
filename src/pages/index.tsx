import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Header title={"trippy"}></Header>
      <div className="relative w-screen h-screen bg-white pt-[0px] flex items-center">
        <h1>Home 페이지입니다.</h1>
      </div>
    </>
  );
}
