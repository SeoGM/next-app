import {
  TemplateIcon,
  CodeIcon,
  PencilAltIcon,
} from "@heroicons/react/outline";

export const metadata = {
  title: "illumi.dev",
  author: "GWANGMYEONG SEO",
  phone: "010.6716.9800",
  email: "auddlzz000@gmail.com",
  kakao: "https://open.kakao.com/o/sKUSxaZe",
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
  experience: [
    {
      name: "AMI",
      position: "Frontend",
      rank: "프리랜서",
      date: "2023.01~재직중",
    },
    {
      name: "OTI",
      position: "Frontend & Backend",
      rank: "대리",
      date: "2020.01~2022.11",
    },
    {
      name: "GKL",
      position: "Frontend & Backend",
      rank: "프리랜서",
      date: "2018.07-2018.08",
    },
    {
      name: "생각더하기느낌",
      position: "Frontend & Backend",
      rank: "대리",
      date: "2015.09-2018.05",
    },
  ],
  project: [
    {
      title: "삼성SDS 웰스토리몰 고도화",
      date: "2023.01 - 진행중",
      calculator: "",
      position: "Fontend",
      skills: ["React", "Git", "Figma"],
      description:
        "React와 styled-components를 사용하여 페이지와 컴포넌트를 퍼블리싱하였습니다.\n" +
        "이 프로젝트에서는 스토리북을 사용하여 컴포넌트의 개발 및 테스트를 수행하였습니다.\n" +
        "Git을 활용하여 팀별 브랜치를 나누어 개발을 하고 코드 리뷰 및 협업을 진행하였습니다.\n" +
        "Figma를 사용하여 디자인 및 개발 단계에서의 커뮤니케이션을 효율적으로 수행할 수 있었습니다.",
    },
    {
      title: "2023 React Portfolio",
      date: "2023.01 - 2023.01",
      calculator: "1주일",
      position: "Fontend",
      skills: ["React", "HTML", "CSS", "JAVASCRIPT"],
      description:
        "다른 포트폴리오 사이트를 클론 코딩하여 React를 공부하며 만든 사이트입니다. 계속해서 발전하는 신기술을 배우며 제 자신의 가치를 높이기 위한 새로운 도전의 시작점입니다. React의 특징을 살리지 못한 클론 코딩 포트폴리오지만, 기반을 만들어두고 계속해서 업데이트해 나가는 게 목표입니다.",
    },
    {
      title: "교육부 나이스 시스템 고도화",
      date: "2022.01 - 2022.11",
      calculator: "11개월",
      position: "Fontend & Backend",
      skills: [
        "Nexacro",
        "전자정부프레임워크",
        "DB2",
        "Mybatis",
        "SVN",
        "Meta",
      ],
      description:
        "Fontend 개발자로 입사하여 처음으로 Backend 포지션을 겸했던 프로젝트입니다. Backend 개발자로써 AS-IS 프로젝트 분석, 요구사항 분석, TO-BE 프로젝트 설계 등 분석·설계·기획부터 개발까지 모든 업무를 경험했고, Nexacro와 DB2라는 새로운 기술을 배울 수 있었습니다. 나이스 시스템 고도화 프로젝트는 13개 이상의 팀이 분리되어 있는 프로젝트로, Meta 시스템을 이용하여 개발 규칙을 관리하였고, 타 업무팀과 연계된 DB와 API를 사용하여 개발하는 경험을 했습니다.",
    },
    {
      title: "대법원 전자증명서 발급 서비스 개발 및 고도화",
      date: "2021.05 - 2021.12",
      calculator: "7개월",
      position: "Fontend",
      skills: ["HTML", "CSS", "JAVASCRIPT", "SVN"],
      description:
        "전자가족관계등록시스템에서 모바일 전자증명서를 발급할 수 있도록 증명서발급 페이지와 온라인 신고 페이지를 반응형페이지로 고도화하였습니다. " +
        "웹 접근성 검사툴(Openwax) 기준 100점을 준수하여 제작하였습니다.",
    },
    {
      title: "대법원 특정증명서 발급 서비스 개발 및 고도화",
      date: "2022.01 - 2021.03",
      calculator: "1년 2개월",
      position: "Fontend",
      skills: ["HTML", "CSS", "JAVASCRIPT", "SVN"],
      description:
        "전자가족관계등록시스템, 가족관계등록시스템, 제적부등록시스템 3개의 서비스를 동시 개발하였습니다. " +
        "전자가족관계등록시스템은 퍼블리싱 100%, 가족관계등록시스템과 제적부등록시스템은 HTML 컴포넌트와 8개의 표준 템플릿을 제작하여 개발자에게 교육하였습니다. " +
        "전자가족관계등록시스템은 웹 접근성 인증 마크를 획득하였고, 가족관계등록시스템과 제적부등록시스템은 웹 접근성 검사툴(Openwax) 기준 100점을 준수하여 제작하였습니다.",
    },
    {
      title: "그랜드코리아레저 고객관리시스템 고도화",
      date: "2018.07 - 2018.08",
      calculator: "2개월",
      position: "Fontend & Backend / 프리랜서",
      skills: [
        "전자정부프레임워크",
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "Oracle",
        "Oracle procedure",
      ],
      description:
        "호텔예약관리홈페이지, 수수료조회홈페이지 2개의 서비스를 동시 개발하였습니다. " +
        "프리랜서로 투입되어 기획설계가 완료된 후 개발 업무만 맡아서 개발하였습니다. ",
    },
    {
      title: "웹에이전시 고객사 홈페이지 제작",
      date: "2015.09 - 2018.05",
      calculator: "2년 9개월",
      position: "Fontend & Backend",
      skills: [
        "HTML",
        "CSS",
        "JAVASCRIPT",
        "그누보드",
        "PHP",
        "My-SQL",
        "Cafe24",
        "Photoshop",
      ],
      description:
        "그누보드를 이용하여 고객사 홈페이지 제작 및 유지 보수 업무를 맡았습니다.",
    },
  ],
};
