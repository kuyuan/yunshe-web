import styled from "styled-components";

export const MIN_PRIMARY_COLUMN_WIDTH = 600;
export const MIN_SECONDARY_COLUMN_WIDTH = 320;
export const COL_GAP = 24;
export const NAVBAR_WIDTH = 72;
// add 144 (72 * 2) to account for the left side nav
export const MEDIA_BREAK =
  MIN_PRIMARY_COLUMN_WIDTH +
  MIN_SECONDARY_COLUMN_WIDTH +
  COL_GAP +
  NAVBAR_WIDTH * 2;
