import { LoginSection, LoginBanner } from "@/ui/loginPage";

export default function Login() {
  return (
    <div className="flex">
        <LoginBanner />
        <LoginSection />
    </div>
  );
}
