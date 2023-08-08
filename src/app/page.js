"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import DayBanner from "../../public/day.svg";
import NightBanner from "../../public/night.svg";
import cow from "../../public/moo.svg";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import * as AlertDialog from "@radix-ui/react-alert-dialog";
import actions from "../../public/boba.json";

export default function Home() {
  const [price, setPrice] = useState(4);
  const [temp, setTemp] = useState(0);
  const [day, setDay] = useState(1);
  const [debt, setDebt] = useState(0);

  useEffect(() => {
    async function getWeather() {
      const res = await fetch("/api/weather", { cache: "no-store" });
      const data = await res.json();
      setTemp(data.current.temp_f);
      setDay(data.current.is_day);
    }
    getWeather();

    const old =
      localStorage.getItem("debt") == null ? 0 : localStorage.getItem("debt");
    setDebt(old);
  }, []);

  return (
    <>
      <div className="flex justify-between min-h-screen flex-col">
        <div>
          <div className="mt-32 text-4xl font-bold   sm:text-5xl  text-boba">
            <Image
              src={cow}
              alt="mascot"
              className="hover:animate-spin inline-block sm:w-28 w-16 mr-4 -ml-2 "
            />

            <p className="inline-block">Ryan Chou.</p>
            {/* <br /> */}
            <div className="text-gray-800 font-semibold sm:ml-[120px] ml-[73px] -mt-2 sm:-mt-4 opacity-50 text-xl sm:text-2xl">
              a{" "}
              <Typewriter
                words={[
                  "competitive programmer",
                  "web developer",
                  "boba addict",
                  "problem solver",
                ]}
                typeSpeed={200}
                delaySpeed={2000}
                cursor={true}
                cursorBlinking={false}
              />
            </div>
          </div>

          <div
            className="text-lg sm:text-xl mt-12
	  "
          >
            hi! im ryan, a high school student. i love competitive programming
            and anything related to the web! you can find me practically
            anywhere by the handle:{" "}
            <span className=" font-semibold  rounded-sm">
              <span className="text-gray-700">(not)</span>cryan
            </span>
            .
          </div>
          <div
            className="text-lg sm:text-xl mt-4
	  "
          >
            i&apos;m a content manager at the{" "}
            <a
              href="https://joincpi.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-purple-700 decoration-2 hover:bg-purple-300 rounded-lg p-0.5 transition text-purple-700 hover:bg-opacity-30 "
            >
              Competitive Programming Initiative
            </a>
            , where i develop resources to promote competitive programming like
            the{" "}
            <a
              href="https://usaco.guide"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-2 hover:bg-gray-300 rounded-lg p-0.5 transition  hover:bg-opacity-50  decoration-gray-400"
            >
              USACO Guide
            </a>
            !
            <br />
          </div>
          <div className="text-lg sm:text-xl mt-12 ">
            for fun, i like{" "}
            <div className="group inline">
              <Link
                href={"/posts/boba-review"}
                className="underline decoration-2 hover:bg-gray-300 rounded-lg p-0.5 transition  hover:bg-opacity-50  decoration-gray-400"
              >
                drinking boba
              </Link>
              ,{" "}
            </div>
            <a
              href="https://open.spotify.com/user/emdaporqzr54wnhmstyorqus1?si=a10bc34a87ff4a8c"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-2 hover:bg-gray-300 rounded-lg p-0.5 transition  hover:bg-opacity-50  decoration-gray-400"
            >
              listening to music
            </a>
            , and coding up whatever&apos;s on my mind. you can learn more about
            me through my spontaneous and messy blog posts :D
          </div>
          <p className="text-4xl text-gray-600/40">~</p>
          <div className="pb-32">
            <div className="text-lg sm:text-xl mt-4 font-title">
              phew that was a <span className="italic">lot</span> of words, why
              don&apos;t you have a{" "}
              <AlertDialog.Root>
                <AlertDialog.Trigger asChild>
                  <a
                    onClick={() => {
                      const pp = Math.floor(Math.random() * (8 - 4 + 1)) + 4;
                      setPrice(pp);
                      localStorage.setItem(
                        "debt",
                        JSON.stringify(
                          (localStorage.getItem("debt") == null
                            ? 0
                            : JSON.parse(localStorage.getItem("debt"))) + pp
                        )
                      );
                      setDebt(JSON.parse(localStorage.getItem("debt")));
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline inline cursor-pointer decoration-2 hover:bg-gray-300 rounded-lg p-0.5 transition  hover:bg-opacity-50  decoration-gray-400"
                  >
                    refreshing boba drink
                  </a>
                </AlertDialog.Trigger>
                <AlertDialog.Portal>
                  <AlertDialog.Overlay className="AlertDialogOverlay" />
                  <AlertDialog.Content className="AlertDialogContent">
                    <AlertDialog.Title className="AlertDialogTitle">
                      {
                        actions.title[
                          Math.floor(Math.random() * actions.title.length)
                        ]
                      }
                    </AlertDialog.Title>
                    <AlertDialog.Description className="AlertDialogDescription">
                      {
                        actions.drink[
                          Math.floor(Math.random() * actions.drink.length)
                        ]
                      }{" "}
                      it cost you {price} dollars.
                    </AlertDialog.Description>
                    <div
                      style={{
                        display: "flex",
                        gap: 25,
                        justifyContent: "flex-end",
                      }}
                    >
                      <AlertDialog.Action asChild>
                        <button className="text-gray-400">close</button>
                      </AlertDialog.Action>
                    </div>
                  </AlertDialog.Content>
                </AlertDialog.Portal>
              </AlertDialog.Root>
              !
            </div>
            {debt > 0 && (
              <div className="text-gray-400">you are ${debt} in debt.</div>
            )}
          </div>
        </div>
        <div className="static bottom-5">
          <p className=" ml-2 italic text-sm text-gray-600">
            it&apos;s {day ? "daytime" : "nighttime"} and {temp}&#176;
            fahrenheit in san francisco
          </p>
          <div className=" ">
            {day ? (
              <Image src={DayBanner} alt={"day banner"} className="w-screen " />
            ) : (
              <Image
                src={NightBanner}
                alt={"night banner"}
                className=" invert brightness-50 w-screen"
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
