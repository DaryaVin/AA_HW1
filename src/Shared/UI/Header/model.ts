export interface HeaderProps extends React.HTMLAttributes<HTMLHeadingElement> {
  number?: 1 | 2 | 3 | 4 | 5 | 6;
  isHidden?: boolean;
}

export interface SpecHeaderProps extends React.HTMLAttributes<HTMLSpanElement> {
  className?: string;
}
