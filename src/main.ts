// [SGLEE:20230405WED_054400] Created

import tube1014 from "./images/1014.png";
import tube1015 from "./images/1015.png";
import "./style.scss";
import { _$, _$$ } from "./utils";

const main = (): void => {
  console.clear();

  const root = _$("#root") as HTMLDivElement;
  const text = _$$("div", root, "click to change!") as HTMLDivElement;
  const img = _$$("img", root, undefined, (e: MouseEvent) => {
    img.src = img.src === tube1014 ? tube1015 : tube1014;
  }) as HTMLImageElement;
  img.src = tube1014;
  const btn = _$$("button", root, "버튼", (e: MouseEvent) => {
    const t = e.target as HTMLButtonElement;
    t.disabled = true;
    setTimeout(() => (t.disabled = false), 1000);
  });
};

window.onload = () => main();
