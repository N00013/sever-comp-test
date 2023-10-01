import Image from "next/image"
import Button from "./button"

export default async function Home() {
  const tickers = ["MSFT", "IBM"]
  const randomTicker = tickers[Math.floor(Math.random() * tickers.length)]

  const res = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${randomTicker}&outputsize=full&apikey=demo`,
    { cache: "no-store" }
  )
  const data = await res.json()

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>Some content</div>
      <Button />
      <pre className="bg-gray-100 p-4 rounded-lg mt-6">
        {JSON.stringify(data, null, 2)}
      </pre>
    </main>
  )
}
