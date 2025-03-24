import Link from 'next/link';

export function useMDXComponents(components) {
    return {
      a: ({ href, children}) => <Link href={href}>{children}</Link>,
      ...components,
    }
  }