// as sugested by https://github.com/pmndrs/react-spring/issues/2358 until fix on library
import reactSpring from '@react-spring/web';
declare module '@react-spring/web' {
  const animated = {
    children: React.ReactNode,
    ...reactSpring.animated,
  };
}
