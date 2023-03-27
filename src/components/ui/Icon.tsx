import dynamic from 'next/dynamic';

interface IIcon {
  iconName: string;
}

export const Icon = ({ iconName }: IIcon) => {
  const IconComponent = dynamic(() =>
    import(`./icons/${iconName}.svg`).then((module) => module.default)
  );

  return <IconComponent />;
};





// import Image from 'next/image';
// import Component from './icons/alert.svg';

// interface IIcon {
//   iconName: string;
// }

// export const Icon = ({ iconName }: IIcon) => {
//   // const { default: Component } = require(`./icons/${iconName}.svg`);
//   return (
//     <Component className="icon" />
//     // <Image
//     //   src="/thirteen.svg"
//     //   alt="Vercel Logo"
//     //   width={100}
//     //   height={24}
//     //   priority
//     // />
//   );
// };
