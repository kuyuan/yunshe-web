import React from "react";
import styled from "styled-components";
import Glyph from "./glyph";

export type GlyphTypes =
  "checkbox" |
  "checkmark" |
  "photo";

interface SvgWrapperProps {
  size?: number;
}

interface IconProps extends SvgWrapperProps {
  glyph: GlyphTypes;
  title?: string;
}

export const InlineSvg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: inherit;
  fill: currentColor;
`;

export const SvgWrapper = styled.div`
  display: inline-block;
  flex: 0 0 ${(p: SvgWrapperProps) => (p.size ? `${p.size}px` : "32px")};
  width: ${(p: SvgWrapperProps) => (p.size ? `${p.size}px` : "32px")};
  height: ${(p: SvgWrapperProps) => (p.size ? `${p.size}px` : "32px")};
  min-width: ${(p: SvgWrapperProps) => (p.size ? `${p.size}px` : "32px")};
  min-height: ${(p: SvgWrapperProps) => (p.size ? `${p.size}px` : "32px")};
  position: relative;
  color: inherit;
`;

export const Icon = (props: IconProps) => {
  const { glyph, size, title } = props;
  return (
    <SvgWrapper
      size={size}
      className={"icon"}
    >
      <InlineSvg
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="1.414"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="title"
        viewBox="0 0 32 32"
        preserveAspectRatio="xMidYMid meet"
        id={glyph}
      >
        <title id="title">{title || glyph}</title>
        <Glyph glyph={glyph} />
      </InlineSvg>
    </SvgWrapper>
  );
};

export default Icon;
