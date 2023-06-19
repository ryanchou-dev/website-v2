import { NextResponse } from "next/server";
export async function GET() {
  const res = await fetch(
    "https://api.weatherapi.com/v1/current.json?" +
      "key=" +
      process.env.NEXT_PUBLIC_WEATHER +
      "&q=SF",
    { cache: "no-store" }
  );

  const data = await res.json();
  console.log(data);
  return new NextResponse(JSON.stringify(data));
}
