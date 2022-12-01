import React from "react";

type Props = {
  url: string;
  alt: string;
};

const Image = (props: Props) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Daisy Works</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button className="btn-primary btn">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default Image;
