

export default function StuProfile() {
    const mxw = 'mxw900'
    return (
        <div className='stuProfile p20 flxC flx1 itemCenter '>


            {/* primary info */}
            <div className={`p20 white br10 flx w100per ${mxw}  shadow1`}>
                <img className='mnh200 mnw200 mxh200 mxw200 gains b br10 ' src="" alt="" />
                <div className='plr10 flx1 flxC'>

                    <span className='flx wrap'>
                        <span className='textLeft flexC ml20 flx1'>
                            <h1>mike</h1>
                            <small>last name</small>
                        </span>
                        <span className='textLeft flexC ml20 flx1'>
                            <h1>jophen</h1>
                            <small>last name</small>
                        </span>
                        <span className='textLeft flexC ml20 flx1'>
                            <h1>k</h1>
                            <small>middle name</small>
                        </span>
                    </span>

                    <br />

                    <span className='flx'>
                        <span className='textLeft flexC ml20 flx1'>
                            <span className='flx itemCenter '>
                                <h2>bsit</h2>
                                <p className='ml20 '>(bachelor of science in information technology)</p>
                            </span>
                            <small>course</small>
                        </span>
                        <span className='textLeft flxC ml20 flx1'>
                            <h3>2</h3>
                            <small>year</small>
                        </span>
                    </span>

                    <br />

                    <span className='flx wrap'>
                        <span className='flxC textLeft ml20 flx1'>
                            <h3>24</h3>
                            <small>age</small>
                        </span>
                        <span className='flxC textLeft ml20 flx1'>
                            <h3>male</h3>
                            <small>gender</small>
                        </span>
                        <span className='flxC textLeft ml20 flx1'>
                            <h3>09451934385</h3>
                            <small>contact</small>
                        </span>
                    </span>

                </div>
            </div>  {/* primary info end */}

            <br />
            {/* tuition */}
            <div className={`p20 br10 white shadow1 w100per textLeft ${mxw} mx`}>
                <h2>TUITION</h2>
                <p>tuition fee</p>
                <p>paid</p>
                <p>balanced</p>
                <p>back account</p>

            </div>
        </div>
    )
}