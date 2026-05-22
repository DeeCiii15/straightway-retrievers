import Image from "next/image";
import { siteConfig } from "@/lib/siteConfig";

type AboutPhoto = (typeof siteConfig.aboutPhotos)[number];

const supportingStyles = [
  "min-h-[9rem] -rotate-3 sm:min-h-[10.5rem] lg:min-h-[12rem] lg:-rotate-[3.5deg]",
  "min-h-[9rem] rotate-3 sm:min-h-[10.5rem] lg:min-h-[12rem] lg:rotate-[3.5deg]",
] as const;

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
      className={`relative min-h-0 overflow-hidden rounded-2xl shadow-[0_12px_40px_-12px_rgba(30,61,47,0.18)] ${className}`}
    >
      <Image
        src={photo.src}
        alt={photo.alt}
        fill
        priority={priority}
        className="object-cover object-center"
        sizes="(min-width: 1024px) 28vw, 45vw"
      />
    </div>
  );
}

type AboutPhotoCollageProps = {
  className?: string;
};

export function AboutPhotoCollage({ className = "" }: AboutPhotoCollageProps) {
  const photos = siteConfig.aboutPhotos;

  if (photos.length === 0) {
    return null;
  }

  const [main, ...supporting] = photos;

  if (supporting.length === 0) {
    return (
      <div className={className}>
        <PhotoFrame photo={main} priority className="min-h-[18rem] sm:min-h-[22rem]" />
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col gap-5 sm:gap-6 lg:flex-row lg:items-center lg:gap-7 ${className}`}
    >
      <PhotoFrame
        photo={main}
        priority
        className="min-h-[18rem] !rounded-3xl sm:min-h-[22rem] lg:min-h-[28rem] lg:flex-[1.35]"
      />

      <div className="flex flex-col justify-center gap-5 sm:gap-6 lg:flex-[1] lg:gap-7 lg:py-1">
        {supporting.map((photo, index) => (
          <PhotoFrame
            key={photo.src}
            photo={photo}
            className={supportingStyles[index] ?? supportingStyles[0]}
          />
        ))}
      </div>
    </div>
  );
}
