# simp-select


## Installation
```
npm install simp-popup --save

```
## Importing
### ES6
```
import SimpSelect from 'simp-popup';
```


## Example Usage
``` 
import SimpleSelect from 'simp-popup';


const popup = new SmpPopup({
  closeAddClass: 'icon_close g_reset_btn',
  callbackOpenOnce: wrapperNode => {
    console.log('wrapperNode', wrapperNode);
  },
  callbackCloseAlways: (wrapperNode) => {
    console.log('callbackCloseAlways', wrapperNode);
  },
});
document.querySelector('.show_popup').addEventListener('click', (e) => {
  popup.show('popup_1');
})
```
