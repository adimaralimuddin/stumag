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
        white mtb20 br3 shadow1 flxC pb20  br5
    `}>

        <div className='flx p10 itemCenter list-header'>
            <img className='mnw40 mnh40 br90per' src="" alt="" />
            <p className='flx1 mlr10'>NAME</p>
            <p className='flx1 mlr10 mxw150'>COURSE</p>
            <p className='flx1 mlr10 mxw50'>YEAR</p>
            <p className='flx1 mlr10 mxw60'>ROLE</p>
            <p className='flx1 mlr10 mxw50'>AGE</p>
            <p className='flx1 mlr10 mxw60'>GENDER</p>
            <p className='flx1 mlr10'>CONTACT</p>
            <p className='flx1 mlr10'>ADDRESS</p>

        </div>

        {
            data.map(d => {
                alert = !alter
                let cls = 'mlr10 flx1 '
                return <div className='flx list-item wrap p10 itemCenter'>
                    <img className='mnw40 mnh40 light br90per' src="" alt="" />
                    <pre className={cls}>{d?.name}</pre>
                    <p className={cls + ' mxw150'}>{d?.course}</p>
                    <p className={cls + ' mxw50'}>{d?.year}</p>
                    <p className={cls + ' mxw60'}>{d?.status}</p>
                    <p className={cls + ' mxw50'}>{d?.age}</p>
                    <p className={cls + ' mxw60'}>{d?.gender}</p>
                    <p className={cls}>{d?.contact}</p>
                    <p className={cls}>{d?.address}</p>
                </div>
            })
        }

    </div>

}
