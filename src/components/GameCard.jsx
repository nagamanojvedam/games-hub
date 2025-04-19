import PlatformsList from "./PlatformsList";
import EmojiItem from "./EmojiItem";

function GameCard({ game }) {
  const {
    name,
    parent_platforms: platforms,
    background_image,
    metacritic: criticsRating,
    ratings,
  } = game;

  const suggestRating = ratings?.at(0)?.title || "no-rating";
  const coverImage = background_image || "./images/no-image-placeholder.png";
  return (
    <div className="flex flex-col rounded-lg bg-stone-200 shadow-sm dark:bg-indigo-900">
      <img
        src={coverImage}
        alt={`${name}'s image`}
        className="block h-[80%] w-full rounded-t-lg object-fill object-center"
      />

      <div className="flex flex-col gap-2 p-4">
        <div className="flex items-center justify-between">
          <PlatformsList platforms={platforms} />
          <p className="rounded-sm bg-green-300/60 px-2 text-sm font-semibold text-green-900 dark:bg-green-400/20 dark:text-green-300">
            {criticsRating}
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold">{name}</h3>
          <EmojiItem emoji={suggestRating} />
        </div>
      </div>
    </div>
  );
}

export default GameCard;
