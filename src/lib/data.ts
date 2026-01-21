export type AboutMeSection = {
  heading: string;
  paragraphs: string[];
  cta: {
    label: string;
    target: string;
  };
};

export type CertificateItem = {
  name: string;
  imageSrc: string;
  alt: string;
  url?: string;
  imageLabel?: string;
};

export type CertificatesSection = {
  heading: string;
  items: CertificateItem[];
};

export type ContactInfoItem = {
  label: string;
  value: string;
  href?: string;
};

export type SocialLink = {
  label: string;
  url: string;
};

export type ContactSection = {
  heading: string;
  introHeading: string;
  introText: string;
  tooltipText: string;
  imageSrc: string;
  imageAlt: string;
  formFields: ContactFormField[];
  info: ContactInfoItem[];
  socials: SocialLink[];
};

export type ExperienceInfoItem = {
  number: string;
  text: string;
};

export type ExperienceHighlightPart = {
  text: string;
  highlight?: boolean;
};

export type ExperienceParagraph = {
  parts: ExperienceHighlightPart[];
};

export type ExperienceItem = {
  job: string;
  company: string;
  date: string;
  responsibilities: string[];
};

export type ExperienceSection = {
  heading: string;
  topLeft: {
    sinceLabel: string;
    infoItems: ExperienceInfoItem[];
    description: string;
  };
  topMiddle: {
    imageSrc: string;
    imageAlt: string;
  };
  topRight: {
    paragraphs: ExperienceParagraph[];
  };
  timeline: ExperienceItem[];
};

export type FooterLink = {
  name: string;
  section: string;
};

export type FooterSection = {
  brandName: string;
  brandSection: string;
  links: FooterLink[];
  copyright: string;
};

export type NavbarLink = {
  label: string;
  section: string;
};

export type NavbarSocialLink = {
  label: string;
  url: string;
};

export type NavbarSection = {
  brandName: string;
  brandInitials: string;
  links: NavbarLink[];
  homeSection: string;
  scrollOffset: number;
  underlineColor: string;
  cta: {
    label: string;
    section: string;
    offset: number;
  };
  socials: NavbarSocialLink[];
};

export type ProjectItem = {
  name: string;
  year?: string;
  align: "left" | "right";
  image: string;
  link: string;
};

export type ProjectsSection = {
  heading: string;
  descriptionLines: string[];
  items: ProjectItem[];
};

export type SubHeroSection = {
  highlights: string[];
};

export type ContactFormFieldValidation = {
  required?: string;
  minLength?: {
    value: number;
    message: string;
  };
  pattern?: {
    value: string;
    message: string;
  };
};

export type ContactFormField = {
  name: "from_name" | "from_email" | "message";
  type: "text" | "email" | "textarea";
  placeholder: string;
  rows?: number;
  validation?: ContactFormFieldValidation;
};

export const aboutMeSection: AboutMeSection = {
  heading: "About Me",
  paragraphs: [
    "Hi, I'm Mufaddal Calcuttawala, a passionate web developer with over 5 years of experience crafting responsive, user-focused web applications. I specialize in JavaScript, React.js, Node.js, Express, and MongoDB, with a strong foundation in building full-stack applications that are scalable, secure, and performant.",
    "During my time at PwC India, I worked on a variety of projects for international clients, gaining valuable experience in agile development, cross-functional collaboration, and delivering high-quality features on time. I regularly engaged with stakeholders to translate business needs into technical solutions, ensuring efficient and timely delivery.",
    "In addition to application development, I have experience in DevOps practices, including setting up and managing CI/CD pipelines using GitHub Actions, and deploying applications on AWS (EC2, S3, Lambda, etc.). I'm well-versed in automating deployments, ensuring smooth release cycles, and maintaining application uptime and reliability.",
    "Now based in Dubai, I'm actively seeking exciting opportunities where I can contribute to building modern, intuitive, and high-performance web applications. I'm also committed to continuous learning, always staying up to date with the latest tools, trends, and best practices in web development.",
  ],
  cta: {
    label: "My Projects",
    target: "projects",
  },
};

export const certificatesSection: CertificatesSection = {
  heading: "Certificates",
  items: [
    {
      name: "AWS Certified Developer",
      imageSrc: "/images/aws_developer.png",
      alt: "AWS Certified Developer badge",
      imageLabel: "Certified Developer",
    },
    {
      name: "AWS Cloud Practitioner",
      imageSrc: "/images/aws_cloudprac.png",
      alt: "AWS Cloud Practitioner badge",
      imageLabel: "Cloud Practitioner",
    },
  ],
};

export const contactSection: ContactSection = {
  heading: "Contact Me",
  introHeading: "Get In Touch",
  introText: "Feel free to reach out if you'd like to collaborate.",
  tooltipText: "The form uses EmailJS for sending emails.",
  imageSrc: "/images/email-image.png",
  imageAlt: "Email illustration",
  formFields: [
    {
      name: "from_name",
      type: "text",
      placeholder: "Your Name",
      validation: {
        required: "Your name is required.",
      },
    },
    {
      name: "from_email",
      type: "email",
      placeholder: "Your Email",
      validation: {
        required: "Your email is required.",
        pattern: {
          value: "^\\S+@\\S+$",
          message: "Enter a valid email.",
        },
      },
    },
    {
      name: "message",
      type: "textarea",
      placeholder: "Message",
      rows: 9,
      validation: {
        required: "A message is required.",
        minLength: {
          value: 10,
          message: "Message must be at least 10 characters.",
        },
      },
    },
  ],
  info: [
    {
      label: "Email",
      value: "calcutta53.mufaddal@gmail.com",
      href: "mailto:calcutta53.mufaddal@gmail.com",
    },
    {
      label: "Phone",
      value: "+971556024553",
      href: "tel:+971556024553",
    },
    {
      label: "Location",
      value: "Dubai, UAE",
    },
  ],
  socials: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/mufaddal-calcuttawala",
    },
    {
      label: "GitHub",
      url: "https://github.com/mufaddal-viit",
    },
  ],
};

export const experienceSection: ExperienceSection = {
  heading: "Experience",
  topLeft: {
    sinceLabel: "Since 2022",
    infoItems: [
      {
        number: "PWC",
        text: "India",
      },
    ],
    description:
      "With 5 years of experience building dynamic and user-friendly complete web applications.",
  },
  topMiddle: {
    imageSrc: "images/experience-image.png",
    imageAlt: "My experience",
  },
  topRight: {
    paragraphs: [
      {
        parts: [
          {
            text: "During my tenure at ",
          },
          {
            text: "PWC",
            highlight: true,
          },
          {
            text:
              ", I contributed to the development of dynamic and responsive user interfaces, adhering to best practices for scalability, performance, and maintainability. I built Single Page Applications (SPAs) using ",
          },
          {
            text: "React, Redux, React Router, and Hooks",
            highlight: true,
          },
          {
            text:
              ", following a component-based architecture and implementing reusable UI components across projects.",
          },
        ],
      },
      {
        parts: [
          {
            text: "On the backend, I developed and maintained RESTful APIs using ",
          },
          {
            text: "Node.js, Express, and MongoDB",
            highlight: true,
          },
          {
            text:
              ", implementing secure authentication and authorization mechanisms, and optimizing data handling for high-traffic applications.",
          },
        ],
      },
      {
        parts: [
          {
            text:
              "I was also involved in cloud infrastructure and deployment tasks, managing CI/CD pipelines and deploying applications to ",
          },
          {
            text: "AWS",
            highlight: true,
          },
          {
            text: " services like EC2, S3, and Lambda. I containerized applications using ",
          },
          {
            text: "Docker",
            highlight: true,
          },
          {
            text: ", enabling consistent development and deployment environments.",
          },
        ],
      },
      {
        parts: [
          {
            text:
              "In addition to JavaScript technologies, I have worked with ",
          },
          {
            text: "Python",
            highlight: true,
          },
          {
            text:
              " for automation and scripting tasks, and developed backend services and APIs using ",
          },
          {
            text: "PHP",
            highlight: true,
          },
          {
            text: ", particularly in legacy systems and CMS platforms.",
          },
        ],
      },
      {
        parts: [
          {
            text:
              "My role required cross-functional collaboration with designers, DevOps, and QA teams to ensure end-to-end project success. I consistently focused on writing clean, modular, and testable code, while staying up to date with modern development workflows and technologies.",
          },
        ],
      },
    ],
  },
  timeline: [
    {
      job: "Front-End Developer",
      company: "PWC",
      date: "2022 - 2025",
      responsibilities: [
        "Implementing reusable components.",
        "Participating in large scale application.",
        "Working on the performance of web applications.",
        "Generating new ideas for better user experience.",
      ],
    },
  ],
};

export const footerSection: FooterSection = {
  brandName: "Mufaddal Calcuttawala",
  brandSection: "about",
  links: [
    {
      name: "About Me",
      section: "about",
    },
    {
      name: "Skills",
      section: "skills",
    },
    {
      name: "Experience",
      section: "experience",
    },
    {
      name: "Projects",
      section: "projects",
    },
  ],
  copyright: "ЖИ 2026 Mufaddal | All Rights Reserved.",
};

export const navbarSection: NavbarSection = {
  brandName: "Mufaddal Calcuttawala",
  brandInitials: "MC",
  links: [
    { label: "Home", section: "home" },
    { label: "About Me", section: "about" },
    { label: "Skills", section: "skills" },
    { label: "Experience", section: "experience" },
    { label: "Projects", section: "projects" },
    { label: "Contact", section: "contact" },
  ],
  homeSection: "home",
  scrollOffset: -130,
  underlineColor: "#00fffc",
  cta: {
    label: "Hire Me",
    section: "contact",
    offset: -120,
  },
  socials: [
    {
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/mufaddal-calcuttawala",
    },
    {
      label: "GitHub",
      url: "https://github.com/mufaddal-viit",
    },
  ],
};

export const projectsSection: ProjectsSection = {
  heading: "Projects",
  descriptionLines: [
    "I have worked on web development projects, ranging from responsive websites",
    "to full-stack applications and complex front-end interfaces.",
  ],
  items: [
    {
      name: "Food App",
      year: "",
      align: "right",
      image: "/images/MFKitchen.png",
      link: "https://mufaddal-viit.github.io/FoodApp/",
    },
    {
      name: "Car Rental Management FrontEnd",
      year: "",
      align: "left",
      image: "/images/carrental.png",
      link: "https://github.com/mufaddal-viit/Car-Autorent",
    },
    {
      name: "Ecommerse Website",
      year: "",
      align: "right",
      image: "/images/MFEbazaar.png",
      link: "https://mufaddal-viit.github.io/eBazaar",
    },
    {
      name: "Ball Race game",
      year: "",
      align: "left",
      image: "/images/ballrace.png",
      link: "https://ball-race.netlify.app/",
    },
  ],
};

export const subHeroSection: SubHeroSection = {
  highlights: ["Fast Learner", "Team Work", "Details Master"],
};

export const data = {
  aboutMeSection,
  certificatesSection,
  contactSection,
  experienceSection,
  footerSection,
  navbarSection,
  projectsSection,
  subHeroSection,
};
