import Card from "./Card";
import Link from "next/link";
import { CoworkingItem, CoworkingJson } from "../../interface";

export default async function CoworkingCatalog({
  coworkingsJson,
}: {
  coworkingsJson: Promise<CoworkingJson>;
}) {
  const coworkingsJsonReady = await coworkingsJson;

  return (
    <>
      Explore {coworkingsJsonReady.count} models in our Coworking
      <div
        style={{
          margin: "10px",
          display: "flex",
          flexDirection: "row",
          alignContent: "space-around",
          justifyContent: "space-around",
          flexWrap: "wrap",
          padding: "8px",
        }}
      >
        {coworkingsJsonReady.data.map((CoworkingItem: CoworkingItem,index:number) => (
          <Link
            href={`/coworking/${CoworkingItem.id}`}
            className="w-[100%] sm:w-[50%] md:w-[30%] lg:w-[20%] p-2 sm:p-4 md:p-4 lg:p-7"
            key={index}
          >
            <Card
              coworkingName={CoworkingItem.name}
              imgSrc={CoworkingItem.picture}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
