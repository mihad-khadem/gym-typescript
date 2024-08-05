import { SelectedPage } from '@/shared/types';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { useEffect } from 'react';

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Link({ page, selectedPage, setSelectedPage }: Props) {
  const lowerCasePage = page.toLowerCase().replace(/\s+/g, '') as SelectedPage;

  // Effect to detect active section
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById(lowerCasePage);
      if (section) {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
          setSelectedPage(lowerCasePage);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lowerCasePage, setSelectedPage]);

  return (
    <AnchorLink
      
      className={`${selectedPage === lowerCasePage ? 'text-primary-500' : ''}
        transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}
    >
      {page}
    </AnchorLink>
  );
}

export default Link;
