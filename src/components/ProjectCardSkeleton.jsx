export const ProjectCardSkeleton = ({ reverse }) => {
  return (
    <div
      className={`flex flex-col-reverse md:flex-row ${
        reverse ? "md:flex-row-reverse" : ""
      } border-gray-200 md:h-[500px] dark:border-gray-800 overflow-hidden animate-pulse`}
    >
      {/* Content Side */}
      <div className="md:w-1/2 p-8 flex flex-col justify-center text-left">
        {/* Category Label */}
        <div className="h-4 w-24 bg-gray-200 dark:bg-gray-700 mb-4 rounded" />
        
        {/* Title */}
        <div className="h-8 w-3/4 bg-gray-300 dark:bg-gray-600 mb-4 rounded" />
        
        {/* Description Lines */}
        <div className="space-y-2 mb-6">
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-4 w-full bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>

        {/* Tech Icons Placeholder */}
        <div className="flex gap-3 mb-6">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700" />
          ))}
        </div>

        {/* Button Placeholder */}
        <div className="h-10 w-32 bg-gray-200 dark:bg-gray-700 rounded" />
      </div>

      {/* Image Side */}
      <div className="md:w-1/2 h-64 md:h-full bg-gray-300 dark:bg-gray-800" />
    </div>
  );
};