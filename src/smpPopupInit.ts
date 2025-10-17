import { typePropsInit, typeShowOptionsSmpPopup } from './types/smpPopup.types';
import { ID_SUFFIX } from './const/smpSelection.const';

export class SmpPopupInit {
  id: string;

  $this: HTMLElement;

  options: typeShowOptionsSmpPopup = {};

  private $wrapper?: HTMLElement;

  private $bodyHTML?: HTMLElement;

  private readonly classPopup: string;

  closePopupButton: HTMLButtonElement | undefined;

  private readonly wrapperAddClass: string | undefined;

  private readonly bodyHtmlAddClass: string | undefined;

  private readonly closeAddClass: string | undefined;

  /** вызывается после каждого закрытия окна * */
  callbackCloseAlways: (($wrapper: HTMLElement) => void) | null = null;

  localCallbackCloseBefore: (id: string, returnBoolClose: boolean) => null;

  returnBoolClose = false;

  constructor(props: typePropsInit) {
    this.id = props.id;
    this.$this = props.$this;
    this.wrapperAddClass = props.wrapperAddClass;
    this.bodyHtmlAddClass = props.bodyHtmlAddClass;
    this.closeAddClass = props.closeAddClass;
    this.options = props.options || {};
    this.classPopup = props.classPopup;
    this.localCallbackCloseBefore = props.localCallbackCloseBefore;

    this.initHTML();

    const open = () => {
      if (this.$wrapper) {
        this.$wrapper.classList.add('open');
        this.$wrapper.tabIndex = 0;
        document.body.classList.add('open_popup');
      }
    };
    // open();
    setTimeout(open, 10);
  }

  hide(isDelete = false): void {
    if (!this.$wrapper) {
      return;
    }
    this.$wrapper.classList.remove('open');
    document.body.classList.remove('open_popup');
    this.localCallbackCloseBefore(this.id, this.returnBoolClose);

    const classContainer = `.${this.classPopup}__content`; /* b_popup__content */
    const $popupContent: HTMLElement | null = this.$this.querySelector(classContainer);
    if (
      isDelete
      || ($popupContent && $popupContent.dataset.removeBeforeClose && $popupContent.dataset.removeBeforeClose !== 'false')
    ) {
      // console.log('removeBeforeClose', $popupContent.dataset.removeBeforeClose);
      setTimeout(() => {
        this.$wrapper?.parentNode?.removeChild(this.$wrapper);
      }, 300);
    }
  }

  private initHTML(): void {
    const oldInitPopup: HTMLElement | null = document.getElementById(this.id + ID_SUFFIX);
    if (oldInitPopup) {
      this.$wrapper = oldInitPopup;
      this.$wrapper.dataset.firstInit = 'false';
      /** если окно уже было добавлено, переносим в конец body (если это второе окно, для z-index) * */
      document.body.appendChild(this.$wrapper);

      setTimeout(() => {
        this.$wrapper?.classList.add('open');
        document.body.classList.add('open_popup');
      }, 10);
    } else {
      this.$wrapper = document.createElement('div');
      this.$wrapper.id = this.id + ID_SUFFIX;
      this.$wrapper.className = this.classPopup; /* b_popup */
      if (this.wrapperAddClass) {
        this.$wrapper.classList.add(this.wrapperAddClass);
      }

      this.$wrapper.dataset.firstInit = 'true';
      this.$wrapper.setAttribute('aria-modal', 'true');
      this.$wrapper.setAttribute('role', 'true');

      const overlay: HTMLElement = document.createElement('div');
      overlay.className = `${this.classPopup}__overlay`; /* b_popup__overlay */
      overlay.dataset.close = 'true';

      const currentWrapper: HTMLElement = document.createElement('div');
      currentWrapper.className = `${this.classPopup}__wrapper`; /* b_popup__wrapper */
      if (this.bodyHtmlAddClass) {
        currentWrapper.classList.add(this.bodyHtmlAddClass);
      }

      currentWrapper.dataset.close = 'true';

      this.closePopupButton = document.createElement('button');
      this.closePopupButton.type = 'button';
      let closePopupButton = `${this.classPopup}__close`;
      if (this.closeAddClass) {
        closePopupButton += ` ${this.closeAddClass}`;
      }
      this.closePopupButton.className = closePopupButton; /* b_popup__close */

      this.closePopupButton.setAttribute('aria-label', 'Close window');
      this.closePopupButton.innerText = 'Close window';
      this.closePopupButton.dataset.close = 'true';
      this.closePopupButton.dataset.tabIndex = '0';
      this.closePopupButton.dataset.focusClose = 'true';

      this.$bodyHTML = document.createElement('div');
      this.$bodyHTML.className = `${this.classPopup}__body`; /* b_popup__body */

      currentWrapper.append(this.$bodyHTML);

      const lastActive = document.createElement('div');
      lastActive.tabIndex = 0;
      lastActive.dataset.lastIndexActive = '1';
      currentWrapper.append(lastActive);

      this.$bodyHTML.append(this.closePopupButton);

      let isClose = false;
      this.$wrapper.addEventListener('mousedown', (e) => {
        isClose = false;
        const $target: HTMLElement = e.target as HTMLElement;
        if ($target.dataset.close && e.button === 0) {
          /** отлов клик по скроллу * */
          if ($target === currentWrapper) {
            const clickOutScroll: boolean = $target.clientWidth > e.clientX;
            if (clickOutScroll) {
              isClose = true;
            }
          } else {
            isClose = true;
          }
        }
      });
      this.$wrapper.addEventListener('mouseup', (e) => {
        const $target: HTMLElement = e.target as HTMLElement;
        if ($target.dataset.close && e.button === 0 && isClose) {
          /** отлов клик по скроллу * */
          if ($target === currentWrapper) {
            const clickOutScroll: boolean = $target.clientWidth > e.clientX;
            if (clickOutScroll) {
              e.preventDefault();
              this.hide(false);
            }
          } else {
            this.returnBoolClose = !!$target.dataset.returnTrue;
            e.preventDefault();
            this.hide(false);
          }
        }
        isClose = false;
      });
      this.$wrapper.addEventListener('keyup', (e) => {
        const $target: HTMLElement = e.target as HTMLElement;
        if (e.key === 'Enter' && $target.dataset.focusClose) {
          this.returnBoolClose = !!$target.dataset.returnTrue;
          e.preventDefault();
          this.hide(false);
        }
        if (e.key === 'Tab' && $target.dataset.lastIndexActive) {
          this.closePopupButton?.focus();
        }
      });
      this.$wrapper.addEventListener('keydown', (e) => {
        const $target: HTMLElement = e.target as HTMLElement;
        if (e.key === 'Tab' && $target.dataset.lastIndexActive) {
          this.closePopupButton?.focus();
        }
      });
      this.$wrapper.append(overlay);
      this.$wrapper.append(currentWrapper);
      document.body.append(this.$wrapper);

      this.$bodyHTML.append(this.$this);

      if (this.options.wrapperAddClass) {
        this.$wrapper.classList.add(this.options.wrapperAddClass);
      }
      if (this.options.bodyAddClass) {
        this.$bodyHTML.classList.add(this.options.bodyAddClass);
      }
    }
    if (this.options.restart === true) {
      const classContainer: HTMLElement = this.$wrapper.querySelector(`.${this.classPopup}__content`) as HTMLDivElement;
      if (classContainer) {
        classContainer.dataset.removeBeforeClose = 'true';
      }
    }
  }
}
