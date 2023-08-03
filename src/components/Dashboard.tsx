import Image from "next/image";

interface DashBoardPropType {
  dashboard: DashBoardType;
}

interface DashBoardType {
  image: string;
  username: string;
  blogname: string;
}

// hi
const Dashboard = (props: DashBoardPropType) => {
  const {dashboard} = props;

  return (
    <div className="w-[540px] h-[200px] flex flex-row rounded shadow-md ">
      <div className="w-[180px] h-full flex items-center justify-center">
        <Image
          src={dashboard.image}
          className="w-[120px] h-[120px] rounded-full"
          alt="DashBoardImage"
          width={120}
          height={120}
          style={{objectFit: "cover"}}
        />
      </div>
      <div className="flex flex-col ml-[10px] justify-center ">
        <div className="mb-[18px]">
          <div className="text-subtitle4 text-p100 ">Username</div>
          <div className="text-body1 ">{dashboard.username}</div>
        </div>
        <div className="mt-[18px]">
          <div className="text-subtitle4 text-p100">Blogname</div>
          <div className="text-body1">{dashboard.blogname}</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
