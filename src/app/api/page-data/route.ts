import { NextResponse } from "next/server";

const experienceData = [
    {
        icon: "/images/icon/asana-icon.svg",
        role: "Content Copywriter & Social Media Manager - Freelancer",
        location: "Oyo State, Nigeria",
        startYear: "2024",
        endYear: "Present",
        bulletPoints: [
            "Created high-engagement copy and social content for productivity and SaaS brands",
"Managed and grew brand social media presence across multiple platforms",
"Developed content strategies and calendars aligned with business goals",
"Wrote conversion-focused captions, campaigns, and launch copy",
"Analyzed performance metrics to optimize reach, engagement, and growth",
"Collaborated with founders and marketing teams to refine brand voice",

        ]
    },
]

const educationData = [
    {
        date: "Jan 2023 - Mar 2023",
        title: "Content Copy Writing",
        subtitle: "Alison — Online Tutoring"
    },
    {
        date: "Jun 2024 - Aug 2024",
        title: "Graphic Design",
        subtitle: "Alison — Online Tutoring"
    },
    {
        date: "Sept 2024 - Nov 2024",
        title: "Social media management",
        subtitle: "Alison — Online Tutoring"
    }
];


const projectOverview = {
    caseStudies: [
        { name: "Flaven", url: "/Flaven.pdf" },
        { name: "Raptor Altare", url: "/RAPTOR ALTARE.pdf" },
    ],
    sideProjects: [
        { name: "Solarinth Educational Blog", url: "/Solarinth.pdf" },
        { name: "Luxien", comingSoon: true },
    ]
};


export const GET = async () => {
    return NextResponse.json({
        experienceData,
        educationData,
        projectOverview
    });
};