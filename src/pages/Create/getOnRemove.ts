import { getElement } from '../../formUtils/getElement';

const getParent = (el: HTMLElement) => {
  if (!el.parentElement) {
    throw new Error('Expected element to have parent');
  }
  return el.parentElement;
};

export const getOnRemove =
  (idGetters: ((index: number) => string)[]): GlobalEventHandlers['onclick'] =>
  (e) => {
    let idx = 0;
    const fieldEl = getParent(e.currentTarget as HTMLButtonElement);
    const listEl = getParent(fieldEl);
    listEl.childNodes.forEach((node, i) => {
      console.log('i', i);
      console.log('node', node);
      if (node === fieldEl) {
        idx = i;
      }
    });
    for (let i = idx + 1; i < listEl.children.length; i++) {
      idGetters.forEach((idGetter) => {
        const id = idGetter(i - 1);
        const el = getElement(id) as HTMLInputElement;
        const newId = idGetter(i - 2);
        el.id = newId;
        el.name = newId;
      });
      (listEl.children[i] as HTMLElement).children[1].innerHTML = (
        i - 1
      ).toString();
    }
    fieldEl.remove();
  };
