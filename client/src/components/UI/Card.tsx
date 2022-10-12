interface CardProps {
  title: string;
  children: React.ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <div className="rounded-md dark:bg-neutral-700 bg-white shadow-md">
      <div className="p-2 rounded-t-md text-center text-white bg-primary_light dark:bg-primary_dark">
        {title}
      </div>
      {children}
    </div>
  );
}
