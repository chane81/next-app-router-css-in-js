import { styled, css } from 'next-yak';

export default function Home() {
  return (
    <main className={mainClass({}).className}>
      <RoundedBox $isFilled>Filled Hello World</RoundedBox>
      <RoundedBox $isFilled={false}>
        <span>Not Filled Hello World</span>
      </RoundedBox>
      <RoundedBox $isFilled={false} $isBig>
        <span>Big Hello World</span>
      </RoundedBox>
      <RoundedBox $isMy>Is My Style</RoundedBox>
    </main>
  );
}

const mainClass = css`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
  background-color: white;
`;

const RoundedBox = styled.div<{
  $isFilled?: boolean;
  $isBig?: boolean;
  $isMy?: boolean;
}>`
  color: red;
  border: 1px solid skyblue;
  border-radius: 8px;
  padding: 8px;
  font-size: ${({ $isBig }) => ($isBig ? '2rem' : '1rem')};
  background-color: ${({ $isFilled }) => ($isFilled ? 'skyblue' : 'black')};
  ${({ $isMy }) =>
    $isMy &&
    css`
      color: blue;
    `}
`;
