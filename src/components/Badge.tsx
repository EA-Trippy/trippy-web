import Image from "next/image";

interface BadgePropType {
  badge: BadgeType;
}

interface BadgeType {
  image: string;
  region: string;
}

const Badge = (props: BadgePropType) => {
  const { badge } = props;

  return (
    <div className="relative w-[80px] h-[80px] flex flex-col items-center justify-center">
      <Image
        src={badge.image}
        className="w-[80px] h-[80px] rounded-full"
        alt="BadgeImage"
        width={80}
        height={80}
        style={{ objectFit: "cover" }}
      />
      <div className="absolute flex justify-center">{badge.region}</div>
    </div>
  );
};

export default Badge;
