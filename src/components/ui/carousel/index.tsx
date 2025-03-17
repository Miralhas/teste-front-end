import useEmblaCarousel from "embla-carousel-react";
import { PropsWithChildren, useCallback } from "react";

const Carousel = ({ children }: PropsWithChildren) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi]);

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {children}
        </div>
      </div>
      <button className="embla__prev rounded-full shadow" onClick={scrollPrev}>
        {"<"}
      </button>
      <button className="embla__next rounded-full shadow" onClick={scrollNext}>
        {">"}
      </button>
    </div>
  )
}

export default Carousel;
