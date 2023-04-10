// [SGLEE:20230405WED_054400] Created

import tube1014 from "./images/1014.png";
import tube1015 from "./images/1015.png";
import vars from "./style.scss";
import { _$, _$$ } from "./utils";

const main = (): void => {
  console.clear();
  console.log("hello-webpack");
  // [SGLEE:20230410MON_163300] undefined가 출력됨. 참고로, react에서는 잘 됨.
  console.log(vars);

  const root = _$("#root") as HTMLDivElement;
  root.className = "vh-100 p-4 bg-light text-body";

  const text = _$$("div", root, "click image to change!") as HTMLDivElement;
  const img = _$$("img", root, undefined, (e: MouseEvent) => {
    img.src = img.src === tube1014 ? tube1015 : tube1014;
  }) as HTMLImageElement;
  img.src = tube1014;
  const btn = _$$("Button", root, "버튼", (e: MouseEvent) => {
    const t = e.target as HTMLButtonElement;
    t.disabled = true;
    setTimeout(() => (t.disabled = false), 1000);
  });
  btn.className = "btn btn-primary btn-sm";
};

window.onload = () => main();
