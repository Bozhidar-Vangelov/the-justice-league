const guildPostsStyles = {
  main: ['grid', 'min-h-screen', 'place-items-center'].join(' '),
  section: ['container', 'mx-auto', 'flex', 'flex-wrap', 'justify-center'].join(
    ' '
  ),
  boxContainer: ['lg:w-1/3', 'md:w-1/2', 'w-full', 'p-4'].join(' '),
  box: [
    'flex',
    'justify-between',
    'items-center',
    'p-8',
    'bg-gray-700',
    'rounded-lg',
    'shadow-lg',
  ].join(' '),
  infoBox: ['h-1/3', 'border-8', 'border-double', 'border-gray-900'].join(' '),
  info: ['mt-2', 'text-gray-300', 'font-serif', 'text-lg', 'font-bold'].join(
    ' '
  ),
  buttons: ['flex', 'justify-around', 'items-center'].join(' '),
  upVote: [
    'p-3',
    'm-2',
    'mx-0',
    'bg-green-600',
    'hover:bg-green-800',
    'hover:text-green-400',
    'rounded-lg',
    'shadow-lg',
  ].join(' '),
  downVote: [
    'p-3',
    'm-2',
    'bg-red-600',
    'hover:bg-red-800',
    'hover:text-red-400',
    'rounded-lg',
    'shadow-lg',
  ].join(' '),
};

export default guildPostsStyles;
