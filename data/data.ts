export interface IProjects {
  id: number;
  name: string;
  description: string;
  stack?: string;
  href: string;
  code: string;
}

export const projects: IProjects[] = [
  {
    id: 1,
    name: "Book Store",
    description:
      "An online bookstore application built with React and TypeScript, featuring book listings, details pages, and a clean, user-friendly interface.",
    stack: "React, TypeScript",
    href: "https://mohanadkalloub.github.io/Book_Store/",
    code: "https://github.com/Mohanadkalloub/Book_Store",
  },
  {
    id: 2,
    name: "Travel Agency",
    description:
      "A responsive travel agency website showcasing destinations and travel services, built with a focus on modern UI design.",
    stack: "Pure HTML, CSS, JavaScript",
    href: "https://mohanadkalloub.github.io/Travel-Agency/",
    code: "https://github.com/Mohanadkalloub/Travel-Agency",
  },
  {
    id: 3,
    name: "Food Gallery",
    description:
      "A visually appealing food gallery application displaying food items in a modern grid layout with smooth interactions.",
    stack: "Pure HTML, CSS, JavaScript",
    href: "https://mohanadkalloub.github.io/Food-Gallery/",
    code: "https://github.com/Mohanadkalloub/Food-Gallery",
  },
  {
    id: 4,
    name: "Develop Business",
    description:
      "A business-focused landing page designed to showcase services and company growth with a professional layout.",
    stack: "Pure HTML, CSS, JavaScript",
    href: "https://mohanadkalloub.github.io/Food-Gallery/",
    code: "https://github.com/Mohanadkalloub/Develop-Business",
  },
  {
    id: 5,
    name: "Real Estate",
    description:
      "A modern real estate website allowing users to explore properties with a responsive design and optimized performance.",
    stack: "Next.js, React, TypeScript",
    href: "https://real-estate-website-fawn-delta.vercel.app/",
    code: "https://github.com/Mohanadkalloub/real-estate-website",
  },
  {
    id: 6,
    name: "Coffee App",
    description:
      "A coffee shop mobile application featuring product listings, quantity controls, and a clean mobile-first UI.",
    stack: "React Native, Expo, TypeScript",
    href: "",
    code: "https://github.com/Mohanadkalloub/Coffee_Mobile_App",
  },
  {
    id: 7,
    name: "Card State Management",
    description:
      "An interactive card grid project demonstrating state management and dynamic UI behavior in React.",
    stack: "React (State Management)",
    href: "https://card-grid-eight.vercel.app/",
    code: "https://github.com/Mohanadkalloub/Expandable-Card-with-State-Management",
  },
];

export interface IApp {
  title: string;
  description: string;
  href: string;
  status: string;
  problem: string;
  solution: string;
  features: string[];
}

export const apps: IApp[] = [
  {
    title: "Business Dashboard",
    description:
      "Role-based dashboard with live data, CRUD operations, and real-time UI updates.",
    href: "https://dashbaordapp.vercel.app/",
    status: "Live Demo",
    problem:
      "Small businesses struggle to track products and team activity efficiently.",
    solution:
      "A real-time dashboard that shows products, status, and team activity in one place.",
    features: [
      "Add/Edit/Delete Products",
      "Track Active/Inactive status",
      "Real-time Stats cards",
      "Clean and responsive UI",
    ],
  },
  {
    title: "Booking System",
    description:
      "Scheduling system with availability, user booking flow, and admin approvals.",
    href: "https://mohanadbooking.vercel.app/",
    status: "Live Demo",
    problem: "Managing bookings manually is error-prone and slow.",
    solution:
      "An automated booking system with user-friendly interface and admin approvals.",
    features: [
      "Calendar view with availability",
      "User booking workflow",
      "Admin approval system",
      "Notifications for users",
    ],
  },
  {
    title: "Workflow Tool",
    description:
      "Internal tool to manage requests, statuses, and team collaboration.",
    href: "https://work-flow-app.vercel.app/",
    status: "Live Demo",
    problem: "Teams lose track of requests and status updates.",
    solution:
      "A tool that manages internal requests, task statuses, and team collaboration.",
    features: [
      "Request tracking dashboard",
      "Status updates per task",
      "Team assignments & roles",
      "Clean interface with filtering",
    ],
  },
];
