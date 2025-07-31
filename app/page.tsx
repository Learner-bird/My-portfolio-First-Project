"use client"

import TopNav from "@/app/components/TopNav"
import { TrendingUp } from "lucide-react";
import { MailCheck } from "lucide-react";
import { LaptopMinimalCheck } from "lucide-react";
import { LayoutGrid } from "lucide-react";
import { Slack } from "lucide-react"

export default function Home() {

  return (
    <div className="bg-emerald-400">

      <TopNav />
      <div className=" bg-amber-400 flex justify-between bg-[url('/alone.png')] bg-contain bg-top bg-no-repeat ">
        <div className=" flex flex-col justify-between h-[500px] max-w-5xl max-auto p-10">
          <div className="text-5xl">
            <div> Hey Buddy</div>
            <div>Hasan Here</div>
          </div>


          <div className="flex flex-col p-2">
            <MailCheck size={30} className="" />
            <div className="underline">mhmahmudul37@gmail.com</div>
          </div>


          <div className=" flex gap-2">
            <div className="text-7xl ">10</div>
            <div className="flex mt-3 ">Years <br /> Experience</div>
          </div>

        </div>


        <div className="flex flex-col justify-between p-2 items-center text-2xl">
          <div>
            <div>I Love to Discover</div>
            <div>Something New</div>
          </div>


          <div className="flex flex-col text-foreground p-2 ">
            <TrendingUp size={100} />
            <div>I am not yet proficient</div>
            <div>but I am working </div>
            <div>of becoming proficient</div>
          </div>
        </div>
      </div>


      <div className="flex flex-row mt-3 p-20 justify-between items-center ">
        <div className="flex flex-col gap-15 items-baseline">
          <div className=" mx-auto max-w-sm items-center gap-x-4 rounded-xl bg-white p-2 shadow-lg outline
           dark:outline-white/1 flex flex-row gap-3">
            <LaptopMinimalCheck size={50} className="rounded-full p-2 bg-fuchsia-600" />
            <div>
              <div className="">
                <div className="text-3xl">Webiste Design</div>
                <div>25+ Project</div>
              </div>
            </div>
          </div>

          <div className="mx-auto max-w-sm items-center gap-x-4 rounded-xl bg-white p-2 shadow-lg
          outline outline-black/5 dark:bg-slate-200 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 flex flex-row gap-3">
            <LayoutGrid size={50} className="rounded-full p-2 bg-fuchsia-600" />
            <div>
              <div className="text-2xl">Mobile App Design</div>
              <div>20+ Project</div>
            </div>
          </div>

          <div className="mx-auto max-w-sm items-center gap-x-4 rounded-xl bg-white p-2 shadow-lg outline
           outline-black/5 dark:bg-slate-200 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10 flex gap-3">
            <Slack size={50} className="rounded-full p-2 bg-fuchsia-600" />
            <div>
              <div className="text-3xl">Brand identity</div>
              <div>35+ Project</div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-baseline ml-17 gap-10 ">
          <div className="flex text-7xl">
            <div> I Love To Do</div>
          </div>

          <div className="flex items-center justify-between">
            <div className="border-1">I love designing websites that help my clients stand out online. <br />
              From layout to user experience, I focus on creating clean,
              modern, <br /> and responsive designs tailored to each client's brand
              and goals</div>
          </div>

          <div className="flex flex-row ml-8 gap-15">
            <div>
              <div className="text-6xl bg-amber-500">285+</div>
              <div className="border-1">Project Completed</div>
            </div>

            <div className="">
              <div>
                <div className="text-6xl bg-amber-500">150+</div>
              </div>

              <div className=" ml-.9">
                <div className="border-1">Happy Client</div>
              </div>
            </div>
          </div>

        </div>

    <div className="flex flex-row justify-between items-baseline-last object-contain">
            <div className="flex flex-col">
              <div className="flex bg-[url('/single.png')] p-30 w-1xl up bg-contain bg-no-repeat ">
              </div>
            </div>
          </div>

      </div>
    </div>
  );
}