import React from 'react';

export default function Toolbar(props) {
    //console.log(props);
    const { filters, selected, onSelectFilter } = props;
    //пишем функцию для получения нового элемента и значения фильтра
    const select = (evt) => {
        //получаем значение фильтра
        onSelectFilter(evt.currentTarget.textContent);
    }
    return (
    <div className="filters">
        {filters.map(o => <div className={selected === o ? "item_menu_active" : "item_menu" } onClick={ select } key={o}>{ o }</div>)}
    </div>
    )
};
