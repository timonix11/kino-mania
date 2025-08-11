import { KMTextButton } from "../models/km_text_button";

export default function KMModalAuth({
  setOnOpenLoginModal,
}: {
  setOnOpenLoginModal: () => void;
}) {
  return (
    <div className="top-0 right-0 bottom-0 left-0 z-10 absolute flex justify-center items-center">
      <div className="flex flex-col gap-4 bg-white dark:bg-[--background-color] shadow-xl p-4 border border-[rgb(228,228,231)] dark:border-[rgb(39,39,42)] rounded-2xl">
        <h1 className="border-[rgb(228,228,231)] dark:border-[rgb(39,39,42)] border-b w-full font-bold text-[--primary-color] dark:text-[--secondary-color] text-2xl">
          Авторизація
        </h1>
        <div className="flex justify-between items-center gap-2">
          <p className="font-semibold text-[--primary-color] dark:text-[--secondary-color]">
            Email
          </p>
          <input
            type="email"
            className="bg-[--background-color] p-2 border border-[rgb(228,228,231)] dark:border-[rgb(39,39,42)] rounded-lg focus:outline-none focus:ring-[--primary-color] focus:ring-2 dark:focus:ring-[--secondary-color] w-80"
            placeholder="Введіть ваш email"
            autoComplete="email"
          />
        </div>
        <div className="flex justify-between items-center gap-2">
          <p className="font-semibold text-[--primary-color] dark:text-[--secondary-color]">
            Password
          </p>
          <input
            type="password"
            className="bg-[--background-color] p-2 border border-[rgb(228,228,231)] dark:border-[rgb(39,39,42)] rounded-lg focus:outline-none focus:ring-[--primary-color] focus:ring-2 dark:focus:ring-[--secondary-color] w-80"
            placeholder="Введіть ваш пароль"
            autoComplete="current-password"
          />
        </div>
        <a href="#" className="link-border w-fit">
          Реєстрація
        </a>
        <div className="flex gap-2">
          <KMTextButton className="m-0 w-full">Увійти</KMTextButton>
          <KMTextButton onClick={setOnOpenLoginModal}>Закрити</KMTextButton>
        </div>
      </div>
    </div>
  );
}
