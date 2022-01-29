import React from 'react'
import { overlapRows, timeDifference } from '../../utils/functions';
import { colWidth } from '../../utils/variables';
import Lesson from '../lesson/lesson.comp'

import './row.scss'

const ClassList = ({ lessons, beginTime, pushoverlap }) => {
    return (
        <div className='content'>
            {
                lessons.map(((item, i) => {
                    const posLeft = timeDifference(beginTime, item.time.begin) * colWidth / 60,
                        width = Math.abs(timeDifference(item.time.end, item.time.begin) * colWidth / 60)

                    return (
                        // margin left relative to the previous class end
                        <Lesson
                            style={{
                                // position left
                                'left': posLeft,
                                'width': width,
                            }}
                            key={i}
                            {...item}
                        />
                    )
                }))
            }
        </div>
    )
}

const Row = ({ className, lessons, title, note, beginTime, ...props }) => {
    const lists = []

    let overlap = overlapRows(lessons)
    while (overlap){
        // push cleared list
        lists.push(overlap[0])
        console.log(overlap);

        let cond = overlapRows(overlap[1])
        if (!Array.isArray(cond)){
            // finally push the rest and go to render
            lists.push(overlap[1])
            break
        }

        console.log(cond);

        overlap = cond;
    }

    return (
        <div className={`row${className ? ' ' + className : ''}`}>
            <div className='title'>
                <p className='desc'>{title}</p>
                {
                    note ? <p className='note'>{note}</p> : null
                }
            </div>
            <div className='rows'>
            {
                lists.map(item => {
                    return <ClassList key={item} lessons={item} beginTime={beginTime} />
                })
            }            
            </div>
        </div>
    )
}

export default Row