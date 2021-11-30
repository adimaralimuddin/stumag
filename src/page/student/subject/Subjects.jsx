

import BreadCrams from '../../../component/BreadCrams'
import Fields from '../../../component/Fields'
import Input from '../../../component/fields/Input'

export default function Subjects() {


    let subs = ['english 101', 'math 101', 'visual arts']
    return (
        <div className='p20 flxC flx1 itemCenter'>

            <div className='mxw900 w100per'>
                <BreadCrams path='subjects'>Add Subject</BreadCrams>

                <div className='white p10 br5 shadow1 mt20 flx'>
                    <Input label='search'></Input>
                </div>

                <div className='white mt20 br shadow1'>
                    {
                        subs.map(s => <div className='p10 plr20 list-item flx'>
                            <p className='flx1'>{s}</p>
                            <span class="material-icons mlr10">
                                edit
                            </span>
                            <span class="material-icons mlr10 delete">
                                delete
                            </span>
                        </div>)
                    }
                </div>
            </div>

        </div>
    )
}

function listItem({ data }) {
    if (!data) { return '' }


    function pop() {
        data.map(d => {

            for (let i in d) {
                console.log(d[i])
            }

        })
    }

    return <div>

        {
            pop()
        }

    </div>
}