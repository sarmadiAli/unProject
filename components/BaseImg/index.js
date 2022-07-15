import Image from 'next/image';

const BaseImg = ({
  src,
  alt = 'image',
  size =  {
    h :150,
    w:150
  },
  q = 60,
  layout ='responsive' ,
  objectFit = 'contain'
}) => {

  return (
    <Image
      src={`${src}`}
      alt={alt}
      width={size.w}
      height={size.h}
      layout={layout}
      objectFit={objectFit}
    />
  );
};

export default BaseImg;
