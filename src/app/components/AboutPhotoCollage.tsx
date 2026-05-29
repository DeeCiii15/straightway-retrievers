import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

type AboutPhoto = (typeof siteConfig.aboutPhotos)[number];

function PhotoFrame({
  photo,
  priority,
  className = "",
}: {
  photo: AboutPhoto;
  priority?: boolean;
  className?: string;
}) {
  return (
    <div
      className={`relative min-h-0 overflow-hidden bg-[var(--color-sand)] ring-1 ring-[var(--color-dark)]/8 ${className}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        className="object-cover object-[center_30%]"
        sizes="(min-width: 1024px) 22vw, 45vw"
      />
    </div>
  );
}

type AboutPhotoCollageProps = {
  className?: string;
};

export function AboutPhotoCollage({ className = "" }: AboutPhotoCollageProps) {
  const [main, ...supporting] = siteConfig.aboutPhotos;

  return (
    <div
      className={`mx-auto grid w-full max-w-[min(100%,22rem)] grid-cols-12 grid-rows-2 gap-2 sm:max-w-xl sm:gap-3 lg:max-w-2xl ${className}`}
    >
      <PhotoFrame
        photo={main}
        priority
        className="col-span-7 row-span-2 min-h-[20rem] sm:min-h-[26rem] lg:min-h-[30rem]"
      />
      {supporting.map((photo) => (
        <PhotoFrame
          key={photo.src}
          photo={photo}
          className="col-span-5 min-h-[10rem] sm:min-h-[12.5rem] lg:min-h-[14.5rem]"
        />
      ))}
    </div>
  );
}
