import {
  AstroIcon,
  AwsS3,
  BashIcon,
  Bun,
  CloudflareIcon,
  CloudflareWorkersIcon,
  DockerIcon,
  DrizzleOrm,
  ExpoIcon,
  Express,
  FirebaseIcon,
  GitIcon,
  GithubActions,
  GithubIcon,
  Hono,
  Javascript,
  McpIcon,
  MongodbIcon,
  Mysql,
  Nestjs,
  NextjsIcon,
  NodejsIcon,
  Php,
  Pnpm,
  Postgresql,
  Prisma,
  RedisIcon,
  TailwindIcon,
  Tauri,
  Trpc,
  TurborepoIcon,
  TypescriptIcon,
  Vite,
  Vitest,
  Webhooks,
  _React as ReactIcon,
} from "@dev.icons/react";
import { LinuxTux } from "@dev.icons/react/mono";

export const STACK = [
  // Core Languages & Frontend
  {
    name: "TypeScript",
    icon: TypescriptIcon,
  },
  {
    name: "JavaScript",
    icon: Javascript,
  },
  {
    name: "React",
    icon: ReactIcon,
  },
  {
    name: "Next.js",
    icon: NextjsIcon,
  },
  {
    name: "Astro",
    icon: AstroIcon,
  },
  {
    name: "Tailwind CSS",
    icon: TailwindIcon,
  },

  // Cross-Platform & Desktop / Mobile
  {
    name: "Expo",
    icon: ExpoIcon,
  },
  {
    name: "Tauri",
    icon: Tauri,
  },

  // Backend & Runtimes & Frameworks
  {
    name: "Node.js",
    icon: NodejsIcon,
  },
  {
    name: "Bun",
    icon: Bun,
  },
  {
    name: "Hono",
    icon: Hono,
  },
  {
    name: "Express",
    icon: Express,
  },
  {
    name: "NestJS",
    icon: Nestjs,
  },
  {
    name: "tRPC",
    icon: Trpc,
  },
  {
    name: "PHP",
    icon: Php,
  },

  // Databases, ORMs & BaaS
  {
    name: "PostgreSQL",
    icon: Postgresql,
  },
  {
    name: "MySQL",
    icon: Mysql,
  },
  {
    name: "MongoDB",
    icon: MongodbIcon,
  },
  {
    name: "Redis",
    icon: RedisIcon,
  },
  {
    name: "Prisma",
    icon: Prisma,
  },
  {
    name: "Drizzle ORM",
    icon: DrizzleOrm,
  },
  {
    name: "Firebase",
    icon: FirebaseIcon,
  },

  // Cloud, Infrastructure & DevOps
  {
    name: "Docker",
    icon: DockerIcon,
  },
  {
    name: "Cloudflare",
    icon: CloudflareIcon,
  },
  {
    name: "Cloudflare Workers",
    icon: CloudflareWorkersIcon,
  },
  {
    name: "AWS S3",
    icon: AwsS3,
  },
  {
    name: "Linux",
    icon: LinuxTux,
  },
  {
    name: "Bash",
    icon: BashIcon,
  },
  {
    name: "Git",
    icon: GitIcon,
  },
  {
    name: "GitHub",
    icon: GithubIcon,
  },
  {
    name: "GitHub Actions",
    icon: GithubActions,
  },

  // Tooling, Testing & Ecosystem
  {
    name: "Vite",
    icon: Vite,
  },
  {
    name: "Vitest",
    icon: Vitest,
  },
  {
    name: "Turborepo",
    icon: TurborepoIcon,
  },
  {
    name: "pnpm",
    icon: Pnpm,
  },
  {
    name: "Webhooks",
    icon: Webhooks,
  },
  {
    name: "Model Context Protocol",
    icon: McpIcon,
  },
] as const;
