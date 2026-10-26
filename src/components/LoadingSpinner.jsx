export default function LoadingSpinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
      <p className="mt-3 text-sm text-gray-500">Loading photos...</p>
    </div>
  );
}
