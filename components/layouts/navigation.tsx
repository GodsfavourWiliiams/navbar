import { useState } from 'react';
import Link from 'next/link';
import headerNav from '../data/headerNav';
import { useRouter } from 'next/router'


const Header = () => {
  const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);
  const router = useRouter();
  const activeId = router.pathname

  return (
    <header className="flex-1 bg-red-900 backdrop-md absolute md:relative rounded left-20 right-0 shadow md:shadow-none top-20 md:top-0 ">
        <div className="h-fit flex items-center flex-col md:flex-row space-x-2 flex-1 justify-end font-medium  p-4 bg-white ">
          {headerNav.map(({ href, id, label,...props }, i) => {
            return (
              <Link href={href || `/${id}`} key={i}>
                <span
                  className={`py-12 px-3 font-medium text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-700 ${
                    (id && activeId === id) ||
                    (href && !!router.asPath.match(new RegExp(href)))
                      ? 'text-indigo-700'
                      : 'text-gray-900'
                  }`}
                  {...props}
                >
                  {label}
                </span>
              </Link>
            );
          })}

        </div>
    </header>
  );
};

export default Header;
