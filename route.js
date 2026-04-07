import { NextResponse } from "next/server"
import { collection, addDoc } from "firebase/firestore"
import { db } from "../../../lib/firebase"

export async function POST(req){

  const { email } = await req.json()

  if(!email){
    return NextResponse.json({ error:"Email required" },{ status:400 })
  }

  await addDoc(collection(db,"waitlist"),{
    email,
    createdAt:new Date()
  })

  return NextResponse.json({
    message:"You're on the TripMates waitlist 🎉"
  })
}