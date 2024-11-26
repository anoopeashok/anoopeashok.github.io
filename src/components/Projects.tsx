import Link from "next/link";
import { cn } from "@/lib/utils";

import { ExternalLink } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export const projects = [
  {
    title: "MEPLinks",
    description: `The MEPLinks is a mobile application allows you to buy MEP inventory across a wide range of products and categories.`,
    tech: "Flutter",
    ios: "https://apps.apple.com/in/app/meplinks/id1615595273",
  },
  {
    title: "Fellbach.go! Radbox.",
    description:
      "The fellbach radbox is a mobile application developed for handling bike parking and parking subscription",
    tech: "Flutter",
    ios: "https://apps.apple.com/in/app/fellbach-go-radbox/id1580712729",
  },
  {
    title: "Jumbo Radar",
    description:
      "Jumbo Radar is a comprehensive tool to monitor elephants and implement steps to reduce Human-Elephant Conflict.",
    tech: "Flutter",
    android:
      "https://play.google.com/store/apps/details?id=com.leopardtechlabs.jumbo_radar_app",
  },
  {
    title: "Connect-Social Backend",
    description:
      "Connect-Social is a Node.js backend for a social media platform where users can connect through events, attend or host them, upload photos and stories, manage friendships and follow other users.",
    tech: "NodeJs",
    github: "https://github.com/anoopeashok/connect-social-backend.git",
  },
];

const techColors = {
    "Flutter": "bg-blue-500",
    "NodeJs": "bg-green-500",
    "Vue.js": "bg-purple-500",
    "Python": "bg-yellow-500",
}

export const Projects = () => {
    return (
      <>
        <h2 className="text-xl font-bold mb-4">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {projects.map((p, i) => (
            <Card key={i}>
              <CardContent className="pt-6 h-full">
                <div className="flex flex-col h-full">
                  {p.title}
                  <p className="text-sm text-muted-foreground mt-1 mb-4">
                    {p.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div
                        className={cn(
                          "size-4 rounded-full",
                          techColors[p.tech as keyof typeof techColors]
                        )}
                      />
                      <span className="text-xs font-medium text-muted-foreground">
                        {p.tech}
                      </span>
                    </div>
                    {p.android && (
                      <Link
                        target="_blank"
                        href={p.android}
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        Play store
                        <ExternalLink className="inline-block size-3" />
                      </Link>
                    )}
                    {p.ios && (
                      <Link
                        target="_blank"
                        href={p.ios}
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        App store
                        <ExternalLink className="inline-block size-3" />
                      </Link>
                    )}
                    {p.github && (
                      <Link
                        target="_blank"
                        href={p.github}
                        className="flex items-center gap-2 text-sm text-primary hover:underline"
                      >
                        Github
                        <ExternalLink className="inline-block size-3" />
                      </Link>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </>
    );
}