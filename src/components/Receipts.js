import React from "react";
import Ingredients from "./Ingredients";





const Receipts = ({meal, setMeal}) => {
  return (
    <div className='inputs'>
        <hr className={'line'} />
      <input style={{marginBottom:'40px'}} onChange={() => setMeal('first')} style={{marginTop: '50px'}}  name="group3" type="radio"  />Мясо по-французски
      <input onChange={() => setMeal('second')} name="group3" type="radio"  /> Гуляш
      <input onChange={() => setMeal('third')} name="group3" type="radio"  /> Бризоль
      <Ingredients meal={meal}/>
    </div>
  );
};

export default Receipts;
