interface AnimeTitleProps {
  title: string;
}

export function AnimeTitle({title}: AnimeTitleProps) {
  return (
    <h1>
      {title}
    </h1>
  )
} 