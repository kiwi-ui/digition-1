import style from './style.module.css';

const Headline = () => {
    return (
        <section id="headline" className={`d-block ${style.bgHeadline} vh-100 d-flex align-items-center justify-content-center`}>
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h1 className={`fw-bold m-0 fs-3`} style={{ color: '#e3b04b'}}>The Wedding Of</h1>
                <p className={ `fw-bold py-2 px-3 m-1 fs-1` } style={{ color: '#e3b04b' ,letterSpacing: 2 }}>James & Humairoh</p>
                <p className="fs-3 text-white m-0">30-02-2090</p>
            </div>
        </section>
    )
}

export default Headline
