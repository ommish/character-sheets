export const getElement = (id: string) => {
  const el = document.getElementById(id);
  if (!el) {
    throw new Error(`Element ${id} not found`);
  }
  return el;
};
