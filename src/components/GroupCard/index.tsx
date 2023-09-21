import { Container, Icon, Title } from "./styles";

type Props = {
  title: string;
};
export function GroupCard({ title }: Props) {
  return (
    <Container>
      <Icon color="#26c996" size={32} />
      <Title>{title}</Title>
    </Container>
  );
}
