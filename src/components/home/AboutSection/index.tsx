import Image from "next/image";
import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import SectionTitle from "@/components/layout/SectionTitle";
import AboutInfoBox from "./AboutInfoBox";
import { UserIcon } from "@heroicons/react/solid";
import {
  IdentificationIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/outline";

export default function AboutSection() {
  return (
    <Section id="about">
      <Container>
        <SectionTitle title="About Me" subtitle="My introduction" />
        <div className="grid grid-cols-2 gap-x-16 lg:grid-cols-1 lg:text-center">
          <Image
            src=""
            width={350}
            height={600}
            alt=""
            className="rounded-3xl justify-self-center"
          />
          <div>
            <div className="grid grid-cols-[repeat(3,_140px)] gap-6 mb-8 lg:justify-center sm:grid-cols-3">
              <AboutInfoBox
                icon={IdentificationIcon}
                title="Experience"
                desc="5 Years Working"
              />
              <AboutInfoBox icon={UserIcon} title="Age" desc="33, 1991.10.21" />
              <AboutInfoBox
                icon={ClipboardCheckIcon}
                title="Completed"
                desc="10 + Projects"
              />
            </div>
            <p className="text-base mb-10 break-keep lg:px-40 md:mb-8 md:px-16 sm:px-0">
              저는 5년차 Front-end 개발자입니다.
              <br />
              <br />
              늘 사용자 입장에서 생각하며 효율적인 UI/UX가 무엇일지 계속
              고민하고, 웹 표준과 웹 접근성을 고려한 마크업을 하기 위해
              노력합니다.
              <br />
              <br />
              다년간의 경험과 다수의 프로젝트를 통해 다양한 기술을 터특해
              왔습니다.
              <br />
              Front-end로써의 역할뿐만 아니라 Back-end로써의 업무를 겸해야만
              했던 경험들을 기회로 Back-end 역할까지 도전해 왔습니다.
              <br />
              한가지 역할에 국한된것이 아닌 보다 다양한 시각을 가질 수 있도록 두
              가지 역할을 경험해 봄으로써 보다 큰 프로젝트에서 발전적인 역할을
              함께 수행할 수 있는 Front-end 개발자가 되어 Back-end 개발자와
              유기적인 소통이 가능하고, 프로젝트 동료로써 서로가 발전적인
              결과물을 만들어 낼 수 있도록 하고 싶습니다.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
