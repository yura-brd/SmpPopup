export const getHref = (elemNode: HTMLElement): string | null => {
  if (!elemNode) {
    return null;
  }
  return elemNode.dataset && elemNode.dataset.href ? elemNode.dataset.href : elemNode.getAttribute('href');
};

export const getIdFromHash = (hash:string):string => {
  if (hash[0] === '#') {
    return hash.slice(1);
  } else {
    return hash;
  }
};

export const isIncludeDomElement = (el: HTMLElement, listName: string): boolean => {
  return listName.toLowerCase().split(',').includes(el.nodeName.toLowerCase());
};
