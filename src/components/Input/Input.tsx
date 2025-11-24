"use client";

import { useState } from "react";
import styles from "./Input.module.css";
import { Eye, EyeOff, X } from "lucide-react";

interface InputProps {
  type?: "text" | "password" | "number";
  clearable?: boolean;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function Input({
  type = "text",
  clearable = false,
  value,
  onChange,
  placeholder,
}: InputProps) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className={styles.wrapper}>
      <input
        type={inputType}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={styles.input}
      />

      {isPassword && (
        <button
          type="button"
          className={styles.iconButton}
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      )}

      {clearable && value !== "" && !isPassword && (
        <button
          type="button"
          className={styles.iconButton}
          onClick={() => onChange("")}
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
}
