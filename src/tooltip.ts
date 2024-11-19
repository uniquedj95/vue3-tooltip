import { Directive, DirectiveBinding } from "vue";

interface TooltipElement extends HTMLElement {
  _tooltipHandler?: () => void;
  _tooltipRemoveHandler?: () => void;
}

export const tooltip: Directive = {
  mounted(el: TooltipElement, binding: DirectiveBinding) {
    const value = binding.value || {};
    const text = typeof value === "string" ? value : value.text;
    const placement = value.placement || "top";

    if (!text) return;

    const tooltipEl = document.createElement("div");
    tooltipEl.className = `tooltip tooltip-${placement}`;
    tooltipEl.textContent = text;
    tooltipEl.style.position = "absolute";
    tooltipEl.style.display = "none";
    tooltipEl.style.backgroundColor = "#333";
    tooltipEl.style.color = "white";
    tooltipEl.style.padding = "5px";
    tooltipEl.style.borderRadius = "4px";
    tooltipEl.style.fontSize = "12px";
    tooltipEl.style.zIndex = "1000";

    document.body.appendChild(tooltipEl);

    const showTooltip = () => {
      const rect = el.getBoundingClientRect();
      tooltipEl.style.display = "block";

      switch (placement) {
        case "top":
          tooltipEl.style.left = `${
            rect.left + rect.width / 2 - tooltipEl.offsetWidth / 2
          }px`;
          tooltipEl.style.top = `${rect.top - tooltipEl.offsetHeight - 5}px`;
          break;
        case "bottom":
          tooltipEl.style.left = `${
            rect.left + rect.width / 2 - tooltipEl.offsetWidth / 2
          }px`;
          tooltipEl.style.top = `${rect.bottom + 5}px`;
          break;
        case "left":
          tooltipEl.style.left = `${rect.left - tooltipEl.offsetWidth - 5}px`;
          tooltipEl.style.top = `${
            rect.top + rect.height / 2 - tooltipEl.offsetHeight / 2
          }px`;
          break;
        case "right":
          tooltipEl.style.left = `${rect.right + 5}px`;
          tooltipEl.style.top = `${
            rect.top + rect.height / 2 - tooltipEl.offsetHeight / 2
          }px`;
          break;
      }
    };

    const hideTooltip = () => {
      tooltipEl.style.display = "none";
    };

    el.addEventListener("mouseenter", showTooltip);
    el.addEventListener("mouseleave", hideTooltip);

    el._tooltipHandler = showTooltip;
    el._tooltipRemoveHandler = hideTooltip;
  },

  unmounted(el: TooltipElement) {
    if (el._tooltipHandler) {
      el.removeEventListener("mouseenter", el._tooltipHandler);
    }
    if (el._tooltipRemoveHandler) {
      el.removeEventListener("mouseleave", el._tooltipRemoveHandler);
    }
  },
};
