import { Container } from "@/src/components/ui/Container";
import { Heading } from "@/src/components/ui/Heading";
import { SubHeading } from "@/src/components/ui/Subheading";

export default function About() {
  return (
    <div className="flex min-h-screen items-start justify-start">
      <Container className="min-h-screen pt-24 pb-12">
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
