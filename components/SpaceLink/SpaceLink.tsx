import Link, { LinkProps } from 'next/link';
import React from 'react'

interface ISpaceLinkProps extends LinkProps {
    children: React.ReactNode;
}

const SpaceLink = ({ href, children, ...rest }: ISpaceLinkProps) => {
    if (href == "#") {
        return <>{children}</>;
      }
      return (
        <Link href={href} {...rest}>
          {children}
        </Link>
      );
}

SpaceLink.displayName = 'SpaceLink';

export default SpaceLink;