import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const jobs = [
  {
    role: "Mobile Application Developer", // TODO: Replace with actual role
    company: "iworxs by Palnar GmbH & Co.KG.", // TODO: Replace with actual company name
    logo: "/palnar.svg", // TODO: Replace with actual logo
    duration: "2022 - 2023",
    description: `•   Successfully led and managed a Flutter development team, enhancing workflow efficiency and establishing high coding standards.
•   Effectively liaised with clients, maintaining clear communication and delivering solutions in a well-organized and timely manner.
•   Skilled in automating app development processes, with expertise in implementing CI/CD pipelines, as well as conducting unit and integration testing using Git.
•   Proven ability to develop adaptive applications that deliver seamless user experiences across diverse screen sizes.
•   Achieved a 90% performance improvement in existing applications through optimization and innovative problem-solving.
•   Proficient in managing project Git repositories to ensure seamless collaboration and avoid conflicts among team members.`,
    link: "https://palnarindia.com/en/",
    images: [],
  },
  {
    role: "Flutter Developer", // TODO: Replace with actual role
    company: "Links4Engg Pvt Ltd", // TODO: Replace with actual company name
    logo: "/links4engg.png", // TODO: Replace with actual logo
    duration: "2021 - 2022",
    description: `•	Proficient in developing a diverse range of mobile applications, leveraging both GraphQL and REST APIs for efficient data communication.
•	Skilled in utilizing various Amazon Web Services (AWS), including Amplify, DynamoDB, S3, Lambda, and Cognito, to build scalable and reliable solutions.
•	Proven expertise in building, testing, and deploying mobile applications to both the Google Play Store and Apple App Store.
•	Adept at implementing Provider as a state management solution, ensuring a clean, maintainable, and efficient codebase.
•	Demonstrated ability to design and deliver adaptive applications that provide seamless and consistent user experiences across multiple screen sizes and devices.`,
    link: "https://www.links4engg.com",
  },
  {
    role: "Junior Flutter Developer", // TODO: Replace with actual role
    company: "Leopard Tech Labs", // TODO: Replace with actual company name
    logo: "/leopard.png", // TODO: Replace with actual logo
    duration: "2019 - 2021",
    description: `•	Designed, developed, and deployed various applications, including e-commerce platforms, wildlife reporting systems, and short video-sharing apps, utilizing REST APIs for seamless backend communication.
•	Gained extensive experience with technologies such as Firebase for social media login, crash analytics, and notifications; Socket.IO for implementing real-time chat functionality; and Google Maps for marking wildlife sightings and creating polygon overlays.
•	Successfully integrated payment solutions using Razorpay, enabling secure and efficient transaction processing.`,
    link: "https://leopardtechlabs.com",
  },
];

export const Experience = () => {
  return (
    <>
      <h2 className="text-xl font-bold mb-4">Work Experience</h2>
      <Card>
        <CardContent className="pt-6">
          <ul className="space-y-8">
            {jobs.map((j, i) => (
              <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                {/* Job Details */}
                <div className="flex items-center space-x-4">
                 <a href={ j.link}  target="_blank"> 
                        <Image
                    src={j.logo}
                    alt={j.company}
                    width={40}
                    height={40}
                    className="rounded-md border shadow-md object-cover"
                            />
                            </a>
                  <div>
                    <h3 className="font-semibold">{j.role}</h3>
                            <a href={ j.link}  target="_blank"> <p className="text-sm text-muted-foreground">{j.company}</p></a>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                  <CalendarDays className="size-3 mr-2" />
                  {j.duration}
                </p>
                <p
                  className="text-sm mt-4 text-gray-700 leading-relaxed"
                  style={{ whiteSpace: "pre-wrap", lineHeight: "1.7" }}
                >
                  {j.description}
                </p>
              </li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </>
  );
};
