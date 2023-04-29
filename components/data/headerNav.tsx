interface NavLinkProps {
  isActive?: boolean;
  href?: string;
  id?: string;
  label: React.ReactNode;
}

const headerNav: NavLinkProps[] = [
  { id: '/', label: 'Home',  },
  { id: '/about', label: 'About', },
  {
    href: '/sevices',
    label: 'Services',
  },
  { href: '/portfolio', label: 'Portfolio', },
  { href: '/contact', label: 'Contact', },
]

export default headerNav;