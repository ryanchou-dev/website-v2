import { NextResponse } from "next/server";
export async function GET() {
  const res = await fetch(
    "http://api.weatherapi.com/v1/current.json?" +
      "key=" +
      process.env.NEXT_PUBLIC_WEATHER +
      "&q=SF",
    {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    }
  );

  const data = await res.json();
  return new NextResponse(JSON.stringify(data));
}
