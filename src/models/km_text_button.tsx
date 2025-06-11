export const KMTextButton = (props: React.ComponentProps<any>) => {
  return (
    <button
      {...props}
      className="flex justify-center items-center bg-[--primary-color] hover:bg-[--primary-color-hover] dark:hover:bg-[--secondary-color-hover] active:bg-[--primary-color-active] dark:active:bg-[--secondary-color-active] dark:bg-[--secondary-color] m-auto px-4 py-1 rounded-full font-medium text-[--text-color-alternate]"
    >
      {props.children}
    </button>
  );
};
