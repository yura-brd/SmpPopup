import { SmpPopupInit } from './smpPopupInit';
import { typePropsSmpPopup, typeShowOptionsSmpPopup } from './types/smpPopup.types';
import { getHref, getIdFromHash, isIncludeDomElement } from './utils/smpSelection.utils';
import { ID_SUFFIX } from './const/smpSelection.const';

import './style.css';

export default class SmpPopup {
  private itemsPopup: SmpPopupInit[] = [];

  isAutoFocusInput?: boolean; /** нужно ли ставить фокус на интуп */

  classPopup: string; /** Основной класс для popup - по ум. b_popup */

  wrapperAddClass?: string; /** Доп. класс для b_popup  */

  bodyHtmlAddClass?: string; /**  Доп. класс для b_popup__body */

  closeAddClass?: string; /**  Доп. класс для b_popup__close * */

  /** вызывается после первого окна * */
  callbackOpenAlways: ((wrapperNode: HTMLElement) => void) | null = null;

  /** вызывается после каждого вызова окна * */
  callbackOpenOnce: ((wrapperNode: HTMLElement) => void) | null = null;

  /** вызывается после каждого закрытия окна * */
  callbackCloseAlways: ((wrapperNode: HTMLElement, returnBoolClose: boolean) => void) | null = null;

  DOM_ELEMENT_POPUP?: HTMLElement;

  private selectorLinks: HTMLElement | NodeListOf<HTMLElement>;

  constructor(props?: typePropsSmpPopup) {
    if (!props) props = {};
    this.classPopup = props.classPopup ? props.classPopup : 'b_popup';
    this.wrapperAddClass = props.wrapperAddClass ? props.wrapperAddClass : undefined;
    this.bodyHtmlAddClass = props.bodyHtmlAddClass ? props.bodyHtmlAddClass : undefined;
    this.closeAddClass = props.closeAddClass ? props.closeAddClass : undefined;

    this.callbackOpenOnce = props.callbackOpenOnce ? props.callbackOpenOnce : null;
    this.callbackOpenAlways = props.callbackOpenAlways ? props.callbackOpenAlways : null;
    this.callbackCloseAlways = props.callbackCloseAlways ? props.callbackCloseAlways : null;
    this.isAutoFocusInput = props.isAutoFocusInput ? props.isAutoFocusInput : true;

    if (props.selectorLinks) {
      if (typeof props.selectorLinks === 'string') {
        this.selectorLinks = document.querySelectorAll<HTMLElement>(props.selectorLinks);
      } else {
        this.selectorLinks = props.selectorLinks;
      }
    } else {
      this.selectorLinks = document.querySelectorAll<HTMLElement>('[data-open-popup]');
    }

    this.init();
  }

  private init(): void {
    if (this.selectorLinks) {
      if (this.selectorLinks instanceof HTMLElement) {
        this.selectorLinks.addEventListener('click', (e) => this.handlerClick(e, (this.selectorLinks as HTMLElement)));
      } else if (this.selectorLinks.length) {
        this.selectorLinks.forEach(($item) => {
          $item.addEventListener('click', (e) => this.handlerClick(e, $item));
        });
      }
    }
  }

  private handlerClick(e: MouseEvent, elementNode: HTMLElement): void {
    e.preventDefault();
    const href: string | null = getHref(elementNode);
    if (!href) {
      return;
    }
    const hash: string = getIdFromHash(href);
    const options: typeShowOptionsSmpPopup = {};
    if (elementNode.dataset.addClassBody) {
      options.bodyAddClass = elementNode.dataset.addClassBody;
    }
    this.show(hash, options);
  }

  public show(id: string, options: typeShowOptionsSmpPopup = {} /* $link?:HTMLElement */): HTMLElement | null {
    const $this: HTMLElement | null = document.getElementById(id);

    if ($this) {
      const currentInitPopup: SmpPopupInit = new SmpPopupInit({
        $this,
        id,
        classPopup: this.classPopup,
        bodyHtmlAddClass: this.bodyHtmlAddClass,
        wrapperAddClass: this.wrapperAddClass,
        closeAddClass: this.closeAddClass,
        options,
        localCallbackCloseBefore: this.hideBefore.bind(this),
      });
      this.DOM_ELEMENT_POPUP = $this;
      this.itemsPopup.push(currentInitPopup);

      setTimeout(() => {
        document.addEventListener('keyup', this.keyEscHide);
      }, 10);

      /** вызываем автофокус, если нужно  * */
      this.inputAutoFocus();

      const oldInitPopup: HTMLElement | null = document.getElementById(id + ID_SUFFIX);

      if (oldInitPopup && oldInitPopup.dataset.firstInit === 'true') {
        /** вызывается после первого вызова окна * */
        if (this.callbackOpenOnce) {
          this.callbackOpenOnce($this);
        }
      }

      /** вызывается после каждого вызова окна * */
      if (this.callbackOpenAlways) {
        this.callbackOpenAlways($this);
      }

      return $this;
    }
    return null;
  }

  private keyEscHide = (e: KeyboardEvent): void => {
    if (e.code === 'Escape') {
      if (isIncludeDomElement(e.target as HTMLElement, 'input,label,textarea,video,audio,select')) {
        return;
      }
      const lastOpenPopup: SmpPopupInit = this.itemsPopup[this.itemsPopup.length - 1];
      if (lastOpenPopup) {
        lastOpenPopup.hide();
      } else {
        document.removeEventListener('keyup', this.keyEscHide);
      }
    }
  };

  public hideBefore(id: string, returnBoolClose = false): null {
    const currentPopup: SmpPopupInit = this.itemsPopup.filter((item) => item.id === id)[0];
    const newItemsPopup: SmpPopupInit[] = this.itemsPopup.filter((item) => item.id !== id);
    /** вызывается после каждого закрытия окна * */
    if (this.callbackCloseAlways) {
      this.callbackCloseAlways(currentPopup.$this, returnBoolClose);
    }

    /** удаляем не нужный элемент * */
    this.itemsPopup = newItemsPopup;
    if (newItemsPopup.length === 0) {
      document.removeEventListener('keyup', this.keyEscHide);
    }
    return null;
  }

  private inputAutoFocus(): void {
    if (this.DOM_ELEMENT_POPUP && this.isAutoFocusInput) {
      let inputAutoFocus: HTMLInputElement | null = this.DOM_ELEMENT_POPUP.querySelector('[data-autofocus]');
      if (!inputAutoFocus) {
        inputAutoFocus = this.DOM_ELEMENT_POPUP.querySelector('input:not([type="hidden"])');
      }
      if (inputAutoFocus) {
        setTimeout(() => {
          inputAutoFocus?.focus();
        }, 200);
      }
    }
  }

  /** закрытия окна по ID - такое же ID как у popup * */
  public hideForId(id: string, isDeleteForm = false): null {
    this.itemsPopup.forEach((item: SmpPopupInit) => {
      if (item.id === id) {
        item.hide(isDeleteForm);
      }
    });
    return null;
  }

  public hideAll(): null {
    this.itemsPopup.forEach((item) => item.hide());
    return null;
  }

  // удаляет из HTML скрытую форму
  public removeFormDOM(id: string): void {
    this.itemsPopup.forEach((item: SmpPopupInit) => {
      if (item.id === id) {
        item.hide(true);
      }
    });
    const element: HTMLElement | null = document.getElementById(id + ID_SUFFIX);
    if (element) {
      element.remove();
    }
  }

  public getOpenPopups(): SmpPopupInit[] {
    return this.itemsPopup;
  }
}
