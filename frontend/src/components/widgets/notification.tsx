import SlAlert from "@shoelace-style/shoelace/dist/react/alert/index.js";
import SlIcon from "@shoelace-style/shoelace/dist/react/icon/index.js";
import type SlAlertElement from "@shoelace-style/shoelace/dist/components/alert/alert.js";

import { MutableRef } from "preact/hooks";

export function Notification({
  message,
  variant = "primary",
  duration = 3000,
  childRef,
}: {
  message: string;
  variant: "primary" | "success" | "neutral" | "warning" | "danger";
  duration?: number;
  childRef?: MutableRef<null | SlAlertElement>;
}) {
  const icons = {
    primary: "info-circle",
    success: "check2-circle",
    neutral: "gear",
    warning: "exclamation-triangle",
    danger: "exclamation-octagon",
  };

  return (
    <SlAlert ref={childRef} variant={variant} closable duration={duration}>
      <SlIcon name={icons[variant]} slot="icon"></SlIcon>
      {message}
    </SlAlert>
  );
}
