import React from 'react';
import { EnhancedTimeline } from '@/components/ui/enhanced-timeline';
import { 
  Briefcase, 
  GraduationCap, 
  Rocket, 
  Target,
  Users
} from 'lucide-react';

export function TimelineSection() {
  const timelineItems = [
    {
      id: "synopsyne-founder",
      title: "Founder & Director",
      date: "2024 – Present",
      content: "Launched Synopsyne Dynamics Pvt. Ltd. on October 2nd, 2024, focusing on AI solutions, strategic management, and business consulting to drive future-ready businesses.",
      category: "work" as const,
      icon: <Rocket className="w-5 h-5 text-primary" />,
      relatedIds: ["clienteclarify-cofounder"],
      status: "current" as const,
      energy: 95
    },
    {
      id: "clienteclarify-cofounder",
      title: "Co-Founder & Director",
      date: "2019 – 2024",
      content: "Co-founded ClienteClarify.AI Pvt. Ltd., an AI-driven company. Led the company for 5 years, building strong foundation in AI and business process optimization.",
      category: "work" as const,
      icon: <Briefcase className="w-5 h-5 text-blue-500" />,
      relatedIds: ["synopsyne-founder", "btech-graduation"],
      status: "completed" as const,
      energy: 90
    },
    {
      id: "btech-graduation",
      title: "B.Tech Mechanical Engineering",
      date: "2019",
      content: "Graduated with B.Tech in Mechanical Engineering, focusing on innovation, technology, and entrepreneurship while developing foundational skills for future ventures.",
      category: "education" as const,
      icon: <GraduationCap className="w-5 h-5 text-green-500" />,
      relatedIds: ["amz-executive", "soha-ambassador"],
      status: "completed" as const,
      energy: 75
    },
    {
      id: "amz-executive",
      title: "Technical & Marketing Executive",
      date: "2018 – 2019",
      content: "Joined AMZ Automotive while pursuing B.Tech. Worked as Technical Trainer providing automotive technology training and developing marketing strategies.",
      category: "work" as const,
      icon: <Target className="w-5 h-5 text-orange-500" />,
      relatedIds: ["btech-graduation"],
      status: "completed" as const,
      energy: 70
    },
    {
      id: "soha-ambassador",
      title: "City Ambassador",
      date: "2016 – 2019",
      content: "Worked as City Ambassador for Soha Technologies Pvt. Ltd., Pune during B.Tech studies, promoting company initiatives and building city-wide connections.",
      category: "work" as const,
      icon: <Users className="w-5 h-5 text-purple-500" />,
      relatedIds: ["btech-graduation"],
      status: "completed" as const,
      energy: 65
    }
  ];

  return (
    <section id="timeline" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Career Timeline
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            An interactive journey through my professional experiences and educational achievements
          </p>
        </div>
        
        <div className="h-[600px]">
          <EnhancedTimeline items={timelineItems} />
        </div>
      </div>
    </section>
  );
}