// interface images {
//   url?: string;
//   id?: string;
//   name?: string;
// }

// interface imageList {
//   id: string;
//   name: string;
//   url: string;
//   createdAt: string;
//   updatedAt: string;
//   userId: string;
// }

// interface images {
//   imageList?: imageList[];
// }

Image.tsx;
interface image {
  url: string;
  alt: string;
}
interface ImageProps {
  images: [image];
  loading: boolean;
}
