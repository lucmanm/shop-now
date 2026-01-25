import { LoginForm } from "./login-form";

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen min-w-full">
      <div className="w-full max-w-sm md:max-w-4xl ">
        <LoginForm />
      </div>
    </div>
  );
}
