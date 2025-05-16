import Link from 'next/link';

export function useMDXComponents(components) {
  return {
    a: ({ href = '', children, ...props }) => {
      const isExternal = href.startsWith('http');

      if (isExternal) {
        return (
          <a href={href} {...props}>
            {children}
          </a>
        );
      }

      return (
        <Link href={href} {...props}>
          {children}
        </Link>
      );
    },
    ...components,
  };
}
