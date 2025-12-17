import React from 'react'
import Card from './Card';

const AllitemsContainer = ({category}) => {
  const allItems=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  return (
    <>
      <section className="all-items-container">
          <h2>Showing(20 of?)</h2>
          <div className="all-items">
           {
            allItems.map((item)=>(
              <Card key={item} category={category} id={item}/>
            ))
           }
          </div>
        </section>
    </>
  )
}

export default AllitemsContainer;
