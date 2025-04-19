function GamesSkeleton() {
  return (
    <section className="grid grid-cols-1 gap-4 p-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {/* Create a skeleton loader for each game */}
      {Array.from({ length: 20 }).map((_, index) => (
        <div
          key={index}
          className="flex animate-pulse flex-col rounded-lg bg-stone-200 shadow-sm dark:bg-indigo-900"
        >
          {/* Skeleton loader for image */}
          <div className="h-[300px] w-full rounded-t-lg bg-gray-400 dark:bg-gray-600" />

          <div className="flex flex-col gap-2 p-4">
            <div className="flex items-center justify-between">
              {/* Skeleton loader for platforms */}
              <div className="h-4 w-16 rounded-md bg-gray-400 dark:bg-gray-600"></div>

              {/* Skeleton loader for criticsRating */}
              <div className="h-6 w-12 rounded-sm bg-green-300/60 dark:bg-green-400/20" />
            </div>
            <div>
              {/* Skeleton loader for game name */}
              <div className="h-6 w-3/4 rounded-md bg-gray-400 dark:bg-gray-600"></div>

              {/* Skeleton loader for emoji */}
              <div className="mt-2 h-4 w-12 rounded-md bg-gray-400 dark:bg-gray-600" />
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default GamesSkeleton;
