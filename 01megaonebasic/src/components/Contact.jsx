import '../App.css'
function Contact() {
    return (
        <section className='p-80' id="contact">
            <div className='container'>
                <div className='contact-from bg-light'>
                    <h2>Get In Touch</h2>
                    <form className='from' >
                        <input type="text" placeholder='Name' />
                        <input type="email" placeholder='Email' />
                        <input type="text" placeholder='Subject' />
                        <textarea id="" placeholder='Message'></textarea>
                        <button className='btn purple-bg form-btn'>send message</button>
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact;