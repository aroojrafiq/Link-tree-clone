import clientPromise from "@/lib/mongodb";
import { notFound } from "next/navigation";
import Link from "next/link";
export default  async function Page({ params }) {
  const { handle } = params;
  const client = await clientPromise;
  const db = client.db("bittree");
  const collection = db.collection("links");

  // Find by handle
  const item = await collection.findOne({ handle });

  if (!item) {
    return notFound();
  }

  return (
    <div className="flex min-h-screen bg-purple-400 justify-center items-start py-10">
      <div className="photo flex justify-center flex-col items-center gap-4"> 
        <img src={item.pic} alt={item.handle} className="rounded-full w-24 h-24"/>
        <span className="font-bold text-xl">@{item.handle}</span>
        <span className="desc w-80 text-center">{item.desc}</span>
        <div className="links">
          {item.links.map((linkItem, index) => (
            <Link key={index} href={linkItem.link}>
              <div className="bg-purple-100 py-4 shadow-lg px-2 min-w-96 flex justify-center rounded-md my-3 hover:bg-purple-200 transition">
                {linkItem.linktext}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
