export const KMTextButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <button className="text-[--text-color-alternate] bg-[--primary-color] hover:bg-[--primary-color-hover] active:bg-[--primary-color-active] dark:bg-[--secondary-color] dark:hover:bg-[--secondary-color-hover] dark:active:bg-[--secondary-color-active] px-4 py-1 rounded-full font-medium">
      {children}
    </button>
  );
};
