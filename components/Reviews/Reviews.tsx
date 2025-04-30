import { reviews } from "@/utils/staticData";
import React from "react";
import ReviewCard from "./ReviewCard";
import Marquee from "react-fast-marquee";

const Reviews = () => {
  return (
    <div id="reviews" className="mt-8 md:mt-32">
      <h2 className="text-3xl md:text-4xl mb-5 md:mb-10 font-bold text-center text-primary">
        Reviews
      </h2>
      <div className="rounded-lg">
        <Marquee
          pauseOnClick
          speed={50}
          pauseOnHover={true}
          gradient={true}
          gradientColor="#111827"
        >
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              review={review.review}
              name={review.name}
              company={review.company}
            />
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Reviews;
