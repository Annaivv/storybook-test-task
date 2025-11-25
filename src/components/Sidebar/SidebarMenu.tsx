"use client";
import { useState } from "react";
import styles from "./SidebarMenu.module.css";
import { MenuItem } from "./menu";

interface SidebarMenuProps {
  menuItems: MenuItem[];
  initialActive?: boolean;
  initialOpenItems?: string[];
}

export default function SidebarMenu({
  menuItems,
  initialActive = false,
  initialOpenItems = [],
}: SidebarMenuProps) {
  const [active, setActive] = useState(initialActive);
  const [openItems, setOpenItems] = useState<string[]>(initialOpenItems);

  const toggleItem = (label: string) => {
    setOpenItems((prev) =>
      prev.includes(label) ? prev.filter((l) => l !== label) : [...prev, label]
    );
  };

  const renderItems = (items: MenuItem[], level = 0) => {
    return (
      <ul style={{ paddingLeft: level * 16 }}>
        {items.map((item) => {
          const hasChildren = !!item.children?.length;
          const isOpen = openItems.includes(item.label);

          return (
            <li key={item.label} className={styles.item}>
              <div
                className={styles.row}
                onClick={() => hasChildren && toggleItem(item.label)}
              >
                {item.href ? (
                  <a href={item.href}>{item.label}</a>
                ) : (
                  <span>{item.label}</span>
                )}

                {hasChildren && (
                  <span
                    className={`${styles.arrow} ${isOpen ? styles.open : ""}`}
                  >
                    ▶
                  </span>
                )}
              </div>

              {hasChildren && isOpen && renderItems(item.children!, level + 1)}
            </li>
          );
        })}
      </ul>
    );
  };

  return (
    <>
      <button
        type="button"
        className={`${styles.hamburger} ${active ? styles.open : ""}`}
        onClick={() => setActive((prev) => !prev)}
      >
        <span className={`${styles.bar} ${styles.bar1}`}></span>
        <span className={`${styles.bar} ${styles.bar2}`}></span>
        <span className={`${styles.bar} ${styles.bar3}`}></span>
      </button>
      <aside className={`${styles.navigation} ${active ? styles.active : ""}`}>
        <nav>{renderItems(menuItems)}</nav>
      </aside>
    </>
  );
}
