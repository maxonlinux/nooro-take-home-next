import Image from "next/image";

const Header = () => {
  return (
    <header className="h-[200px] flex items-center justify-center bg-header">
      <h1 className="flex items-end gap-2 text-4xl leading-[48.41px] font-black">
        <Image src="/rocket.svg" alt="Todo App Logo" width={22} height={36} />
        <span className="text-blue">Todo</span>
        <span className="text-purple-dark">App</span>
      </h1>
    </header>
  );
};

export default Header;
