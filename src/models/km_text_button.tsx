export const KMTextButton = (
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) => {
  return (
    <button
      {...props}
      className={`${props.className || ""} flex justify-center items-center bg-[--primary-color] hover:bg-[--primary-color-hover] active:bg-[--primary-color-active] dark:bg-[--secondary-color] dark:hover:bg-[--secondary-color-hover] dark:active:bg-[--secondary-color-active] m-auto px-4 py-1 rounded-full font-medium text-[--text-color-alternate]`}
    >
      {props.children}
    </button>
  );
};
