import React from 'react';

interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string;
  size?: number | string;
  className?: string;
}

const Icon: React.FC<IconProps> = ({ name, size = 24, className, ...props }) => (
  <svg
    width={size}
    height={size}
    className={className}
    {...props}
  >
    <use xlinkHref={`/img/newsmile-icons.svg#${name}`} />
  </svg>
);

export default Icon;
