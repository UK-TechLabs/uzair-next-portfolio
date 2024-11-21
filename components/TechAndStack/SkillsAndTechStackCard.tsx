import React from 'react'

const SkillsAndTechStackCard = ({ value }: {value: number}) => {

      const clipValue = `${100 - value * 20}%`;
      return (
        <div className="relative w-12 h-12">
          <div className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-gray-700"></div>
          <div
            className="absolute top-0 left-0 w-full h-full rounded-full border-4 border-green-700"
            style={{ clipPath: `inset(0 ${clipValue} 0 0)` }}
          ></div>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <span className="text-sm font-semibold">{value}/5</span>
          </div>
        </div>
      );
}

export default SkillsAndTechStackCard