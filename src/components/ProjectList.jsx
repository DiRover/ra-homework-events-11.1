import React from 'react';

export default function ProjectList(props) {
    const { projects } = props;
    return (
    <div className="projectlist">
        {projects.map(o => <img src={o.img} key={performance.now()}/>)}
    </div> /*{performance.now() просто уникальный инжификатор}*/
    )
};