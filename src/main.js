import DefaultLayout from "~/layouts/Default.vue";
import settings from "../data/theme.json";

export default function(Vue, { head }) {
  Vue.component("Layout", DefaultLayout);
  head.bodyAttrs = {
    class: settings.dark_mode ? "dark" : ""
  };
}
