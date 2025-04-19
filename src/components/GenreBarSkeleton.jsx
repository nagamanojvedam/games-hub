function GenreBarSkeleton() {
  return (
    <nav className="hidden lg:flex lg:flex-col lg:gap-4 lg:p-4">
      <h3 className="text-2xl font-bold">Genres</h3>
      <ul className="flex flex-col gap-1">
        {/* Skeleton loader for genres */}
        {Array.from({ length: 20 }).map((_, index) => (
          <li
            key={index}
            className="flex animate-pulse cursor-pointer items-center gap-2 rounded-lg bg-gray-300 px-3 py-2 dark:bg-gray-700"
          >
            <div className="h-10 w-10 rounded-lg bg-gray-400 dark:bg-gray-600" />
            <div className="h-4 w-24 bg-gray-400 dark:bg-gray-600" />
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default GenreBarSkeleton;
