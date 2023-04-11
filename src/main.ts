// [SGLEE:20230405WED_054400] Created

import tube1014 from "./images/1014.png";
import tube1015 from "./images/1015.png";
import { BsBtn } from "./libs-ts/src/bs-components/BsButton";
import {
  _$,
  _$$,
  _dataset1,
  _dataset1Num,
} from "./libs-ts/src/html-ctrls/HtmlUtils";
import vars from "./style.scss";

const main = (): void => {
  console.clear();
  console.log("hello-webpack");
  // [SGLEE:20230410MON_163300] undefined가 출력됨. 참고로, react에서는 잘 됨.
  console.log(vars);

  const root = _$("#root") as HTMLDivElement;
  root.className = "vh-100 p-4 bg-light text-body";

  const text = _$$({
    tagName: "div",
    parent: root,
    text: "click image to change!",
  }) as HTMLDivElement;
  const img = _$$({
    tagName: "img",
    parent: root,
    styles: { cursor: "pointer" },
  }) as HTMLImageElement;
  img.src = tube1014;
  img.onclick = (e) => {
    const img = e.target as HTMLImageElement;
    img.src = img.src === tube1014 ? tube1015 : tube1014;
  };
  // const btn = _$$({
  //   tagName: "button",
  //   parent: root,
  //   text: "버튼",
  //   className: "btn btn-primary btn-sm",
  // }) as HTMLButtonElement;
  // btn.onclick = (e) => {
  //   const t = e.target as HTMLButtonElement;
  //   t.disabled = true;
  //   setTimeout(() => (t.disabled = false), 1000);
  // };
  const btn = BsBtn({
    parent: root,
    text: "버튼0",
    dataset: { sn: 1234 },
    //
    onClick: (sender, e) => {
      const sn = _dataset1Num(sender, "sn");
      alert(`sn: ${sn}`);
      sender.disabled = true;
      setTimeout(() => (sender.disabled = false), 1000);
    },
  });
};

window.onload = () => main();
