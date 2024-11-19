import { tooltip } from "./tooltip";
import { App, Plugin } from "vue";

const vTooltip: Plugin = {
  install: (app: App) => {
    app.directive("tooltip", tooltip);
  },
};

export default vTooltip;