const IMAGE_BASE_PATH = "/images";

export const BADGES = {
  AZ900: `${IMAGE_BASE_PATH}/AZ-900.svg`,
  AZURE_SKILL: `${IMAGE_BASE_PATH}/skill-azure-badge.svg`,
  FREECODECAMP: `${IMAGE_BASE_PATH}/freecodecamp.webp`,
  SFC: `${IMAGE_BASE_PATH}/badge-SFC.webp`,
  GSE: `${IMAGE_BASE_PATH}/gse.webp`,
  CAMUNDA: `${IMAGE_BASE_PATH}/camunda.webp`,
  UDEMY: `${IMAGE_BASE_PATH}/udemy.png`,
  LINKEDIN: `${IMAGE_BASE_PATH}/linkedin.webp`,
};

export const CERT_LINKS = {
  MS_LEARN:
    "https://learn.microsoft.com/api/credentials/share/es-es/FederinPastorGutierrezOrtiz-8049",
  LINKEDIN: "https://www.linkedin.com/learning/certificates",
  UDEMY: "https://www.udemy.com/certificate",
  CAMUNDA: "https://verify.skilljar.com/c",
};

export const createLinkedInCourse = (name, hash, date) => ({
  name,
  date,
  url: `${CERT_LINKS.LINKEDIN}/${hash}`,
});

export const createUdemyInCourse = (name, hash, date) => ({
  name,
  date,
  url: `${CERT_LINKS.UDEMY}/${hash}`,
});

export const createCamundaInCourse = (name, hash, date) => ({
  name,
  date,
  url: `${CERT_LINKS.CAMUNDA}/${hash}`,
});

export const createAzureCourse = (title, code, date, hash) => ({
  title,
  code,
  date,
  link: `${CERT_LINKS.MS_LEARN}/${hash}`,
  badgeUrl: BADGES.AZ900,
});

export const SOCIAL_LINKS = {
  LINKEDIN: "https://www.linkedin.com/in/federin-gutierrez-86042a173",
  GITHUB: "https://github.com/tu-usuario",
  EMAIL: "federingutierrez@gmail.com",
};
