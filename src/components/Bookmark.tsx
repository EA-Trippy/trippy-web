import Image from "next/image";

interface BookmarkPropType {
  bookmark: BookmarkType;
}

interface BookmarkType {
  image: string;
  text: string;
}

const Bookmark = (props: BookmarkPropType) => {
  const {bookmark} = props;

  return (
    <div className="w-[130px] h-[130px] flex flex-col items-center justify-center">
      <Image
        src={bookmark.image}
        className="w-[90px] h-[90px]"
        alt="BadgeImage"
        width={90}
        height={90}
        style={{objectFit: "cover"}}
      />
      <div className="flex justify-center mt-[12px]">{bookmark.text}</div>
    </div>
  );
};

export default Bookmark;
