
export default function CourseListItems(props) {
    if (!props?.data) { return '' }
    const data = props.data
    const cl = 'mlr10 flx1 '
    return <div className='white br10 flx1 shadow1 ptb5'>
        <div className='flx ptb10 bb plr10'>
            <p className={cl}>ACRONYM </p>
            <p className={cl}>TITLE</p>
            <p className={cl}>YEAR</p>
            <p className={cl}>DISCRIPTION</p>
        </div>
        <div>

            {data.map(d => {
                return <div className='list-item flx p '>
                    <p className={cl}>{d.acro}</p>
                    <p className={cl}>{d.title}</p>
                    <p className={cl}>{d.year}</p>
                    <p className={cl}>{d.discription}</p>
                    <span class="material-icons s mlr10">
                        edit
                    </span>
                    <span class="material-icons s mlr10 delete">
                        delete
                    </span>
                </div>
            })
            }
        </div>
    </div>
}