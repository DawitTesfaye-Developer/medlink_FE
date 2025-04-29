export default function Button({ children, className, ...props }: { children: React.ReactNode; className?: string }) {
  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
