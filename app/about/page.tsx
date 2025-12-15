import { Container } from "@/src/components/Container";
import { Heading } from "@/src/components/Heading";

import { Scales } from "@/src/components/Scales";
import { SubHeading } from "@/src/components/Subheading";

export default function About() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen bg-neutral-100 dark:bg-neutral-900 pt-24 pb-12">
        <Scales />
        <Heading>About me</Heading>
        <SubHeading className="my-4">
          I am a passionate developer who loves creating amazing web
          experiences. I am always looking for new challenges and opportunities
          to learn and grow.
        </SubHeading>
      </Container>
    </div>
  );
}
