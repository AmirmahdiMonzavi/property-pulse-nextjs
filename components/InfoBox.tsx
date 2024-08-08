import Link from "next/link";

const InfoBox = ({
  children,
  heading,
  backgroundColor,
  textColor,
  linkInfo,
}: {
  children: React.ReactNode;
  heading: string;
  backgroundColor: string;
  textColor: string;
  linkInfo: {
    text: string;
    link: string;
    backgroundColor: string;
  };
}) => {
  return (
    <div
      className={`${textColor} ${backgroundColor}  p-6 rounded-lg shadow-md`}
    >
      <h2 className="text-2xl font-bold">{heading}</h2>
      <p className="mt-2 mb-4">{children}</p>
      <Link
        href={linkInfo.link}
        className={`${linkInfo.backgroundColor} inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700`}
      >
        {linkInfo.text}
      </Link>
    </div>
  );
};

export default InfoBox;
