"use client"
import { cn } from "@/lib/utils"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";
const googlesrc="https://joinditto.in/static/e7792016c589a69f7c178b65641e2076/6f791/google_review.webp";
const linkedinsrc = "	https://joinditto.in/static/d282f275ca2bc353ff3212893ce659d9/d0fcd/linkedin_top_startup_badge.webp";


export default function Header() {
   return (
    <div className="flex justify-evenly gap-5 py-10 px-40">
        <div className="header-text w-2/5 pt-10">
            <div className="flex gap-10">
                <Image loader={() => googlesrc} alt="" src={googlesrc} width={130} height={100}/>
                <Image loader={() => linkedinsrc} alt="" src={linkedinsrc} width={130} height={100}/>
            </div>
            <h1 className="font-bold text-4xl py-4">Insurance made easy</h1>
            <p className="pt-6 pd-10 text-lg">With Ditto, you get the best advice on insurance. Understand your policy, get answers to your burning questions, and buy insurance, all at the same place.</p>
            <Button variant="default" className="text-base py-5 px-10 my-5">Book a free call</Button>
        </div>
        <div className="header-image w-3/5">
            <video className="w-full md:h-445 2xl:h-486" autoPlay loop muted>
                <source src="https://ujwalvinay.com/project/ditto-video.mp4" type="video/mp4" />
            </video>
        </div>
    </div>
   )
}