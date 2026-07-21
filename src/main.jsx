import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import { LanguageProvider } from "./context/LanguageContext";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <LanguageProvider>
      <Toaster
        position="bottom-right"
        richColors
        closeButton
        toastOptions={{ style: { borderRadius: "14px", fontSize: "13px" } }}
      />
      <App />
    </LanguageProvider>
  </StrictMode>
);
