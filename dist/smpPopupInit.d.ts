import { typePropsInit, typeShowOptionsSmpPopup } from './types/smpPopup.types';
export declare class SmpPopupInit {
    id: string;
    $this: HTMLElement;
    options: typeShowOptionsSmpPopup;
    private $wrapper?;
    private $bodyHTML?;
    private readonly classPopup;
    closePopupButton: HTMLButtonElement | undefined;
    private readonly wrapperAddClass;
    private readonly bodyHtmlAddClass;
    private readonly closeAddClass;
    /** вызывается после каждого закрытия окна * */
    callbackCloseAlways: (($wrapper: HTMLElement) => void) | null;
    localCallbackCloseBefore: (id: string, returnBoolClose: boolean) => null;
    returnBoolClose: boolean;
    constructor(props: typePropsInit);
    hide(isDelete?: boolean): void;
    private initHTML;
}
