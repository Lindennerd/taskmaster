interface CardProps {
  title: string;
  children: React.ReactNode;
}

export function Card({ title, children }: CardProps) {
  return (
    <div className="rounded dark:bg-gray-900 bg-white shadow-md">
      <div className="p-2 text-center border-b dark:border-b-gray-800">
        {title}
      </div>
      {children}
    </div>
  );
}
