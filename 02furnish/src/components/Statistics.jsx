import '../App.css';

function Statistics() {
    return (
        <section className='bg-prime p-80'>
            <div className='container'>
                <div className='section-info txt-center'>
                    <span className='subheading'>GREAT REVIEWS FOR OUR SERVICES</span>
                    <h2>Technical Statistics</h2>
                </div>
                <div className='statistics flex justify-between'>
                    <div className='single-stat'>
                        <h2 className='countup'>20</h2>
                        <p>YEAR OF EXPERIENCED</p>
                    </div>
                    <div className='single-stat'>
                        <h2 className='countup'>10,200</h2>
                        <p>SATISFIED CUSTOMERS</p>
                    </div>
                    <div className='single-stat'>
                        <h2 className='countup'>9,850</h2>
                        <p>PROJECT COMPLETED</p>
                    </div>
                    <div className='single-stat'>
                        <h2 className='countup'>20</h2>
                        <p>GET AWARDS</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Statistics;