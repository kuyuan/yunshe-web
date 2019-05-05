import { css } from 'styled-components';

export const tint = (hex: string, amount: number) => {
  let R = parseInt(hex.substring(1, 3), 16);
  let G = parseInt(hex.substring(3, 5), 16);
  let B = parseInt(hex.substring(5, 7), 16);

  const getSingle = (n: number) => parseInt(((n * (100 + amount)) / 100).toString(), 10);

  R = getSingle(R);
  G = getSingle(G);
  B = getSingle(B);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const getDouble = (n: number) =>
    n.toString(16).length === 1
      ? `0${n.toString(16)}`
      : n.toString(16);

  const RR = getDouble(R);
  const GG = getDouble(G);
  const BB = getDouble(B);

  return `#${RR}${GG}${BB}`;
};

export const hexa = (hex: string, alpha: number = -1) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha >= 0) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
};

export const Gradient = (g1: string, g2: string) => {
  return `radial-gradient(ellipse farthest-corner at top left, ${g1} 0%, ${g2} 100%)`;
};
