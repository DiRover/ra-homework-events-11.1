import React, { useState } from 'react';
import './Portfolio.css'
import Toolbar from './Toolbar';
import ProjectList from './ProjectList';
import { projects } from './projects';



export default function Portfolio() {
    
    let [state, setFilter] = useState('All');
    //здесть происходит магия, не понимаю как работает setFilter
    const onSelectFilter = (filter) => {
        setFilter(state => state = filter);  
    }
    
    
    return (
        <div className="container">
            <Toolbar
                filters = {["All", "Websites", "Flayers", "Business Cards"]}
                selected = { state }
                onSelectFilter = { onSelectFilter }/>
                {/*сортируем массив по текущему фильтру*/}
            <ProjectList projects = { projects.filter((project) => {
                if (state === "All") {
                    return project
                } 
                    return project.category === state
                
            })}/>
        </div>
    )
};






/*
export default class Portfolio {
    constructor (filters, selectes, onSelectFilter) {
        this.filters = filters;
        this.selectes = selectes;
        this.onSelectFilter = onSelectFilter;
    }
}
*/