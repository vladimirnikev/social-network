import React, { useState } from 'react'
// import s from './../../Users/Users.module.css'
import s from './Paginator.module.css'

let Paginator = ({ itemsCount, pageSize, currentPage, onChanged, portionSize = 5 }) => {
    let pagesCount = Math.ceil(itemsCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize
    let rightPortionPageNumber = portionNumber * portionSize

    return <div className={s.paginator}>

        {portionNumber > 1 && <button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>}

        {pages
            .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
            .map(p => {
                return <span key={p} onClick={(e) => { onChanged(p) }} className={currentPage === p ? s.selected + ' ' + s.items : s.items}>{p}</span>
            })}

        {portionNumber < portionCount && <button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}

        {/* {<span onClick={(e) => { props.onChanged(pages[0]) }} className={props.currentPage === pages[0] ? s.selected : ''}>{pages[0]}</span>}
            ...
        {
            pages.filter(p =>
                (p === props.currentPage - 1 && p !== pages[pages.length - 1] && p !== pages[0])
                || (p === props.currentPage - 2 && p !== pages[pages.length - 1] && p !== pages[0])
                || (p === props.currentPage + 1 && p !== pages[pages.length - 1] && p !== pages[0])
                || (p === props.currentPage + 2 && p !== pages[pages.length - 1] && p !== pages[0])
                || (p === props.currentPage && p !== pages[pages.length - 1] && p !== pages[0]))
                .map(p => {
                    return <span key={p} onClick={(e) => { props.onChanged(p) }} className={props.currentPage === p ? s.selected : ''}>{p}</span>
                })
        }
            ...
        {<span onClick={(e) => { props.onChanged(pages[pages.length - 1]) }} className={props.currentPage === pages[pages.length - 1] ? s.selected : ''}>{pages[pages.length - 1]}</span>} */}
    </div >
}

export default Paginator