import React, { useState } from "react";
import MyRouter from "./router";
import { Toaster } from "sonner";
import { AuthProvider } from "./context/authContext";
function App() {
  return (
    <div className="font-mono">
      <Toaster richColors />
      <AuthProvider>
        <MyRouter />
      </AuthProvider>
    </div>
  );
}

export default App;
