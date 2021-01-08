import React from 'react';
import Card from './card';
import ITEMS from '../data/dummy-data';
import SectionTitle from './sectionTitle';

const TradeArea = ({title, text}) => {

    const viewContent = (arr) => {
        const content = arr.map(item => {

            return (
                <Card item={item} />
            )
        })
        return content;
    }



  return (
    <>
    <div className='container-fluid trand'>
        <SectionTitle title={title} text={text}/>
        <div className='products products_holder row'>
            {viewContent(ITEMS)}
        </div>
    </div>
    </>
  );
}
export default TradeArea;
