import Image from 'next/image';

const Logo = () => {
  return (
    <div className="relative h-14 w-14 lg:w-16 lg:h-16">
      <Image
        className="h-full w-full dark:hidden"
        src="/svg/logo-light.svg"
        alt="logo"
        width={100}
        height={100}
      />
      <Image
        className="absolute inset-0 h-full w-full hidden dark:block"
        src="/svg/logo-dark.svg"
        alt="logo"
        width={100}
        height={100}
      />
    </div>
  );
};

export default Logo;