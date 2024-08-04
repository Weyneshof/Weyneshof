import Text from './text';
import Logo from './logo';

type BannerProps = {
  title: string;
  image?: string;
};

export default function Banner(props: BannerProps) {
  const image = props.image ?? '/WeyHeaderBackgroundReg.jpg';
  return (
    <section
      className=""
      style={{
        background: `linear-gradient(53deg, rgba(88,51,0,0.2) 0%, rgba(207,138,13,0.6) 100%), url(${image}) center center no-repeat`,
        backgroundSize: 'cover',
      }}
    >
      <div>
        <Logo className="mx-auto max-w-[250px]"></Logo>
        <Text
          className="py-4 text-white drop-shadow-2xl"
          variant="heading"
          size="5xl"
          align="center"
        >
          {props.title}
        </Text>
      </div>
      <svg className="fill-background" viewBox="0 0 1440 150">
        <path d="M-23.9,72.6v89.9H1461V74.2c-157.8,38.4-429.9,63.8-739.2,63.8C408.3,138,132.9,111.9-23.9,72.6z"></path>
      </svg>
    </section>
  );
}
