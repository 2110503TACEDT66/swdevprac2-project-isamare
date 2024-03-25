import Link from "next/link";

export default function TopMenuItem({
  title,
  pageRef,
}: {
  title: string;
  pageRef: string;
}) {
  return (
    <Link
      href={pageRef}
      className="w-[100px] text-center font-extrabold mt-auto mb-auto font-sans-serif text-[13pt] text-black hover:text-[#5577CE]"
    >
      {title}
    </Link>
  );
}
