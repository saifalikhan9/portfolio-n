import BlogsLanding from "@/src/components/Landings/Blogs";
import { Container } from "@/src/components/ui/Container";
import { GithubLanding } from "@/src/components/Landings/GithubLanding";
import Projects from "@/src/components/Landings/Projects";
import { Heading } from "@/src/components/ui/Heading";
import { Quote } from "@/src/components/ui/Quote";
import TypeScript from "@/src/components/ui/icons/TypeScript";
import ReactIcon from "@/src/components/ui/icons/ReactIcon";
import NextJs from "@/src/components/ui/icons/NextJs";
import PostgreSQL from "@/src/components/ui/icons/PostgreSQL";
import Motion from "@/src/components/ui/icons/Motion";
import { cn } from "@/src/lib/utils";
import { Button } from "@/src/components/ui/Button";
import { IconFileText, IconSend } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  let quote = "";
  let reference = "";
  // do not for get to uncomment the api call
  // try {
  //   const res = await fetch(
  //     `${process.env.NEXT_PUBLIC_BASE_URL ?? ""}/api/getQuote`,
  //     { cache: "no-store" },
  //   );
  //   if (res.ok) {
  //     const json = await res.json();
  //     quote = json?.data?.quote ?? "";
  //     reference = json?.data?.reference ?? "";
  //   }
  // } catch (error) {
  //   console.error("Failed to fetch quote:", error);
  // }
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="relative min-h-screen pt-24 pb-12">
        <div className="bg-forground/10 mx-10 my-4 size-30 overflow-clip rounded-xl p-1">
          <Image
            className="rounded-[12px]"
            src="https://github.com/saifalikhan9/Portfolio/blob/main/public/images/dp.jpg?raw=true"
            alt="picture "
            width={500}
            height={500}
          />
        </div>
        <Heading className="tracking-wide">
          Hi I'm Saif —{"  "}
          <span className="text-secondary">A Full Stack web developer.</span>
        </Heading>
        <ProfileDes />
        <div className="mx-10 my-4 inline-flex items-center gap-5">
          <Link
            href={
              "https://drive.google.com/file/d/1yditvS4vokyLE_DXAg-Fq_Zj8uL0l1-V/view?usp=drive_link"
            }
          >
            <Button variant="secondary" className="gap-1" asChild>
              <span>
                {
                  <IconFileText className="size-4 rotate-z-20 stroke-1 perspective-distant transform-3d" />
                }
              </span>
              Resume / CV
            </Button>
          </Link>
          <Link href={"/contact"}>
            <Button className="gap-1">
              <span>
                {<IconSend className="relative top-px size-4 stroke-1" />}
              </span>{" "}
              Get In Touch
            </Button>
          </Link>
        </div>
        <Projects />
        <GithubLanding />
        <BlogsLanding />
        {quote && reference && (
          <Quote
            className="m-2 mt-10 md:mx-auto lg:max-w-200"
            text={quote}
            source={reference}
          />
        )}
      </Container>
    </div>
  );
}

type IconsTextProps = {
  className?: string;
  iconClassName?: string;
  iconSvg: React.ReactNode;
  href: string;
  label: string;
};

const IconsText: React.FC<IconsTextProps> = ({
  className = "",
  iconSvg,
  iconClassName,
  href,
  label,
}) => (
  <a
    target="_blank"
    rel="noopener noreferrer"
    className={`inline-flex items-center self-end rounded-md border border-dashed border-black/20 bg-black/5 px-2 py-1 text-sm text-black shadow-[1px_-1px_12px_var(--color-neutral-300)_inset] dark:border-white/30 dark:bg-white/15 dark:text-white dark:shadow-[1px_1px_10px_var(--color-neutral-700)_inset] ${className}`}
    href={href}
  >
    <div className={cn("size-4 shrink-0", iconClassName)}>{iconSvg}</div>
    <p className="ml-1 text-sm font-bold">{label}</p>
  </a>
);

const ProfileDes = () => {
  return (
    <div className="mt-4 flex flex-wrap items-center gap-x-1.5 gap-y-2 px-10 text-base whitespace-pre-wrap text-neutral-500 md:text-lg">
      <span className="whitespace-pre-wrap">
        I build interactive web apps using
      </span>
      <IconsText
        href="typescript"
        iconSvg={<TypeScript />}
        label="TypeScript"
      />

      <span className="whitespace-pre-wrap">, </span>
      <IconsText href="react" label="React" iconSvg={<ReactIcon />} />
      <span className="whitespace-pre-wrap">, </span>
      <IconsText href="Nextjs" label="Nextjs" iconSvg={<NextJs />} />
      <span className="whitespace-pre-wrap">, </span>
      <IconsText href="react" label="React" iconSvg={<ReactIcon />} />
      <span className="whitespace-pre-wrap"> and </span>
      <IconsText
        href="postgresSQL"
        label="PoestgreSQL"
        iconSvg={<PostgreSQL />}
      />
      <span className="whitespace-pre-wrap">. With a focus on </span>
      <b className="text-forground whitespace-pre-wrap">UI</b>
      <span className="whitespace-pre-wrap">design. Enthusiastic about</span>
      <IconsText
        iconClassName="size-5"
        label="Motion"
        iconSvg={<Motion />}
        href="motion"
      />
      <span className="whitespace-pre-wrap">
        , driven by a keen eye for design.
      </span>
    </div>
  );
};
