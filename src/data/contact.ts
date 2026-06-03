export interface ContactLink {
  id: string;
  label: string;
  href: string;
  copyValue: string;
  display: string;

}

export const contactLinks: ContactLink[] = [
  {
    id: "email",
    label: "Email",
    href: "mailto:jaredgrahamholmes@gmail.com",
    copyValue: "jaredgrahamholmes@gmail.com",
    display: "jaredgrahamholmes@gmail.com",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jazza/",
    copyValue: "https://www.linkedin.com/in/jazza/",
    display: "in/jazza",
  },
  {
    id: "medium",
    label: "Medium",
    href: "https://medium.com/@jared-holmes",
    copyValue: "https://medium.com/@jared-holmes",
    display: "@jared-holmes",
  },
];
