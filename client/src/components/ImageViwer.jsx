import React from 'react';
import { Image } from 'antd';

function ViewerImage({ className, src }) {
  return (
    <div className={className}>
      <Image
        width={200}
        src={src}
        placeholder={<Image preview={false} src={src} width={200} />}
      />
    </div>
  );
}

export default ViewerImage;
