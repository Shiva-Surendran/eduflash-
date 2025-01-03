"use client";

import { useRouter } from "next/navigation";
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  const router = useRouter(); // Initialize the router for navigation

  // Handle login click
  const handleLoginClick = () => {
    // Redirect to /dash page upon login click
    router.push("/api/auth/login");
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* Left side (Login Form Section) */}
      

      <div className="relative hidden bg-muted lg:block">
        <img
          src="/imglogin.jpg"  // Image path in the public folder
          alt="Image"
          className="absolute inset-0 h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>

      {/* Right side (Image Section) */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center items-center mb-12">
          <a href="#" className="font-medium text-center">
            <h1 className="text-3xl font-bold">EDUFLASH</h1>
          </a>
        </div>
        <div className="flex justify-center">
          <div className="w-full max-w-xs">
            <LoginForm onLogin={handleLoginClick} /> {/* Pass handleLoginClick to LoginForm */}
          </div>
        </div>
      </div>

    </div>
  );
}
