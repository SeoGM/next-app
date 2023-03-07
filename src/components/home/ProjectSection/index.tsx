import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import SectionTitle from "@/components/layout/SectionTitle";
import Projects from "./Projects";

export default function ProjectSection() {
  return (
    <Section id="projects">
      <Container>
        <SectionTitle title="Projects" subtitle="Most resent works" />
        <Projects />
      </Container>
    </Section>
  );
}
