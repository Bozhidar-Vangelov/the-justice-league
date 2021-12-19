const guildPostsStyles = {
  main: ['grid', 'min-h-screen', 'place-items-center'].join(' '),
  section: ['container', 'mx-auto', 'flex', 'flex-wrap', 'justify-center'].join(
    ' '
  ),
  boxContainer: ['mb-auto', 'lg:w-1/3', 'md:w-1/2', 'w-full', 'p-4'].join(' '),
  box: [
    'flex',
    'justify-between',
    'items-center',
    'p-8',
    'bg-gray-700',
    'rounded-lg',
    'shadow-lg',
    'max-w-full',
  ].join(' '),
  infoBox: ['h-64', 'border-8', 'border-double', 'border-gray-900'].join(' '),
  image: ['h-full', 'w-full'].join(' '),
  info: [
    'max-w-full',
    'mt-2',
    'text-gray-300',
    'font-serif',
    'text-lg',
    'font-bold',
  ].join(' '),
  buttons: ['flex', 'justify-around', 'items-center'].join(' '),
  upVote: [
    'p-3',
    'pl-5',
    'pr-5',
    'm-2',
    'bg-green-600',
    'hover:bg-green-800',
    'hover:text-green-400',
    'rounded-lg',
    'shadow-lg',
  ].join(' '),
  downVote: [
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
  rating: ['text-center', 'p-4'].join(' '),
  showDescription: [
    'm-4',
    'text-center',
    'text-gray-300',
    'font-serif',
    'text-lg',
    'font-bold',
    'p-2 ',
    'pl-5 ',
    'pr-5 ',
    'bg-transparent ',
    'border-2 ',
    'border-gray-500',
    'rounded-lg',
    'hover:bg-gray-500',
    'hover:text-gray-100',
    'focus:border-4',
    'focus:border-gray-300',
  ].join(' '),
};

export default guildPostsStyles;
