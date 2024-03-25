import Banner from "@/components/Banner";
import ContentCowork from "@/components/ContentCowork";
import UserMenu from "@/components/UserMenu";
import Image from "next/image";
import Card from "@/components/Card";
import FootCowork from "@/components/FootCowork";

export default function Home() {
  return (
    <main>
      <Banner />
      <ContentCowork />
      {/* <UserMenu/> */}
      <FootCowork />
    </main>
  );
}
