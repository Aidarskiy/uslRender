import React from "react";

const Ingredients = ({ meal, setMeal }) => {
  let recepty;
  if (meal === "first") {
    recepty = (
      <div className='inps'>
        Картофель 5 штук <br/> Свинина 300 г <br/> Лук 1 штука <br/> Помидоры 2 штуки <br/> Сыр 200 г <br/>
        Майонез 150 г <br/> Соль по вкусу <br/> Молотый черный перец по вкусу
        <hr className='line2'/>
      </div>
    );
  } else if (meal === "second") {
    recepty = (
      <div className='inps'>
        Репчатый лук 2 штуки <br/> Свиное филе 500 г <br/> Растительное масло 3 столовые
        ложки <br/> Лавровый лист по вкусу <br/> Томатная паста 2 столовые ложки <br/> Соль по
        вкусу <br/> Смесь перцев по вкусу <br/> Пшеничная мука по вкусу <br/> Вода 3 стакана
        <hr className='line2'/>
      </div>
    );
  } else if (meal === "third") {
    recepty = (
      <div className='inps'>
        Фарш 200 г <br/> Куриное яйцо 5 штук <br/> Лук 1 головка <br/> Соль по вкусу <br/> Молотый
        черный перец по вкусу <br/> Растительное масло по вкусу <br/> Петрушка по вкусу
        <hr className='line2'/>
      </div>
    );
  }

  return <div>{recepty}</div>;
};

export default Ingredients;
