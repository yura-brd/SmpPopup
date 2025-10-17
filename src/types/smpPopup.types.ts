export type typeShowOptionsSmpPopup = {
  bodyAddClass?: string;
  wrapperAddClass?: string;
  restart?: boolean;
};
export type typePropsSmpPopup = {
  classPopup?: string /**  Основной класс для popup. По ум. b_popup.   */;
  isAutoFocusInput?: boolean /**  нужно ли ставить фокус на интуп   */;
  wrapperAddClass?: string /** Доп. класс для b_popup  */;
  bodyHtmlAddClass?: string /**  Доп. класс для b_popup__body */;
  closeAddClass?: string; /**  Доп. класс для кнопки закрыть */

  /** Селектор или DOM element - по которому вызываются окно - data-open-popup; id в href | data-href */
  selectorLinks?: string | HTMLElement | NodeListOf<HTMLDivElement>;

  callbackOpenOnce?: ($wrapper: HTMLElement) => void;
  callbackOpenAlways?: ($wrapper: HTMLElement) => void;
  callbackCloseAlways?: ($wrapper: HTMLElement, returnBoolClose: boolean) => void;
};
export type typePropsInit = {
  classPopup: string /**  Основной класс для popup. По ум. b_popup.   */;
  wrapperAddClass?: string /** Доп. класс для b_popup  */;
  bodyHtmlAddClass?: string /**  Доп. класс для b_popup__body */;
  closeAddClass?: string /** Доп. класс для b_popup__close  */;
  id: string;
  $this: HTMLElement;
  options: typeShowOptionsSmpPopup;
  localCallbackCloseBefore: (id: string) => null;
};
