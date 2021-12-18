const notFoundStyles = {
  main: [
    'h-screen',
    'flex',
    'justify-center',
    'items-center',
    'bg-gray-800',
  ].join(' '),
  box: [
    'h-screen',
    'flex',
    'flex-col',
    'justify-center',
    'items-center',
    'font-serif',
  ].join(' '),
  error: [
    'text-9xl',
    'text-center',
    'uppercase',
    'text-gray-300',
    'block',
  ].join(' '),
  text: ['text-gray-400', 'text-xl'].join(' '),
  button: [
    'w-full',
    'py-3',
    'mt-6',
    'text-gray-300',
    'font-bold',
    'rounded-lg',
    'shadow-lg',
    'bg-gray-600',
    'hover:bg-gray-700',
    'hover:text-gray-400',
    'font-serif',
    'text-lg',
  ].join(' '),
};

export default notFoundStyles;
