import { CSSProperties } from 'react';

export type AlignTypes = CSSProperties['textAlign'];

export interface CardProps {
  children?: ReactNode;
  align?: AlignTypes;
}

export interface ContainerProps {
  align?: AlignTypes;
}
