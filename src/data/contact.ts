export interface ContactLink {
  id: string;
  label: string;
  href: string;
  copyValue: string;
  display: string;
  todo?: boolean;
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
    href: "https://www.linkedin.com/in/jaredgrahamholmes",
    copyValue: "https://www.linkedin.com/in/jaredgrahamholmes",
    display: "in/jaredgrahamholmes",
  },
  {
    // TODO: replace with the real Medium profile/publication URL once available.
    id: "medium",
    label: "Medium",
    href: "https://medium.com/",
    copyValue: "https://medium.com/",
    display: "Medium — add URL",
    todo: true,
  },
];
