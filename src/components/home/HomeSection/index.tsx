import Container from "@/components/layout/Container";
import Section from "@/components/layout/Section";
import { metadata } from "@/data/metadata";
import { ArrowDownIcon } from "@heroicons/react/solid";

export default function HomeSection() {
  return (
    <Section id="home">
      <Container>
        <div className="grid grid-cols-2 items-center gap-5 pt-24 pb-28">
          <div>
            <h1 className="text-2xl font-semibold">{metadata.author}</h1>
            <h2 className="home__subtitle mb-4 text-xl font-normal">
              Front-end Developer
            </h2>
            <p className="max-w-[400px] mb-12">
              저의 포트폴리오 사이트에 와주신 걸 환영합니다!
              <br />
              새로운 지식을 배우고, 새로운 무언가를 만들고, 그러한 일들을 찾아서
              하는 걸 좋아하는 서광명입니다.
            </p>
          </div>
          <div className="home__img"></div>
        </div>
        <div className="flex justify-center">
          <a href="#about" className="inline-flex items-center">
            <span className="home__scroll-wheel"></span>
            <span className="text-lg font-medium ml-2 mr-1">Scroll Down</span>
            <ArrowDownIcon className="w-4 h-4" />
          </a>
        </div>
      </Container>
    </Section>
  );
}
