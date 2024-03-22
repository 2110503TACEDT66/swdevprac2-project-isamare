import Banner from "@/components/Banner";
import ContentCowork from "@/components/ContentCowork";
import UserMenu from "@/components/UserMenu";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Banner/>
      <ContentCowork/>
      {/* <UserMenu/> */}
    </main>
  )
}
