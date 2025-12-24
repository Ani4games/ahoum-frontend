export default function LoginPage() {
  return (
    <div className="auth">
      <h1>Login</h1>
      <input placeholder="Email" />
      <input placeholder="Password" type="password" />
      <button>Login</button>
    </div>
  );
}

export const runtime = "edge";
export const revalidate = 0;
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const preferredRegion = "auto";
export const dynamicParams = true;
export const generateStaticParams = async () => {
  return [];
}
export const generateMetadata = async () => {
  return {
    title: "Login - MyApp",
    description: "Login to access your account on MyApp.",
  };
}