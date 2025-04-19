import PlatformItem from "./PlatformItem";

function PlatformsList({ platforms }) {
  return (
    <ul className="flex items-center gap-2">
      {platforms.map((platformObj) => (
        <PlatformItem
          platform={platformObj.platform}
          key={platformObj.platform.id}
        />
      ))}
    </ul>
  );
}

export default PlatformsList;
