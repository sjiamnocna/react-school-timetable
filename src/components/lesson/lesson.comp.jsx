import React from 'react'
import { timeReadableFormat } from '../../utils/functions'

import './lesson.scss'

/**
 * Lesson item
 * @param object props
 * @returns 
 */
const Lesson = ({ shortcut, title, room, teacher, time, className, ...props }) => {
    return (
        <div
            className={`lesson-item${className ? ' ' + className : ''}`} // allows control the look of the item
            {...props}
        >
            <div className="lesson-container">
                <abbr title={title}>{shortcut}</abbr>
                <div className="details">
                    {
                        room && time ?
                        <p className="row">
                            <span className="room">{room}</span>
                            <time>
                                <span className="from">{timeReadableFormat(time.begin)}</span>
                                - 
                                <span className="to">{timeReadableFormat(time.end)}</span>
                            </time>
                        </p> : null
                    }
                    <p className="row teacher">
                        {teacher}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Lesson