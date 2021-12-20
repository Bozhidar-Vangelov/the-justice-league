const confirmModalStyles = {
  main: [
    'min-w-screen',
    'h-screen',
    'animated',
    'fadeIn',
    'faster',
    'fixed',
    'left-0',
    'top-0',
    'flex',
    'justify-center',
    'items-center',
    'inset-0',
    'z-50',
    'outline-none',
    'focus:outline-none',
    'bg-no-repeat',
    'bg-center',
    'bg-cover',
  ].join(' '),
  position: ['absolute', 'bg-black', 'opacity-80', 'inset-0', 'z-0'].join(' '),
  box: [
    'w-full',
    'max-w-lg',
    'p-5',
    'relative',
    'mx-auto',
    'my-auto',
    'rounded-xl',
    'shadow-lg',
    'bg-gray-700',
    'opacity-80',
  ].join(' '),
  infoBox: [
    'font-serif',
    'text-center',
    'p-5',
    'flex-auto',
    'justify-center',
  ].join(' '),
  deleteIcon: [
    'w-16 ',
    'h-16',
    'flex',
    'items-center',
    'text-gray-500',
    'mx-auto',
  ].join(' '),
  heading: ['text-xl', 'text-gray-300', 'font-bold', 'py-4'].join(' '),
  text: ['text-m', 'text-gray-300', 'px-8'].join(' '),
  buttonsContainer: [
    'p-3',
    'mt-2',
    'text-center',
    'space-x-4',
    'md:block',
    'font-serif',
    'text-gray-800',
  ].join(' '),
  cancelButton: [
    'font-bold',
    'p-3',
    'pl-5',
    'pr-5',
    'm-2',
    'bg-gray-300',
    'hover:bg-gray-800',
    'hover:text-gray-400',
    'rounded-lg',
    'shadow-lg',
  ].join(' '),
  deleteButton: [
    'font-bold',
    'p-3',
    'pl-5',
    'pr-5',
    'm-2',
    'bg-red-600',
    'hover:bg-red-800',
    'hover:text-red-400',
    'rounded-lg',
    'shadow-lg',
  ].join(' '),
};

export default confirmModalStyles;
