import React from 'react';
import cx from 'classnames';
import config from '@plone/volto/registry';

const DefaultImage = (props) => <img {...props} alt={props.alt || ''} />;

const TestimonialsBody = ({ data, isActive }) => {
  const image = data.image?.[0];

  const Image = config.getComponent('Image').component || DefaultImage;

  return (
    <div
      className={cx('grid-teaser-item top', {
        // "empty-slide": !href && isEditMode,
        'slide-visible': isActive,
      })}
    >
      <div className="teaser-item top">
        <div className="teaser-item-title fix-width-issue">
          <p className="testimonial">"{data?.testimonial}"</p>
          <div className="person">
            <Image
              item={image}
              // imageField={image.image_field}
              alt=""
              loading="lazy"
              responsive={true}
            />
            <div>
              <p className="name">{data?.name}</p>
              <span>{data?.additionalData}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsBody;
