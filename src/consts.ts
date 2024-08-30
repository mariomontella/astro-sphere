import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "NetworkMario",
  DESCRIPTION: "Welcome to my Blog!",
  AUTHOR: "Mario Montella",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
} 

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Writing on topics I am passionate about.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  
  { 
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "SEND here",
    HREF: "mailto:networkmario2.0@gmail.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "mario-dev",
    HREF: "https://github.com/mariomontella"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "mario-dev",
    HREF: "https://www.linkedin.com/in/mario-montella-54090b145/",
  },
  { 
    NAME: "X",
    ICON: "twitter-x",
    TEXT: "mario-dev-X",
    HREF: "https://x.com/MarioMontella_",
  },
]

