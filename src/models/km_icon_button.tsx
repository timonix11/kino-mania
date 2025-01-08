export const KMIconButton = ({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) => {
  return (
    <button
      className="rounded-full bg-[--primary-color] hover:bg-[--primary-color-hover] active:bg-[--primary-color-active] dark:bg-[--secondary-color] dark:hover:bg-[--secondary-color-hover] dark:active:bg-[--secondary-color-active] w-9 h-9 flex items-center justify-center text-[--text-color-alternate] text-2xl"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
