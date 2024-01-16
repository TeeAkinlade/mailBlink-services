import image1 from "@/public/assets/images/Frame 57.svg";
import image2 from "@/public/assets/images/Feature Icon with circle.svg";
import image3 from "@/public/assets/images/Feature Icon with circle (1).svg";
import image4 from "@/public/assets/images/Feature Icon with circle (2).svg";
import image5 from "@/public/assets/images/Feature Icon with circle (4).svg";
import image6 from "@/public/assets/images/facebook.svg";
import image7 from "@/public/assets/images/Twitter.svg";
import image8 from "@/public/assets/images/LinkedIn.svg";
import image9 from "@/public/assets/images/Instagram.svg";
import image10 from "@/public/assets/images/email-icon.svg";
import image11 from "@/public/assets/images/Mobile.svg";
import photo2 from "@/public/assets/images/unsplash_g1Kr4Ozfoac.svg";
import photo3 from "@/public/assets/images/unsplash_QckxruozjRg.svg";
import photo4 from "@/public/assets/images/unsplash_UpsEF48wAgk.svg";
import { IoMdMail } from "react-icons/io";
import { FaSms, FaWpforms } from "react-icons/fa";

export const NAV_LINKS = [
  {
    href: "",
    key: "features",
    label: "Features",
    dropDown: [
      {
        href: "/email-marketing",
        key: "email-marketing",
        label: "Email Marketing",
      },
      {
        href: "/sales-funnel",
        key: "Sales Funnel",
        label: "SmS Marketing",
      },
      {
        href: "/forms",
        key: "forms",
        label: "Landing Pages",
      },
    ],
  },
  { href: "/about", key: "about", label: "About" },
  { href: "/resources", key: "resources", label: "Resources" },
  { href: "/blog", key: "blog", label: "Blog" },
  { href: "/contact-us", key: "contact_us", label: "Contact Us" },
];

export const campaignDetailsList = [
  {
    id: 1,
    photo: image1,
    alt: "Feature Icon",
    heading: "Community Support",
    content:
      " Connect, learn, and grow with our vibrant community of entrepreneurs. Gain insights, share experiences, and forge partnerships that transcend the digital space.",
  },
  {
    id: 2,
    photo: image1,
    alt: "Feature Icon",
    heading: "Easy Integration",
    content:
      "Smooth Integrated with Microsoft Office 365.The text will be populated with the right information later on.",
  },
];

export const campaignFeaturesDetails = [
  {
    id: 1,
    photo: image2,
    alt: "Feature Icon with circle",
    heading: "Community Support",
    content:
      "Connect, learn, and grow with our vibrant community of entrepreneurs. Gain insights, share experiences, and forge partnerships that transcend the digital space.",
  },
  {
    id: 2,
    photo: image3,
    alt: "Feature Icon with circle",
    heading: "User-Friendly Experience",
    content:
      "Navigate effortlessly with our intuitive platform. No technical hurdles—just a seamless experience, allowing you to focus on what you do best: running your business.",
  },
  {
    id: 3,
    photo: image4,
    alt: "Feature Icon with circle",
    heading: "Bespoke Solutions",
    content:
      "We recognize that every business is unique. Our platform offers customizable solutions to suit your specific needs, ensuring a personalized approach to your digital success.",
  },
  {
    id: 4,
    photo: image5,
    alt: "Feature Icon with circle",
    heading: "Affordability Without Compromise",
    content:
      "Experience enterprise-level features without the hefty price tag. We believe in providing affordable solutions that deliver exceptional value.",
  },
];

export const servicesData = [
  {
    id: 1,
    icon: <IoMdMail size={30} />,
    title: "Email Marketing",
    contents:
      "Unlock the power of personalized messaging with our Email Marketing service. Craft engaging campaigns, nurture leads, and build lasting relationships with your audience.",
    href: "#",
    linkText: "Learn more",
  },
  {
    id: 2,
    icon: <FaSms size={30} />,
    title: "Social Media",
    contents:
      "Boost your brand across platforms with our Social Media Management tool. Schedule posts, analyze performance, and engage with your audience seamlessly, all from one central hub.",
    href: "/sms",
    linkText: "Learn more",
  },
  {
    id: 3,
    icon: <FaWpforms size={30} />,
    title: "Landing Pages",
    contents:
      "Build stunning landing pages with our intuitive Form Building tools. Capture leads, gather valuable insights, and guide visitors through a seamless journey from discovery to conversion.",
    href: "#",
    linkText: "Learn more",
  },
  {
    id: 4,
    icon: <FaSms size={30} />,
    title: "WhatsApp Marketing",
    contents:
      "Our WhatsApp Marketing service allows you to engage customers personally, share updates, and drive conversions—all from the convenience of their favorite messaging app.",
    href: "#",
    linkText: "Learn more",
  },
  {
    id: 5,
    icon: <FaSms size={30} />,
    title: "Content Marketing",
    contents:
      "Create compelling content effortlessly. Our Content Marketing tools empower you to craft impactful narratives, share your brand story, and establish authority in your industry.",
    href: "#",
    linkText: "Learn more",
  },
  {
    id: 6,
    icon: <IoMdMail size={30} />,
    title: "Sales Funnel",
    contents:
      "Optimize your sales process with our Sales Funnel feature. From awareness to conversion, track customer journeys, and turn leads into loyal customers, ensuring every interaction counts.",
    href: "#",
    linkText: "Learn more",
  },
];

// Team Section of About page

export const teams = [
  {
    id: 1,
    image: "/assets/images/team-01.png",
    name: "Michal Kosinski",
    position: "General Manager.",
  },
  {
    id: 2,
    image: "/assets/images/team-02.png",
    name: "Michal Kosinski",
    position: "General Manager.",
  },
  {
    id: 3,
    image: "/assets/images/team-03.png",
    name: "Michal Kosinski",
    position: "General Manager.",
  },
  {
    id: 4,
    image: "/assets/images/team-04.png",
    name: "Michal Kosinski",
    position: "General Manager.",
  },
  {
    id: 5,
    image: "/assets/images/team-05.png",
    name: "Michal Kosinski",
    position: "General Manager.",
  },
  {
    id: 6,
    image: "/assets/images/team-06.png",
    name: "Michal Kosinski",
    position: "General Manager.",
  },
];

export const socialMediaLinks = [
  {
    id: 1,
    href: "#",
    photo: image6,
    alt: "facebook-icon",
  },
  {
    id: 2,
    href: "#",
    photo: image7,
    alt: "twitter-icon",
  },
  {
    id: 3,
    href: "#",
    photo: image8,
    alt: "linkedin-icon",
  },
  {
    id: 4,
    href: "#",
    photo: image9,
    alt: "instagram-icon",
  },
];

export const footerLinks = [
  {
    id: 1,
    title: "Resources",
    links: [
      { id: 1, link: "Blog", href: "/blog" },
      { id: 2, link: "Marketing Guides", href: "#" },
      { id: 3, link: "About Us", href: "/about" },
      { id: 4, link: "Contact Us", href: "/contact-us" },
    ],
  },
  {
    id: 2,
    title: "Services",
    links: [
      { id: 1, link: "Email Marketing", href: "/email-marketing" },
      { id: 2, link: "Social Media", href: "/socia-media" },
      { id: 3, link: "Sales Funnel", href: "/sales-funnel" },
      { id: 4, link: "Landing Pages", href: "#" },
    ],
  },
];

export const contacts = [
  {
    id: 1,
    photo: image10,
    alt: "Email-icon",
    title: "Support: ",
    details: "hello@vendgenix.co",
  },
  {
    id: 2,
    photo: image11,
    alt: "Mobile-icon",
    title: "Phone: ",
    details: "+234 806 736 0647",
    styles: "h-6 w-8",
  },
];

// Hero section of email marketing page
export const stats = [
  {
    id: 1,
    title: "3 billion+",
    details: "Calling numbers connected",
  },
  {
    id: 2,
    title: "100 billion+",
    details: "Text messages sent",
  },
  {
    id: 3,
    title: "121 million+",
    details: "phone numbers given out",
  },
];

// Product section of email page
export const products = [
  {
    id: 1,
    position: "relative",
    variations: [
      {
        bg: "#d2f9e8",
        top: "0",
        image: "/assets/icons/github.icon.svg",
        title: "3 billion+",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atquecupiditate delectus est distinctio veritatis.",
      },
      {
        bg: "#d2f9e8",
        top: "2.5rem",
        image: "/assets/icons/github.icon.svg",
        title: "3 billion+",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atquecupiditate est distinctio veritatis.",
      },
      {
        bg: "#d2f9e8",
        top: "5rem",
        image: "/assets/icons/github.icon.svg",
        title: "3 billion+",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus est distinctio veritatis.",
      },
    ],
  },
  {
    id: 2,
    variations: [
      {
        bg: "#d2f9e8",
        top: "0",
        image: "/assets/icons/github.icon.svg",
        title: "3 billion+ ",
        details:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. delectus est distinctio veritatis.",
      },
      {
        bg: "#d2f9e8",
        top: "2.5rem",
        image: "/assets/icons/github.icon.svg",
        title: "3 billion+",
        details: "Calling numbers connected",
      },
      {
        bg: "#d2f9e8",
        top: "5rem",
        image: "/assets/icons/github.icon.svg",
        title: "3 billion+",
        details: "Calling numbers connected",
      },
    ],
  },
];

// Community section of Hero page
export const items = [
  {
    id: 1,
    image: "/assets/icons/support.svg",
    title: "Community Support",
    description:
      "Community Support is also available for all open source users.",
  },
  {
    id: 2,
    image: "/assets/icons/github.icon.svg",
    title: "MailBlink on GitHub",
    description: "General Manager.",
  },
];

// Regex for email validation
export const emailRegex = {
  pattern:
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
};

// Regex for password validation
export const passwordRegex = {
  pattern: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
};

// input details for change-password page
export const changePasswordInput = [
  {
    id: "email",
    label: "Email",
    placeholder: "enter email",
    type: "text",
  },
  {
    id: "newPassword",
    label: "New password",
    placeholder: "enter new password",
    type: "password",
  },
  {
    id: "confirmPassword",
    label: "Confirm password",
    placeholder: "re-enter password",
    type: "password",
  },
];

// testimonial section
export const testimonials = [
  {
    id: 1,
    variations: [
      {
        feedback:
          "I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow1",
      },
      {
        feedback: "Landify saved our time in designing my company page.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow1",
      },
      {
        feedback:
          "I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow1",
      },
    ],
  },
  {
    id: 2,
    variations: [
      {
        feedback:
          "I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow2",
      },
      {
        feedback: "Landify saved our time in designing my company page.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow2",
      },
      {
        feedback:
          "I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow2",
      },
    ],
  },
  {
    id: 3,
    variations: [
      {
        feedback:
          "I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow3",
      },
      {
        feedback: "Landify saved our time in designing my company page.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow3",
      },
      {
        feedback:
          "I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow3",
      },
    ],
  },
  {
    id: 4,
    variations: [
      {
        feedback:
          "I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow4",
      },
      {
        feedback: "Landify saved our time in designing my company page.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow4",
      },
      {
        feedback:
          "I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow4",
      },
    ],
  },
  {
    id: 5,
    variations: [
      {
        feedback:
          "I was looking for a landing page UI Kit. Landify is one of the best landing page UI kit I have come across. It’s so flexible, well organised and easily editable.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow5",
      },
      {
        feedback: "Landify saved our time in designing my company page.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow5",
      },
      {
        feedback:
          "I used landify and created a landing page for my startup within a week. The Landify UI Kit is simple and highly intuitive, so anyone can use it.",
        image: "/assets/images/display_pic.jpeg",
        name: "Floyd Miles",
        position: "Co-Founder, BookMyShow5",
      },
    ],
  },
];

// constants for notification page
export const webNotifications = [
  {
    id: "new-subscriber",
    label: "New subscriber",
  },
  {
    id: "post-like",
    label: "Post like",
  },
  {
    id: "you-followed",
    label: "Someone you followed posted",
  },
  {
    id: "campaign-sent",
    label: "Campaigns sent out",
  },
  {
    id: "campaign-delivered",
    label: " Campaign delivery",
  },
];

export const mailNotifications = [
  {
    title: "Weekly newsletter",
    label: "A small text about what the newsletters might contain",
  },
  {
    title: "Account summary",
    label: "A small text about what the newsletters might contain",
  },
];

// accounts page
export const passwordInputs = [
  {
    id: "newPassword",
    label: "New password",
  },
  {
    id: "confirmPassword",
    label: "Confirm password",
  },
];

export const resourceHeroData = [
  {
    id: 1,
    variations: [
      {
        id: 1,
        content1:
          "Read the latest insights from Opmantek engineering about Open-AudIT.",
      },
      {
        id: 2,
        content2:
          "Network Management Information System (NMIS) and the Opmantek suite of products.",
      },
      {
        id: 3,
        content3:
          "Share your results with potential employers to display your strengths and unique fit.",
      },
    ],
  },
  {
    id: 2,
    variations: [
      {
        id: 1,
        content1:
          "Read the latest insights from Opmantek engineering about Open-AudIT.",
      },
      {
        id: 2,
        content2:
          "Network Management Information System (NMIS) and the Opmantek suite of products.",
      },
      {
        id: 3,
        content3:
          "Share your results with potential employers to display your strengths and unique fit.",
      },
    ],
  },
  {
    id: 3,
    variations: [
      {
        id: 1,
        content1:
          "Read the latest insights from Opmantek engineering about Open-AudIT.",
      },
      {
        id: 2,
        content2:
          "Network Management Information System (NMIS) and the Opmantek suite of products.",
      },
      {
        id: 3,
        content2:
          "Share your results with potential employers to display your strengths and unique fit.",
      },
    ],
  },
  {
    id: 4,
    variations: [
      {
        id: 1,
        content1:
          "Read the latest insights from Opmantek engineering about Open-AudIT.",
      },
      {
        id: 2,
        content2:
          "Network Management Information System (NMIS) and the Opmantek suite of products.",
      },
      {
        id: 3,
        content3:
          "Share your results with potential employers to display your strengths and unique fit.",
      },
    ],
  },
  {
    id: 5,
    variations: [
      {
        id: 1,
        content1:
          "Read the latest insights from Opmantek engineering about Open-AudIT.",
      },
      {
        id: 2,
        content2:
          "Network Management Information System (NMIS) and the Opmantek suite of products.",
      },
      {
        id: 3,
        content3:
          "Share your results with potential employers to display your strengths and unique fit.",
      },
    ],
  },
];

export const blogTitles = [
  {
    id: 1,
    title: "Blogs",
  },
  {
    id: 2,
    title: "Webinars",
  },
  {
    id: 3,
    title: "Enterprise",
  },
  {
    id: 4,
    title: "Case Studies",
  },
];

export const blogs = [
  {
    id: 1,
    src: photo4,
    heading: "Reasoning Ability",
    content: "Check your reasoning abilities.",
    content2:
      "Discover the top traits that help you excel and determine your work fit.",
  },
  {
    id: 2,
    src: photo2,
    heading: "Cope Inventory",
    content:
      "Discover the top traits that help you excel and determine your work fit.",
    content2: "Check your reasoning abilities.",
  },
  {
    id: 3,
    src: photo3,
    heading: "Cope Inventory",
    content: "Discover your communication style! Really useful for teams.",
    content2: "Check your reasoning abilities",
  },
  {
    id: 4,
    src: photo4,
    heading: "Entrepreneurial Personality",
    content:
      "Get a clean picture of yourself with insights into your personality and character.",
    content2: "Check your reasoning abilities",
  },
  {
    id: 5,
    src: photo3,
    heading: "Reasoning Ability",
    content:
      "Check your reasoning abilities. Discover the top traits that help you excel and determine your work fit.",
    content2: "Check your reasoning abilities",
  },
  {
    id: 6,
    src: photo2,
    heading: "Reasoning Ability",
    content:
      "Check your reasoning abilities. Discover the top traits that help you excel and determine your work fit.",
    content2: "Check your reasoning abilities",
  },
];

export const webinars = [
  {
    id: 1,
    src: photo3,
    heading: "Reasoning Ability",
    content: "Check your reasoning abilities.",
    content2:
      "Discover the top traits that help you excel and determine your work fit.",
  },
  {
    id: 2,
    src: photo4,
    heading: "Cope Inventory",
    content:
      "Discover the top traits that help you excel and determine your work fit.",
    content2: "Check your reasoning abilities.",
  },
  {
    id: 3,
    src: photo3,
    heading: "Cope Inventory",
    content: "Discover your communication style! Really useful for teams.",
    content2: "Check your reasoning abilities",
  },
  {
    id: 4,
    src: photo4,
    heading: "Entrepreneurial Personality",
    content:
      "Get a clean picture of yourself with insights into your personality and character.4",
  },
  {
    id: 5,
    src: photo3,
    heading: "Reasoning Ability",
    content:
      "Check your reasoning abilities. Discover the top traits that help you excel and determine your work fit.",
  },
  {
    id: 6,
    src: photo3,
    heading: "Reasoning Ability",
    content:
      "Check your reasoning abilities. Discover the top traits that help you excel and determine your work fit.",
  },
];

export const enterprise = [
  {
    id: 1,
    src: photo3,
    heading: "Reasoning Ability",
    content: "Check your reasoning abilities.",
    content2:
      "Discover the top traits that help you excel and determine your work fit.",
  },
  {
    id: 2,
    src: photo4,
    heading: "Cope Inventory",
    content:
      "Discover the top traits that help you excel and determine your work fit.",
    content2: "Check your reasoning abilities.",
  },
  {
    id: 3,
    src: photo2,
    heading: "Cope Inventory",
    content: "Discover your communication style! Really useful for teams.",
    content2: "Check your reasoning abilities",
  },
  {
    id: 4,
    src: photo4,
    heading: "Entrepreneurial Personality",
    content:
      "Get a clean picture of yourself with insights into your personality and character.",
  },
  {
    id: 5,
    src: photo3,
    heading: "Reasoning Ability",
    content:
      "Check your reasoning abilities. Discover the top traits that help you excel and determine your work fit.",
  },
  {
    id: 6,
    src: photo3,
    heading: "Reasoning Ability",
    content:
      "Check your reasoning abilities. Discover the top traits that help you excel and determine your work fit.",
  },
];

export const caseStudies = [
  {
    id: 1,
    src: photo4,
    heading: "Reasoning Ability",
    content: "Check your reasoning abilities.",
    content2:
      "Discover the top traits that help you excel and determine your work fit.",
  },
  {
    id: 2,
    src: photo2,
    heading: "Cope Inventory",
    content:
      "Discover the top traits that help you excel and determine your work fit.",
    content2: "Check your reasoning abilities.",
  },
  {
    id: 3,
    src: photo3,
    heading: "Cope Inventory",
    content: "Discover your communication style! Really useful for teams.",
    content2: "Check your reasoning abilities",
  },
  {
    id: 4,
    src: photo4,
    heading: "Entrepreneurial Personality",
    content:
      "Get a clean picture of yourself with insights into your personality and character.",
  },
  {
    id: 5,
    src: photo2,
    heading: "Reasoning Ability",
    content:
      "Check your reasoning abilities. Discover the top traits that help you excel and determine your work fit.",
  },
  {
    id: 6,
    src: photo3,
    heading: "Reasoning Ability",
    content:
      "Check your reasoning abilities. Discover the top traits that help you excel and determine your work fit.",
  },
];

import { FaLinkedin, FaGithub, FaTwitterSquare } from "react-icons/fa";
export const teamSocialIcons = [
  { icon: <FaLinkedin />, key: "linkedinUrl" },
  { icon: <FaGithub />, key: "githubUrl" },
  { icon: <FaTwitterSquare />, key: "twitterUrl" },
];
