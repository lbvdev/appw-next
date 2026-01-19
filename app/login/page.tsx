import { LoginSection, LoginBanner } from "@/ui/LoginPage";

export default function Login() {
  return (
    <div className="flex">
        <LoginBanner />
        <LoginSection />
    </div>
  );
}
