"use client";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Silk from '@/components/ui/PrismaticBurst';

export default function Landing() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Silk
speed={5}
  scale={1}
  color="#2D0CAF"
  noiseIntensity={1.5}
  rotation={0}
        />
      </div>

      <div className="relative z-10 min-h-screen font-sans px-42 flex flex-col">
        <header className="flex text-white justify-between items-center p-4 mt-10 bg-white/10 rounded-lg backdrop-blur-sm">
          <h1 className="text-2xl font-bold ">Crisp</h1>
          <nav className="space-x-4">
            <Button variant="ghost">Interviewee</Button>
            <Button variant="ghost">Interviewer</Button>
          </nav>
        </header>

        <main className="flex flex-1 flex-col items-center justify-center text-center p-10">
          <h2 className="text-4xl text-white font-bold mb-4">AI-Powered Interview Assistant</h2>
          <p className="text-lg text-gray-300 mb-8">
            Practice interviews with AI or explore candidate dashboards, all in one place.
          </p>
          <div className="space-x-4">
            <Button size="lg" className="bg-white/10 backdrop-blur-sm">
              Start Interview
            </Button>
            <Button size="lg" variant="outline">
              Go to Dashboard
            </Button>
          </div>
        </main>
      </div>
    </div>
  );
}
