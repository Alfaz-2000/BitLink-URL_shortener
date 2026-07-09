import clientPromise from "@/lib/mongodb"
 
export async function POST(request) {

    const body = await request.json()
    console.log(body)
    const client = await clientPromise;
    const db = client.db("bitlinks")
    const collection = db.collection("url")

// check if URL exist
const doc = await collection.findOne({shorturl:body.shorturl})
if(doc){
      return Response.json({ success: false,erorr:true, message: 'URL already taken' })

}

const result = await collection.insertOne({
    url:body.url,
    shorturl:body.shorturl,
})
  return Response.json({ success: true,erorr:false, message: 'URL generated' })
}