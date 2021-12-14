const myAccountStyles = {
  main: ['grid', 'min-h-screen', 'place-items-center', 'font-serif'].join(' '),
  boxContainer: [
    'container',
    'lg:w-2/6',
    'xl:w-2/7',
    'sm:w-full',
    'md:w-2/3',
    'shadow-lg',
    'm-4',
    'border-none',
    'duration-200',
    'easy-in-out',
    'bg-gray-700',
    'rounded-lg',
    'shadow-lg',
  ].join(' '),
  backgroundImage: ['h-40', 'overflow-hidden'].join(' '),
  profileImageContainer: ['flex', 'justify-center', 'px-5', '-mt-12'].join(' '),
  profileImage: ['h-32', 'w-32', 'bg-gray-300', 'p-2', 'rounded-full'].join(
    ' '
  ),
  textContainer: ['text-center', 'px-14'].join(' '),
  textHeading: ['text-gray-300', 'text-3xl', 'font-bold'].join(' '),
  text: ['mt-2', 'text-gray-300'].join(' '),
  ratingContainer: ['text-center', 'p-4', 'text-gray-300'].join(' '),
  button: [
    'w-full',
    'py-3',
    'mt-6',
    'text-gray-300',
    'font-bold',
    'rounded-lg',
    'shadow-lg',
    'bg-gray-600',
    'hover:bg-gray-800',
    'hover:text-gray-400',
    'font-serif',
    'text-lg',
  ].join(' '),
};

export default myAccountStyles;
