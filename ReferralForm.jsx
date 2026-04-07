'use client'

import { useState } from "react"

export default function ReferralForm({ refCode }) {

  const [email,setEmail] = useState("")
  const [status,setStatus] = useState("")

  async function submitEmail(e){

    e.preventDefault()

    const res = await fetch("/api/waitlist",{
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body:JSON.stringify({ email, ref: refCode })
    })

    const data = await res.json()

    if(res.ok){
      setStatus(data.message)
      setEmail("")
    }else{
      setStatus(data.error)
    }
  }

  return (
    <>
      <form onSubmit={submitEmail}>
        <input required type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <button>Join Early Access Waitlist</button>
      </form>

      <p>{status}</p>
    </>
  )
}