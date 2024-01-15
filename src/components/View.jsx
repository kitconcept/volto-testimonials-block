import React, { useCallback, useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import cx from 'classnames';
import Body from './Body';
import { withBlockExtensions } from '@plone/volto/helpers';
import { DotButton, NextButton, PrevButton } from './DotsAndArrows';

const TestimonialsView = (props) => {
  const {
    className,
    data,
    isEditMode = false,
    block,
    openObjectBrowser,
    onChangeBlock,
    slideIndex,
    setSlideIndex,
  } = props;

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const isDraggable = data.slides?.length > 1;

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    watchDrag: isDraggable,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollPrev();
      setSlideIndex && setSlideIndex(selectedIndex - 1);
    }
  }, [emblaApi, selectedIndex, setSlideIndex]);

  const scrollNext = useCallback(() => {
    if (emblaApi) {
      emblaApi.scrollNext();
      setSlideIndex && setSlideIndex(selectedIndex + 1);
    }
  }, [emblaApi, selectedIndex, setSlideIndex]);

  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) {
        emblaApi.scrollTo(index);
        setSlideIndex && setSlideIndex(index);
      }
    },
    [emblaApi, setSlideIndex]
  );

  const onInit = useCallback((emblaApi) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);

  useEffect(() => {
    // This syncs the current slide with the objectwidget (or other sources
    // able to access the slider context)
    // that can modify the SliderContext (and come here via props slideIndex)
    if (isEditMode) {
      scrollTo(slideIndex);
    }
  }, [slideIndex, scrollTo, isEditMode]);

  const sliderContainerWidth = emblaApi
    ?.rootNode()
    .getBoundingClientRect().width;

  return (
    <>
      <div
        className={cx(
          'block testimonials',
          data.slides?.length === 1 && 'one',
          data.slides?.length === 2 && 'two',
          className
        )}
        style={{ '--slider-container-width': `${sliderContainerWidth}px` }}
      >
        {data.slides?.length > 0 && (
          <>
            <div className="testimonials-wrapper">
              {!data.hideArrows && data.slides?.length > 1 && (
                <>
                  <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
                  <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
                </>
              )}
              <div className="testimonials-viewport" ref={emblaRef}>
                <div className="testimonial-container">
                  {data.slides &&
                    data.slides.map((item, index) => {
                      return (
                        <div key={item['@id']} className="testimonial-slide">
                          <Body
                            {...props}
                            key={item['@id']}
                            data={item}
                            isEditMode={isEditMode}
                            dataBlock={data}
                            index={index}
                            block={block}
                            openObjectBrowser={openObjectBrowser}
                            onChangeBlock={onChangeBlock}
                            isActive={selectedIndex === index}
                          />
                        </div>
                      );
                    })}
                </div>
              </div>
            </div>
            {data.slides?.length > 1 && (
              <div className="testimonial-dots">
                {scrollSnaps.map((_, index) => (
                  <DotButton
                    key={index}
                    index={index}
                    onClick={() => scrollTo(index)}
                    className={'testimonial-dot'.concat(
                      index === selectedIndex
                        ? ' testimonial-dot--selected'
                        : ''
                    )}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default withBlockExtensions(TestimonialsView);
