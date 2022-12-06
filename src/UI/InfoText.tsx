import styled from "styled-components";

const Text = styled.h3`
  font-size: var(--fs-sm);
  line-height: 20px;
  font-weight: var(--fw-normal);
  margin: 0;
  span {
    font-weight: var(--fw-light);
  }
`;

type InfoTextProps = {
  title: string;
  description: string;
};

function InfoText({ title, description }: InfoTextProps) {
  return (
    <Text>
      {title}: <span>{description}</span>
    </Text>
  );
}

export default InfoText;
