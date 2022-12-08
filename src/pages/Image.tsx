import React from "react";
import Image from "next/image";

const Art = (props: any) => {
  const { images, loading } = props;

  console.log(images, "images");

  if (loading === true) {
    return <div>Loading...</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
      {images.map((image: any) => (
        <div className="card w-96 bg-base-100 shadow-xl" key={image.url}>
          <figure>
            <Image src={image.url} alt={image.alt} width={500} height={500} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Daisy Works</h2>
            <p>{image.url}</p>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn-primary btn">Buy Now</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Art;

// /* eslint-disable @next/next/no-img-element */
// import React from "react";

// type Props = {
//   url?: any;
//   alt?: any;
// };

// const Art = (props: Props) => {
//   const { url, alt } = props;
//   console.log(url, alt);
//   return (
//     <div className="card w-96 bg-base-100 shadow-xl">
//       <figure>
//         <img src={url} alt={alt} />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">Daisy Works</h2>
//         <p>{url}</p>
//         <p>If a dog chews shoes whose shoes does he choose?</p>
//         <div className="card-actions justify-end">
//           <button className="btn-primary btn">Buy Now</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Art;
