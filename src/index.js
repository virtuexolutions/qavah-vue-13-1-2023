import "@/assets/css/vendor/dropzone.min.css";
import 'bootstrap-vue/dist/bootstrap-vue.css'
import "@/assets/css/vendor/bootstrap.min.css";
import "@/assets/css/vendor/bootstrap.rtl.only.min.css";


import { getThemeColor, setThemeColor } from "./utils";
/*  if you want use single color theme

- ColorSwitcher component remove in 'src/App.vue' file.
- Remove multicolor section in current file
- Uncomment the two lines below

import "./assets/css/sass/themes/piaf.light.blueolympic.scss";
import "./main";
*/


let render = () => {
  import("@/assets/css/sass/themes/piaf.light.yellowgranola.scss").then(() =>
    require("./main")
  );
};

render();
/* if you want single color remove this section:multicolor */
