export const makeLabel = (text: string) => {
  const label = document.createElement('label');
  label.innerHTML = `<span>${text}</span>`;
  return label;
};
