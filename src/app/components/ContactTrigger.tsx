"use client";

import { useContactModal } from "./ContactModalContext";

type ContactTriggerProps = {
  className?: string;
  children: React.ReactNode;
  onNavigate?: () => void;
};

export function ContactTrigger({ className, children, onNavigate }: ContactTriggerProps) {
  const { openContact } = useContactModal();

  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        openContact();
        onNavigate?.();
      }}
    >
      {children}
    </button>
  );
}
