import Link, { LinkProps } from 'next/link';
import React from 'react'
import { ICommonComp } from '../componentsInterface';

interface ISpaceLinkProps extends LinkProps, ICommonComp {
    children: React.ReactNode;
}

const SpaceLink = ({ href, children, className, ...rest }: ISpaceLinkProps) => {
    if (href == "#") {
        return <>{children}</>;
      }
      return (
        <Link href={href} className={className} {...rest}>
          {children}
        </Link>
      );
}

SpaceLink.displayName = 'SpaceLink';

export default SpaceLink;