import clientPromise from "@/lib/mongodb";


export async function POST(request) {
  const body = await request.json();
  console.log(body)

  const client = await clientPromise;
  const db = client.db("linktree");
  const collection = db.collection("links");
  const doc = await collection.findOne({handle:body.handle });
  if(doc){
    return Response.json({ success:false, message: 'Handle already exists' })
  }
  const result = await collection.insertOne(body);
  console.log(result);

  return Response.json({ success:true, message: 'Link added successfully' })
}