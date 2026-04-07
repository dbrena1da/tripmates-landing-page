import ReferralForm from "./components/ReferralForm"

export default function Page({ searchParams }) {

  const refCode =
    typeof searchParams?.ref === "string"
      ? searchParams.ref
      : null

  return (
    <main style={{ padding:"40px", maxWidth:"900px", margin:"auto" }}>

      <h1 style={{textAlign:"center"}}>TripMates ✈️</h1>

      <p style={{textAlign:"center"}}>
        Find compatible travel partners based on destination, dates, budget, and travel style.
      </p>

      <ReferralForm refCode={refCode} />

    </main>
  )
}