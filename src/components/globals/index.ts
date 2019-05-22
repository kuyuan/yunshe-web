import styled from "styled-components";

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

export const Transition = {
  hover: {
    on: "all 0.2s ease-in",
    off: "all 0.2s ease-out",
  },
  reaction: {
    on: "all 0.15s ease-in",
    off: "all 0.1s ease-out",
  },
  dropdown: {
    off: "all 0.35s ease-out",
  },
};

export const zIndex = new function() {
  // Write down a camel-cased element descriptor as the name (e.g. modal or chatInput).
  // Define at a component level here, then use math to handle order at a local level.
  // (e.g. const ModalInput = styled.input`z-index: zIndex.modal + 1`;)
  // This uses constructor syntax because that allows self-referential math

  this.base = 1; // z-index: auto content will go here or inherit z-index from a parent

  this.background = this.base - 1; // content that should always be behind other things (e.g. textures/illos)
  this.hidden = this.base - 2; // this content should be hidden completely (USE ADD'L MEANS OF HIDING)

  this.card = this.base + 1; // all cards should default to one layer above the base content
  this.loading = this.card + 1; // loading elements should never appear behind cards
  this.avatar = this.card + 1; // avatars should never appear behind cards
  this.form = this.card + 1; // form elements should never appear behind cards
  this.search = this.form; // search is a type of form and should appear at the same level
  this.dmInput = this.form;

  this.composerToolbar = 2000; // composer toolbar - should sit in between most elements

  this.chrome = 3000; // chrome should be visible in modal contexts
  this.navBar = this.chrome; // navBar is chrome and should appear at the same level
  this.mobileInput = this.chrome + 1; // the chatInput on mobile should appear above the navBar
  this.dropDown = this.chrome + 1; // dropDowns shouldn't appear behind the navBar

  this.slider = window.innerWidth < 768 ? this.chrome + 1 : this.chrome; // slider should appear significantly above the base to leave room for other elements
  this.composer = 4000; // should cover all screen except toasts
  this.chatInput = this.slider + 1; // the slider chatInput should always appear above the slider
  this.flyout = this.chatInput + 3; // flyout may overlap with chatInput and should take precedence

  this.fullscreen = 4000; // fullscreen elements should cover all screen content except toasts

  this.modal = 5000; // modals should completely cover base content and slider as well
  this.gallery = this.modal + 1; // gallery should never appear behind a modal

  this.toast = 6000; // toasts should be visible in every context
  this.tooltip = this.toast + 1; // tooltips should always be on top
}();
