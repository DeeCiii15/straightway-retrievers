export const siteConfig = {
  name: "StraightWay Retrievers",
  logo: "/images/straightway-retrievers.jpg",
  heroImage: "/images/straightway-retrievers-hero.jpg",
  heroImageAlt: "Black Labrador retriever in training at StraightWay Retrievers",
  facebookUrl: "https://www.facebook.com/straightway.retrievers",
  instagramUrl: "https://www.instagram.com/straightway.retrievers/",
  heroHeadline: "Training Award Winning Dogs",
  heroTagline: "Field & obedience training in the heart of the Pee Dee",
  mission: "Training Champions for the Field",
  introQuote:
    "Whether you are starting with a young pup or polishing an experienced retriever for competition and hunting season, we build a plan around your dog and your goals.",
  /** Add MP4 files to public/videos/dogs/ (e.g. max.mp4) and update paths below. */
  meetOurDogs: [
    {
      id: "max",
      name: "Max",
      video: "/videos/dogs/max.mp4",
      poster: "/images/training/training_1.jpg",
      posterAlt: "Max, a black Labrador, during training",
    },
    {
      id: "duke",
      name: "Duke",
      video: "/videos/dogs/duke.mp4",
      poster: "/images/training/training_2.jpg",
      posterAlt: "Duke, a black Labrador, during field training",
    },
    {
      id: "rosie",
      name: "Rosie",
      video: "/videos/dogs/rosie.mp4",
      poster: "/images/training/training_3.jpg",
      posterAlt: "Rosie, a black Labrador, working on skills",
    },
  ] as const,
  trainingPrograms: [
    {
      title: "Basic obedience",
      image: "/images/training/training_1.jpg",
      imageAlt: "Labrador retriever practicing basic obedience training",
      body: "Manners, recall, place, and leash work that build a reliable partner at home and on the road.",
    },
    {
      title: "Skill training",
      image: "/images/training/training_3.jpg",
      imageAlt: "Retriever working on advanced skill training",
      body: "Targeted work on the skills your dog needs—steadiness, marking, handling, and controlled retrieves.",
    },
    {
      title: "Field-ready Labs",
      image: "/images/training/training_2.jpg",
      imageAlt: "Labrador retriever prepared for field work",
      body: "Labrador-focused programs that develop confident, capable dogs ready to perform in the field.",
    },
  ],
  serviceArea: "Florence, SC and the surrounding Pee Dee areas",
  familyOwned: "Family owned and operated",
  aboutHeading: "The family behind your dog's training",
  /** First entry = large main photo; rest = smaller supporting images in public/images/about/ */
  aboutPhotos: [
    { src: "/images/about/sw_about_Us_3.jpg", alt: "Kyle and Claussen Garris with their Labrador retrievers" },
    { src: "/images/about/sw_about_us_1.jpg", alt: "StraightWay Retrievers family with their dogs" },
    { src: "/images/about/sq_about_Us_2.jpg", alt: "Family and Labrador retrievers at StraightWay Retrievers" },
  ],
  aboutSummary:
    "We're Kyle and Claussen Garris—a family that lives with Labrador retrievers every day, in our home and in the field. StraightWay Retrievers started the way most good things do: raising dogs we believe in, putting in the reps, and helping friends and neighbors get the same steadiness and joy we want in our own pack. We still train every dog personally, with the warmth you'd expect from family and the discipline it takes to build reliable obedience, marking, and field work. Whether your pup is just learning manners or pushing toward hunt-test and hunting season, you'll work directly with us—not a rotating staff—in Florence and across the Pee Dee.",
  description:
    "StraightWay Retrievers offers dog training from basic obedience to field-ready skill work, specializing in Labrador Retrievers. Serving Florence, SC and the Pee Dee region.",
  email: "hello@straightwayretrievers.com",
  phone: "(555) 000-0000",
  location: "Florence, SC · Pee Dee region",
} as const;
