// src/pages/order/Failure.tsx
export default function Failure() {
  return (
    <div className="min-h-screen bg-[#F5F5F5] flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-6 max-w-sm w-full text-center flex flex-col gap-4">
        
        <div className="text-5xl">❌</div>

        <h1 className="text-xl font-semibold text-[#181725]">
          Order Failed
        </h1>

        <p className="text-sm text-[#7C7C7C]">
          Something went wrong. Please try again.
        </p>

        <button
          onClick={() => window.location.href = "/cart"}
          className="
            h-12 w-full
            bg-[#53B175]
            text-white font-semibold
            rounded-xl
          "
        >
          Try Again
        </button>
      </div>
    </div>
  )
}
