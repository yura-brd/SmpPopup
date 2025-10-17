import { SmpPopupInit } from './smpPopupInit';
import { typePropsSmpPopup, typeShowOptionsSmpPopup } from './types/smpPopup.types';
import './style.css';
export default class SmpPopup {
    private itemsPopup;
    isAutoFocusInput?: boolean; /** нужно ли ставить фокус на интуп */
    classPopup: string; /** Основной класс для popup - по ум. b_popup */
    wrapperAddClass?: string; /** Доп. класс для b_popup  */
    bodyHtmlAddClass?: string; /**  Доп. класс для b_popup__body */
    closeAddClass?: string; /**  Доп. класс для b_popup__close * */
    /** вызывается после первого окна * */
    callbackOpenAlways: ((wrapperNode: HTMLElement) => void) | null;
    /** вызывается после каждого вызова окна * */
    callbackOpenOnce: ((wrapperNode: HTMLElement) => void) | null;
    /** вызывается после каждого закрытия окна * */
    callbackCloseAlways: ((wrapperNode: HTMLElement, returnBoolClose: boolean) => void) | null;
    DOM_ELEMENT_POPUP?: HTMLElement;
    private selectorLinks;
    constructor(props?: typePropsSmpPopup);
    private init;
    private handlerClick;
    show(id: string, options?: typeShowOptionsSmpPopup): HTMLElement | null;
    private keyEscHide;
    hideBefore(id: string, returnBoolClose?: boolean): null;
    private inputAutoFocus;
    /** закрытия окна по ID - такое же ID как у popup * */
    hideForId(id: string, isDeleteForm?: boolean): null;
    hideAll(): null;
    removeFormDOM(id: string): void;
    getOpenPopups(): SmpPopupInit[];
}
