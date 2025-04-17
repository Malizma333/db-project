import { SlAlert, SlIcon } from "@shoelace-style/shoelace/dist/react";

export function SlNotification(
  { message, variant = 'primary', duration = 3000 } :
  { message: string, variant: 'primary' | 'success' | 'neutral' | 'warning' | 'danger', duration: number }
) {
  const icons = {
    "primary": "info-circle",
    "success": "check2-circle",
    "neutral": "gear",
    "warning": "exclamation-triangle",
    "danger": "exclamation-octagon"
  };

  return (
    <SlAlert variant={variant} closable duration={duration}>
      <SlIcon name={icons[variant]} slot="icon"></SlIcon>
      {message}
    </SlAlert>
  );
}
