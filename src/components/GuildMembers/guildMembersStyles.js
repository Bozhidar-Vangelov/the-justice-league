const guildMembersStyles = {
  main: ['grid', 'min-h-screen', 'place-items-center'].join(' '),
  boxContainer: ['lg:w-1/3', 'md:w-1/2', 'w-full', 'p-4'].join(' '),
  box: [
    'flex',
    'justify-between',
    'p-12',
    'bg-gray-700',
    'rounded-lg',
    'shadow-lg',
  ].join(' '),
  info: ['mt-2', 'text-gray-300', 'font-serif', 'text-lg', 'font-bold'].join(
    ' '
  ),
  img: ['h-full', 'w-full'].join(' '),
  upVote: [
    'p-3',
    'm-2',
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

export default guildMembersStyles;
