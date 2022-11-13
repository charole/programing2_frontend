import { Body, Container } from './styled';
import { CardProps } from './types';

export default function Card({ children, align }: CardProps) {
  return (
    <Container align={align}>
      <Body>{children}</Body>
    </Container>
  );
}
