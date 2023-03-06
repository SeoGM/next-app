import {
  TemplateIcon,
  CodeIcon,
  PencilAltIcon,
} from "@heroicons/react/outline";

export const metadata = {
  title: "illumi.dev",
  author: "GWANGMYEONG SEO",
  github: "https://github.com/SeoGM",
  skills: [
    {
      title: "Frontend Developer",
      data: [
        { name: "HTML&CSS", level: "Advanced" },
        { name: "JavaScript", level: "Intermediate" },
        { name: "React", level: "Intermediate" },
        { name: "Next.js", level: "Basic" },
        { name: "Bootstrap", level: "Intermediate" },
        { name: "Tailwindcss", level: "Intermediate" },
      ],
    },
    {
      title: "Backend Developer",
      data: [
        { name: "JAVA", level: "Intermediate" },
        { name: "PHP", level: "Intermediate" },
        { name: "NodeJs", level: "Basic" },
        { name: "Oracle", level: "Intermediate" },
        { name: "MySQL", level: "Intermediate" },
        { name: "Firebase", level: "Basic" },
      ],
    },
    {
      title: "Development Tools",
      data: [
        { name: "Eclipse", level: "Intermediate" },
        { name: "VS Code", level: "Intermediate" },
        { name: "Github", level: "Intermediate" },
        { name: "Figma", level: "Basic" },
        { name: "Photoshop", level: "Basic" },
        { name: "Cafe24", level: "Intermediate" },
      ],
    },
  ],
  utilize: [
    {
      id: 1,
      icon: TemplateIcon,
      title: "Frontend<br/>Development",
      modalTitle: "Frontend Development",
      data: [
        "웹 표준/웹 접근성을 준수한 HTML/CSS 코딩",
        "원하는 UI를 컴포넌트 단위로 실용적으로 제작",
        "폭 넓은 오픈소스 사용 및 커스터마이징 가능",
        "Frontend Framework를 이용한 SPA 페이지 구현",
        "Rest API를 사용한 Backend와 데이터송수신",
      ],
    },
    {
      id: 2,
      icon: CodeIcon,
      title: "Backend<br/>Development",
      modalTitle: "Backend Development",
      data: [
        "Tomcat / Apache 서버 환경 설정",
        "전자정부프레임워크를 이용한 웹사이트 제작",
        "그누보드 웹사이트 제작 및 PHP 커스터마이징",
        "Database 조작 및 마이그레이션",
        "Rest API를 사용한 Frontend와 데이터송수신",
      ],
    },
    {
      id: 3,
      icon: PencilAltIcon,
      title: "Planning and<br/> Management",
      modalTitle: "Planning and Management",
      data: [
        "홈페이지 및 최신 트랜드 분석",
        "요구사항분석 및 프로젝트 기획/설계",
        "프로젝트 테스트 및 운영 관리",
        "Git을 사용하여 협업 및 버전 관리",
        "검색엔진 최적화 및 애널리틱스 활용",
      ],
    },
  ],
};
