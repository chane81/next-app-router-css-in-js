import { css, styled } from '@pigment-css/react';

export default function Home() {
  return (
    <main className={mainClass}>
      <RoundedBox
        isFilled
        sx={{
          color: 'red'
        }}
      >
        Filled Hello World
      </RoundedBox>
      <RoundedBox isFilled={false}>
        <span>Not Filled Hello World</span>
      </RoundedBox>
      <RoundedBox isFilled={false} isBig>
        <span>Big Hello World</span>
      </RoundedBox>
    </main>
  );
}

const mainClass = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  padding: '1rem',
  fontSize: '1.5rem',
  fontWeight: 'bold'
});

const RoundedBox = styled('div', {
  shouldForwardProp: prop => !['isFilled', 'isBig'].includes(prop)
})<{ isFilled?: boolean; isBig?: boolean }>({
  border: '1px solid skyblue',
  borderRadius: '0.5rem',
  padding: '8px',
  fontSize: ({ isBig }) => (isBig ? '2rem' : '1rem'),
  backgroundColor: ({ isFilled }) => (isFilled ? 'skyblue' : 'black')
});
