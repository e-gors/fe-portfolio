export const servicesContent = [
  {
    title: "Custom Web Development",
    descriptions: [
      "Design and build tailored websites from scratch",
      "Develop responsive websites for desktop, tablet, and mobile devices",
    ],
    iconName: "ic_web_development",
  },
  {
    title: "Web Application Development",
    descriptions: [
      "Create dynamic and interactive web applications using frameworks like React.js and Laravel",
      "Integrate third-party APIs and services",
    ],
    iconName: "ic_web_application",
  },
  {
    title: "Content Management Systems (CMS)",
    descriptions: [
      "Develop or customize CMS platforms",
      "Implement and manage plugins, themes, and other extensions",
    ],
    iconName: "ic_content_management",
  },
  {
    title: "UI/UX Design",
    descriptions: [
      "Design user interfaces and user experiences for web and mobile applications",
      "Conduct user research and testing to improve usability and design",
    ],
    iconName: "ic_design",
  },
  {
    title: "Website Maintenance and Support",
    descriptions: [
      "Provide ongoing maintenance and updates for websites",
      "Fix bugs, optimize performance, and ensure security",
    ],
    iconName: "ic_web_maintenance",
  },
  {
    title: "Responsive Web Design",
    descriptions: [
      "Ensure websites are fully responsive and optimized for various devices and screen sizes",
    ],
    iconName: "ic_responsive_design",
  },
  {
    title: "Database Development",
    descriptions: [
      "Design and manage databases for web applications",
      "Develop and optimize database queries and structures",
    ],
    iconName: "ic_database",
  },
  {
    title: "API Development and Integration",
    descriptions: [
      "Create and integrate APIs for communication between applications and services",
      "Develop custom APIs for specific application needs",
    ],
    iconName: "ic_api_coding",
  },
  {
    title: "Website Redesign and Revamp",
    descriptions: [
      "Redesign existing websites to modernize their look and functionality",
      "Improve user experience and update content",
    ],
    iconName: "ic_rewire",
  },
  {
    title: "Training and Workshops",
    descriptions: [
      "Offer training sessions and workshops on web development technologies and best practices",
    ],
    iconName: "ic_workshop",
  },
  {
    title: "Branding and Identity",
    descriptions: [
      "Develop branding elements such as logos, color schemes, and typography for web projects",
    ],
    iconName: "ic_branding",
  },
];

export const services = servicesContent?.map((_, index) => ({
  service: servicesContent[index].title,
  descriptions: servicesContent[index].descriptions,
  image: `${process.env.PUBLIC_URL}/assets/icons/services/${servicesContent[index].iconName}.svg`,
}));
