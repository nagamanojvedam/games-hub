function PlatformItem({ platform }) {
  return (
    <li>
      {" "}
      <div>
        <img
          src={`./icons/${platform.slug}.svg`}
          alt={`${platform.name}`}
          className="h-4 w-4"
        />{" "}
      </div>
    </li>
  );
}

export default PlatformItem;
