import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/layout/SectionTitle";
import { metadata } from "@/data/metadata";
import UtilizeInfoBox from "./UtilizeInfoBox";

export default function UtilizeSection() {
  return (
    <Section id="utilizes">
      <Container>
        <SectionTitle title="Utilize" subtitle="How i use skill" />
        <div className="grid grid-cols-3 justify-center gap-x-7 gap-y-6 sm:grid-cols-[max-content]">
          {metadata.utilize.map((data) => (
            <UtilizeInfoBox key={data.id} utilize={data} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
