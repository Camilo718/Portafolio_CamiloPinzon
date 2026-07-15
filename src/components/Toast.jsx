import { useState, useEffect, createContext, useContext, useCallback } from "react";

const ToastContext = createContext(null);

export function useToast() {
  return useContext(ToastContext);
}

const ICONS = {
  success: "✅",
  error:   "❌",
  info:    "ℹ️",
  warning: "⚠️",
};

const COLORS = {
  success: { bg: "#ECFDF5", border: "#6EE7B7", text: "#065F46" },
  error:   { bg: "#FEF2F2", border: "#FCA5A5", text: "#991B1B" },
  info:    { bg: "#EFF6FF", border: "#93C5FD", text: "#1E40AF" },
  warning: { bg: "#FFFBEB", border: "#FCD34D", text: "#92400E" },
};

function ToastItem({ toast, onRemove }) {
  const [visible, setVisible] = useState(false);
  const c = COLORS[toast.type] || COLORS.info;

  useEffect(() => {
    setTimeout(() => setVisible(true), 10);
    const timer = setTimeout(() => {
      setVisible(false);
      setTimeout(() => onRemove(toast.id), 300);
    }, toast.duration || 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      style={{
        background: c.bg,
        border: `1px solid ${c.border}`,
        color: c.text,
        borderRadius: 14,
        padding: "12px 16px",
        display: "flex",
        alignItems: "center",
        gap: 10,
        minWidth: 280,
        maxWidth: 360,
        boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(100%)",
        transition: "all 0.3s cubic-bezier(0.34,1.56,0.64,1)",
        cursor: "pointer",
      }}
      onClick={() => {
        setVisible(false);
        setTimeout(() => onRemove(toast.id), 300);
      }}
    >
      <span style={{ fontSize: 18 }}>{ICONS[toast.type]}</span>
      <div style={{ flex: 1 }}>
        {toast.title && (
          <p style={{ fontWeight: 600, fontSize: 13, marginBottom: 2 }}>{toast.title}</p>
        )}
        <p style={{ fontSize: 13, opacity: 0.9 }}>{toast.message}</p>
      </div>
      <span style={{ fontSize: 16, opacity: 0.5 }}>×</span>
    </div>
  );
}

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const toast = useCallback((type, message, title, duration) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, type, message, title, duration }]);
  }, []);

  const remove = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const api = {
    success: (msg, title) => toast("success", msg, title),
    error:   (msg, title) => toast("error",   msg, title),
    info:    (msg, title) => toast("info",     msg, title),
    warning: (msg, title) => toast("warning",  msg, title),
  };

  return (
    <ToastContext.Provider value={api}>
      {children}
      <div style={{
        position: "fixed", bottom: "1.5rem", right: "1.5rem",
        display: "flex", flexDirection: "column", gap: 10,
        zIndex: 9999,
      }}>
        {toasts.map((t) => (
          <ToastItem key={t.id} toast={t} onRemove={remove} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}
