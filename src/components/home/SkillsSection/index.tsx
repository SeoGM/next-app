import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/layout/SectionTitle";
import { metadata } from "@/data/metadata";
import SkillInfoBox from "./SkillInfoBox";

export default function SkillsSection() {
  return (
    <Section id="skills">
      <Container>
        <SectionTitle title="Skills" subtitle="My technical level" />
        <div className="grid grid-cols-3 gap-x-7 md:grid-cols-[max-content] md:justify-center md:gap-y-8 sm:grid-cols-1">
          {metadata.skills.map((skill, index) => {
            return (
              <SkillInfoBox key={index} title={skill.title} data={skill.data} />
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
