// [SGLEE:20230405WED_044500] Created

const _$ = (selectors: string): HTMLElement | null => {
  const el = document.querySelector(selectors);
  if (!el) {
    console.error(`[_$()] Invalid selectors("${selectors}")!`);
    debugger;
    return null;
  }

  return el as HTMLElement;
};

const _$$ = (
  tag: string,
  parent: HTMLElement,
  text?: string,
  onClick?: any
): HTMLElement => {
  const el = document.createElement(tag);
  parent.append(el);
  if (text !== undefined) el.textContent = text;
  if (onClick) el.onclick = (e) => onClick(e);

  return el;
};

const _add = (num1: number, num2: number): number => num1 + num2;

export { _$, _$$, _add };
