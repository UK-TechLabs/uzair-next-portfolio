import { ReviewCardProps } from "@/interfaces/reviews.interface";
import React from "react";


const ReviewCard: React.FC<ReviewCardProps> = ({ review, name, company }) => {
    return (
        <div className="flex flex-col h-96 md:h-64 justify-between bg-[#1F2937] border text-white shadow-lg p-6 rounded-lg mx-4 w-[300px] md:w-[500px]">
            <p className="text-lg italic mb-4">"{review}"</p>
            <div className="text-sm">
                <p className="font-semibold">{name}</p>
                <p>{company}</p>
            </div>
        </div>
    );
};

export default ReviewCard;