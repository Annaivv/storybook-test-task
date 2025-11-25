"use client";

import { useEffect, useState } from "react";
import styles from "./Toast.module.css";
import { X } from "lucide-react";

export type ToastType = "success" | "info" | "warning" | "error";

export interface ToastProps {
  message: string;
  type?: ToastType;
  duration?: number;
  onClose?: () => void;
  showCloseButton?: boolean;
}

export default function Toast({
  message,
  type = "info",
  duration = 3000,
  onClose,
  showCloseButton = false,
}: ToastProps) {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFade(true), duration);
    return () => clearTimeout(timer);
  }, [duration]);

  useEffect(() => {
    if (fade) {
      const timer = setTimeout(() => onClose?.(), 1000);
      return () => clearTimeout(timer);
    }
  }, [fade, onClose]);

  let typeClass: string;
  switch (type) {
    case "success":
      typeClass = styles.toastSuccess;
      break;
    case "warning":
      typeClass = styles.toastWarning;
      break;
    case "error":
      typeClass = styles.toastError;
      break;
    default:
      typeClass = styles.toastInfo;
      break;
  }

  return (
    <div
      className={`${styles.toast} ${typeClass} ${fade ? styles.toastFade : ""}`}
    >
      <span>{message}</span>
      {showCloseButton && (
        <button
          type="button"
          className={styles.toastClose}
          onClick={() => setFade(true)}
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
