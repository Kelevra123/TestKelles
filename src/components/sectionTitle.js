import React from 'react';

export default function SectionTitle({title, text}) {
  return (
    <>
        <div className='wrap_title des_title'>
            <h3 className="section-title tc pr d-flex justify-content-center ai_center fs__24 title_2">
                <span className="mr__10 ml__10">{title}</span>
            </h3>
            <span className="section-subtitle db tc sub-title">{text}</span>
        </div>
    </>
  );
}
