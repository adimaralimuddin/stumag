import React from "react"

export default function Fields(props) {
    console.log(props.data)
    if (!props?.data) { return '' }
    const data = props.data
    return data?.map(f => {
        if (f?.type == 'custume') {
            return f?.element(f)
        } else if (f?.type == 'select') {
            return <div className={` fields
            mxw140 flxC textLeft ml5
        `}>
                {
                    f?.label && <small className='ml5'>{f?.label}</small>
                }
                <select name={f?.name} id="">
                    {
                        f?.options && f?.options.map(op => {
                            return <option value={op}>{op}</option>
                        })
                    }
                </select>
            </div>

        } else {

            return <div className={`
                mxw140 flxC textLeft ml5 fields
            `}>
                {
                    f?.label && <small className='ml5'>{f?.label}</small>
                }
                {React.createElement(f?.type, f, f?.text)}
            </div>
        }
    })
}