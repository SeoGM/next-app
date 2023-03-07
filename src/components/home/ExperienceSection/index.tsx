import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/layout/SectionTitle";
import { CalendarIcon } from "@heroicons/react/outline";
import { metadata } from "@/data/metadata";

export default function ExperienceSection() {
  return (
    <Section id="experience">
      <Container>
        <SectionTitle title="Experience" subtitle="My personel journey" />
        <div className="grid justify-center">
          {metadata.experience.map((data, index) => {
            const { name, position, rank, date } = data;
            return (
              <div className="group/item grid grid-cols-[1fr_max-content_1fr] gap-x-2 odd:text-right">
                {index % 2 == 0 ? (
                  <>
                    <div className="grid">
                      <h3 className="text-base font-medium title-color">
                        {name}
                      </h3>
                      <span className="inline-block text-sm mb-4">
                        {position} / {rank}
                      </span>
                      <div className="text-sm">
                        <CalendarIcon className="inline-block w-3 h-3" /> {date}
                      </div>
                    </div>

                    <div>
                      <span className="inline-block w-4 h-4 mt-[3px] bg-gray-400 rounded-full"></span>
                      <span className="block w-[1px] h-full bg-gray-400 translate-x-[7px] translate-y-[-7px] group-last/item:hidden"></span>
                    </div>
                  </>
                ) : (
                  <>
                    <div></div>
                    <div>
                      <span className="inline-block w-4 h-4 mt-[3px] bg-gray-400 rounded-full"></span>
                      <span className="block w-[1px] h-full bg-gray-400 translate-x-[7px] translate-y-[-7px] group-last/item:hidden"></span>
                    </div>
                    <div>
                      <h3 className="text-base font-medium title-color">
                        {name}
                      </h3>
                      <span className="inline-block text-sm mb-4">
                        {position} / {rank}
                      </span>
                      <div className="text-sm">
                        <CalendarIcon className="inline-block w-3 h-3" /> {date}
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}
