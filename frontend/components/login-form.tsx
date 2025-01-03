// components/login-form.tsx
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface LoginFormProps {
  onLogin: () => void; // Function to handle login click (navigation logic)
}

export function LoginForm({ onLogin, className, ...props }: LoginFormProps) {
  return (
    <form className={`flex flex-col gap-6 ${className}`} {...props}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Login to your account</h1>
        
      </div>
        
        <div className="grid gap-2">
          
        </div>
        <Button type="button" className="w-full" onClick={onLogin}> {/* Handle login click */}
          Login
        </Button>
      <div className="text-center text-sm">
        Don&apos;t have an account?{" "}
        <a href="#" className="underline underline-offset-4">
          Sign up
        </a>
      </div>
    </form>
  );
}
