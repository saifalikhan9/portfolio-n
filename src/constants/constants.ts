interface ProjectTypes {
  title: string;
  url: string;
  description: string;
  slug: string;
}

export const projects: ProjectTypes[] = [
  {
    title: "Resume Roaster",
    url: "https://github.com/saifalikhan9/Portfolio/blob/main/public/images/resumeRoast.png?raw=false",
    description:
      "A Next.js app that humorously roasts resumes using OpenAI and Gemini LLMs. Features smart resume parsing, a clean Tailwind CSS UI, and witty, context-aware feedback that makes resume reviews fun and engaging..",
    slug: "resume-roaster",
  },
  {
    title: "Neon Loop ",

    url: "/Neon.png",
    description:
      "A customizable neon light eCommerce platform where users design their own LED sign using a React customization panel (text, color, font, and size in real-time). UI built with Tailwind CSS and smooth animations using motion/react. Backend secured with JWT authentication, cookie-based persistent sessions, and an Axios interceptor with automatic refresh-token handling. Razorpay payments are verified server-side, with strict price and order validation checks to prevent tampering or attacks.",
    slug: "neon-loop",
  },
  {
    title: "LeetCode Whisper",

    url: "https://github.com/saifalikhan9/Portfolio/blob/main/public/images/extention.jpg?raw=true",
    description:
      "I developed a lightweight productivity Chrome extension using Vite and React with TypeScript, designed to assist directly inside LeetCode. The extension intelligently reads the page by extracting the active problem title and statement straight from the DOM, then feeds that data into a context-aware AI pipeline. By integrating LLMs like OpenAI and Gemini, it generates real-time hints, clear explanations, and structured solution guidance while users practice coding. The frontend is built entirely in React to deliver a seamless in-browser helping experience without disrupting the workflow, making problem-solving faster and learning more interactive and efficient.",
    slug: "leetcode-whisper",
  },
  {
    title: "Bill Spitting Tool",

    url: "https://github.com/saifalikhan9/Portfolio/blob/main/public/images/Bill.jpg?raw=true",
    description:
      "I built this bill-splitting app to handle electricity costs shared through a single master meter. The front end runs on Next.js with TypeScript, styled using Tailwind CSS, and the billing records are modeled and stored through Prisma ORM. User access is secured with NextAuth authentication, and I added automated email updates by building a custom SMTP mail service that sends every flatmate their exact bill share whenever a new bill is saved. The backend includes API validation and database checks to keep billing accurate and protected.",
    slug: "bill-spitting-tool",
  },
];
