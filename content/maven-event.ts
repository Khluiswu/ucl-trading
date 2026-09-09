export const MAVEN_EVENT = {
  name: "Maven In-House Days",
  partnerName: "Maven Securities",
  location: "Maven Securities, London",
  applicationUrl: "https://linktr.ee/ucltrading",
  applicationDeadline: "15 September 2026 · 11:59 pm",
  capacityPerDate: 15,
  dates: ["24 September 2026", "8 October 2026"],
  summary:
    "Meet Maven's trading team, explore its London office and see how maths, probability and data shape decisions in fast-moving markets.",
  experience: [
    "Meet and network with Maven traders",
    "Take part in interactive market-making games",
    "Explore the office and learn how the teams work",
    "Discover Maven's internship and graduate opportunities",
  ],
  programmes: [
    {
      name: "Summer Internship",
      eligibility: "Penultimate-year students studying a STEM degree.",
      description:
        "A nine-week introduction to options market making, combining structured training with simulated trading. No prior markets knowledge is required.",
    },
    {
      name: "Graduate Quant Research Programme",
      eligibility:
        "Final-year Bachelor's, Master's or PhD students in applied mathematics, statistics, engineering or physics, with experience in Python, C++ or C#.",
      description:
        "Seven weeks of structured training followed by project rotations using real trading data, automated strategies and quantitative pricing models.",
    },
  ],
} as const;
