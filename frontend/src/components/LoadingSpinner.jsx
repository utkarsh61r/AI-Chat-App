const sizeMap = {
  small: "h-4 w-4 border-2",
  medium: "h-8 w-8 border-[3px]",
  large: "h-12 w-12 border-[4px]",
};

export default function LoadingSpinner({ size = "medium" }) {
  return (
    <div className="inline-flex items-center justify-center">
      <div
        className={[
          "animate-spin rounded-full border border-lime-300/20 border-t-lime-300",
          sizeMap[size] || sizeMap.medium,
        ].join(" ")}
        aria-label="Loading"
        role="status"
      />
    </div>
  );
}
