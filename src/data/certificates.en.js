import {
  BADGES,
  createLinkedInCourse,
  createUdemyInCourse,
  createCamundaInCourse,
  createAzureCourse,
} from "./assets";

const MS_LEARN_BASE =
  "https://learn.microsoft.com/api/credentials/share/es-es/FederinPastorGutierrezOrtiz-8049";

export const certificatesEn = [
  {
    title: "Scrum Fundamentals Certified SFC",
    code: "SFC",
    date: "Apr 2026",
    link: "https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/ScrumFundamentalsCertified-FederinPastorGutiérrezOrtiz-1160799.pdf",
    badgeUrl: BADGES.SFC,
  },
  {
    title: "Azure Administration Tasks",
    code: "Applied Skill",
    date: "Jan 2026",
    link: `${MS_LEARN_BASE}/73BC713249779505?sharingId=3350A3377F436EAD`,
    badgeUrl: BADGES.AZURE_SKILL,
    type: "skill",
  },
  {
    title: "C#: Classes, Properties & Methods",
    code: "Applied Skill",
    date: "Jan 2026",
    link: `${MS_LEARN_BASE}/5A219EF1BFABB698`,
    badgeUrl: BADGES.AZURE_SKILL,
    type: "skill",
  },
  {
    title: "General English Course at Pre - Intermediate Level",
    code: "Language",
    date: "2026",
    link: "https://drive.google.com/file/d/1uNt8t9DPqlDtI6xN28udh6igX0dPP26o/view",
    badgeUrl: BADGES.GSE,
    isEnglish: true,
  },
  {
    title: "Foundational C# with Microsoft",
    code: "C# Basics",
    date: "Oct 2024",
    link: "https://www.freecodecamp.org/certification/federingutierrez/foundational-c-sharp-with-microsoft",
    badgeUrl: BADGES.FREECODECAMP,
  },
  createAzureCourse(
    "Azure AI Fundamentals",
    "AI-900",
    "May 2023",
    "D1F3EAF234E78227",
  ),
  createAzureCourse(
    "Azure Fundamentals",
    "AZ-900",
    "Sep 2022",
    "1CD60C234C7F69B3",
  ),
  createAzureCourse(
    "Azure Data Fundamentals",
    "DP-900",
    "May 2022",
    "4106B302B5EDD375",
  ),
  {
    title: "Camunda Academy Path",
    code: "BPMN 2.0",
    date: "2024 - 2026",
    isHub: true,
    hubType: "camunda",
    badgeUrl: BADGES.CAMUNDA,
    courses: [
      createCamundaInCourse(
        "Camunda 8 - Demonstration",
        "4apikj9fmstu",
        "Jan 2024",
      ),
      createCamundaInCourse(
        "Camunda 8 - Getting Started with Process Modeling",
        "o4c7rrduch4i",
        "Sep 2024",
      ),
    ],
  },
  {
    title: "LinkedIn Learning Path",
    code: "+10 Cursos",
    date: "2018 - 2026",
    link: "https://www.linkedin.com/in/tu-perfil/details/certifications/",
    isHub: true,
    badgeUrl: BADGES.LINKEDIN,
    courses: [
      createLinkedInCourse(
        "Web Security Essential Training",
        "8942c7748f071c994dc91cce1217014ae5aa987b484060569cf75720c3a46b11",
        "Mar 2026",
      ),
      createLinkedInCourse(
        "Programming Foundations: Object-Oriented Design",
        "7a407da5acd947a2957913c04e16109b920bb708b3665f1c47c3130ad952b2ce",
        "Feb 2026",
      ),
      createLinkedInCourse(
        "C# Unit Testing with xUnit",
        "ed0680473388d150c8f696ad346723b9bd7209c5171eb02c6246d89c0cd84d13",
        "Feb 2026",
      ),
      createLinkedInCourse(
        "Learn API Documentation with JSON and XML",
        "814c5a154140fa9f2fd79a1117b7394307fdd2095012efa10b453b9722eb3741",
        "Dec 2025",
      ),
      createLinkedInCourse(
        "Java Advanced 2",
        "e4da639d87deb19d69b13bdf8f36b70c71717c8f114745e7fb423a25af7ceb70",
        "Nov 2025",
      ),
      createLinkedInCourse(
        ".NET 7: Entity Framework Core Essential Training",
        "0ccd4c6cc72c6c0fdc250b870a1e95c5f3f828e4574672d9070dce5dca400d81",
        "Nov 2025",
      ),
      createLinkedInCourse(
        "Azure: Advanced Microservices for .NET Developers",
        "47093782075a92b3bb82bf6b8700aa78f8227f7a33a0f7d23aeb76405d087679",
        "Oct 2025",
      ),
      createLinkedInCourse(
        "Business Foundations",
        "2e26ebb203a2348b9c4f0f8b3144a56de6a852d4ef192d1e0cdf5ac26424c222",
        "Aug 2025",
      ),
      createLinkedInCourse(
        ".NET: Domain-Driven Design practical",
        "73cd68a75c95d3ef5241c9551f6a6214c8d3fc639df7f82569ab251c691414cf",
        "July 2025",
      ),
      createLinkedInCourse(
        "Software Architecture: Domain Driven Design",
        "2054b2f123958f8aacb3a38a2ecc9c88ead6255fa89fdc032131889fc177d501",
        "July 2025",
      ),
      createLinkedInCourse(
        "Azure: Microservices essential training",
        "99ef9bfdf754eeed39ccc4ade2102bbb5692211c52d2a808d5d74c0a8697a349",
        "Aug 2019",
      ),
    ],
  },
  {
    title: "Udemy Path",
    code: "+1 Cursos",
    date: "2020 - 2026",
    isHub: true,
    hubType: "udemy",
    badgeUrl: BADGES.UDEMY,
    courses: [
      createUdemyInCourse(
        "curso-az-900-azure-fundamentals-teoria-test-labs",
        "UC-fb9ef5b8-e06c-4a06-bf1c-a73991ce0517",
        "Oct 2022",
      ),
      createUdemyInCourse(
        "Angular 5 y TypeScript",
        "UC-0440eabc-dc1c-42bd-9911-9c74a1e04a9e",
        "2020",
      ),
    ],
  },
];
