interface AnimeTitleProps {
  title: string;
}

export function AnimeTitle({title}: AnimeTitleProps) {
  return (
    <h1 className="font-bold text-white p-1">
      {title}
    </h1>
  )
} 