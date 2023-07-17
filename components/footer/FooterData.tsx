import { FiLinkedin, FiTwitter, FiInstagram, FiFacebook } from "react-icons/fi"

export const footerLinks = [
  {
    name: 'About Us',
    href: '#about',
  },
  {
    name: 'Our Team',
    href: '#teams',
  },
  {
    name: 'Services',
    href: '#service',
  },
  {
    name: 'Our Works',
    href: '#works',
  },
]

export const socialLinks = [
    {
        Icon: <FiFacebook size={20} />,
        path: "https://www.facebook.com/",
    },
    {
        Icon: <FiTwitter size={20} />,
        path: "https://twitter.com/",
    },
    {
        Icon: <FiInstagram size={20} />,
        path: "https://www.instagram.com/",
    },
    {
        Icon: <FiLinkedin size={20} />,
        path: "https://www.linkedin.com/",
    },
]
