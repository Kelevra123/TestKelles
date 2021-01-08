import React from 'react';
import {INST_ITEMS} from '../data/dummy-data'
import SectionTitle from './sectionTitle'

export default function Instagram () {

    const content = INST_ITEMS.map(item => {

       
        return (
            <div className='col-lg-2 col-md-3 col-6 inst-item'>
                    <img className='inst-photo' src={item.photo} alt='...'></img>
                </div>
        )
    })
  return (
    <>
    <SectionTitle title='@ FOLLOW US ON INSTAGRAM' text=''/>
        <div className='container-fluid inst'>
            <div className='row inst-container'>
                {content}
            </div>
        </div>
    </>
  );
}
