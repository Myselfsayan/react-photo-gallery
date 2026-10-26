export default function ErrorMessage({ message }) {
  return (
    <div className="max-w-md mx-auto my-10 p-4 bg-red-50 border border-red-200 rounded-lg text-center text-red-600">
      <p className="font-medium">Failed to load photos</p>
      <p className="text-sm mt-1 text-red-500">{message}</p>
    </div>
  );
}
