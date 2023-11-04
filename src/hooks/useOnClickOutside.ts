import { RefObject, useCallback, useEffect } from 'react';

export const useOnClickOutside = (
  ref: RefObject<HTMLElement>,
  onClickOutside: () => void,
) => {
  const handleClick = useCallback((e: MouseEvent) => {
    if (ref.current && e.target && ref.current.contains(e.target as Node)) {
      // ignore inside click
      return;
    }
    // handle outside click
    onClickOutside();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    window.document.addEventListener('mousedown', handleClick);
    return () => {
      window.document.removeEventListener('mousedown', handleClick);
    };
    // eslint-disable-next-line
  }, []);
};
