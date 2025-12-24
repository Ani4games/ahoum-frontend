export default function SuccessPage() {
  return (
    <div className="success">
      <h1>Order Placed 🎉</h1>
      <p>Thank you for shopping with us</p>
      <button>Go Home</button>
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