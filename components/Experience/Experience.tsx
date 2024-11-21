"use client";
import { timeline } from '@/utils/staticData';
import React from 'react';

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const Experience: React.FC = () => {
    return (
        <div className="mt-8 md:mt-32">
            <h2 className="text-4xl mb-5 font-bold text-center text-primary">Experience</h2>
            <VerticalTimeline>
                {timeline.map((t, i) => {
                    const contentStyle = { background: '#1F2937', color: '#fff' }
                    return (
                        <VerticalTimelineElement
                            key={i}
                            className="vertical-timeline-element--work"
                            contentStyle={contentStyle}
                            date={t.date}

                            {...t.icon}
                        >
                            {t.title ? (
                                <React.Fragment>
                                    <h3 className="vertical-timeline-element-title">{t.title}</h3>
                                    {t.subtitle && (
                                        <h4 className="vertical-timeline-element-subtitle">
                                            {t.subtitle}
                                        </h4>
                                    )}
                                    {t.desc && <p>{t.desc}</p>}
                                </React.Fragment>
                            ) : undefined}
                        </VerticalTimelineElement>
                    );
                })}
            </VerticalTimeline>
        </div>
    );
};

export default Experience;