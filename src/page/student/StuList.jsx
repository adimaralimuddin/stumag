import React, { useState } from "react"
import Fields from '../../component/Fields'
import { stuFields, testUsers } from "../../fields"

export default function StuList(props) {


    return (
        <div {...props} className={`
              flx1
                flxC
        `}>

            <div className='flxC mnh50 bb fixed w100per gains w90per   pt10 '>
                <div className='flx trf p10 br3  back front9 wrap'>
                    <Fields data={stuFields} />
                </div>
            </div>
            <div className='p30 pt100  '>
                <ListItem data={testUsers} />
            </div>
        </div>
    )
}

function ListItem({ data }) {

    if (!data) { return '' }

    const alter = false

    return <div className={`
        white mtb20 br3 ptb10 shadow1
    `}>
        {
            data.map(d => {
                alert = !alter
                return <div
                    className={`
                list-item-${alter.toString()} 
                list-item
                flx p5 plr30 itemCenter contentCenter
                `}>

                    <img src="" alt="" className="light br90per mnh40 mnw40" />
                    <p className='flx3 textLeft p10'>{d?.name}</p>
                    <p className='flx3 textLeft p10'>{d?.course}</p>
                    <p className='flx1 textLeft p10'>{d?.year}</p>
                    <p className='flx1 textLeft p10'>{d?.age}</p>
                    <p className='flx1 textLeft p10'>{d?.gender}</p>
                </div>
            })
        }
    </div>

}
