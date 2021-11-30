
export default function Year({ label = true }) {
    return (
        <span className='flxC textLeft'>
            {
                label && <label className='ml5' htmlFor="year">year</label>
            }

            <select name="year" id="year">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
            </select>
        </span>
    )
}