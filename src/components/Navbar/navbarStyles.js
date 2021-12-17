const navbarStyles = {
  nav: [
    'flex',
    'justify-between',
    'items-center',
    'h-16',
    'bg-gray-700',
    'relative',
    'shadow-sm',
    'font-serif',
    'text-gray-300 ',
    'font-bold ',
    'sticky',
    'top-0',
  ].join(' '),
  dropdownIcon: ['px-4', 'cursor-pointer', 'xl:hidden'].join(' '),
  dropdownContent: [
    'grid',
    'grid-rows-4',
    'text-center',
    'items-center',
    'bg-gray-700',
    'shadow-sm',
    'text-gray-300',
  ].join(' '),
};

export default navbarStyles;
