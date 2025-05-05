'use client';
import Link from "next/link";
import {Button} from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="pb-20 px-4">
    <div>
      <h1>
        Manage Your Finances <br/> with intelligence
      </h1>
      <p>
        {""}
        An AI powered financial management platform that helps you 
        track,
        analyze, and optimize your spending with real-time insights.
      </p>
      <div>
        <Link href="/dashboard">
        <Button size="lg" className="px-8">Get Started</Button>
        </Link>
        <Link href="https://www.linkedin.com/in/alok-kumar-giri/">
        <Button size="lg" variant="outline" className="px-8">Watch Demo</Button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default HeroSection;