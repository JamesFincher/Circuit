import React from 'react'

type Props = {}

const Art = (props: any) => {
  const { images } = props

  console.log(images, 'images')

  return (
      <p className="testing">testing</p>
  )
}
  

export default Art


















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
