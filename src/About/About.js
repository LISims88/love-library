import './About.css'
 function About () {
    const email = "sims.lydia88@gmail.com"
    return(
        <>
            <div className='about-container'>
                <div  className='picture'>
                    <img src='https://avatars.githubusercontent.com/u/149545941?v=4' alt='profile'/>
                </div>
                <div className='about-contact'>
                    <h2>About Me</h2>
                    <p>
                        Lydia Sims is a Front End Web Developer based out of of the humid Houston, TX. She has a background in Phsychology, Philosophy and Non Profit Organizational Management. 

                        This application was a labor of love. Combining her passion for web developement, romance, and books. 

                        If you would like to reach out to her for more information on the application she can be reached by email below.
                    </p>
                    <h3>
                        My contact info: <a href={`mailto:${email}`} style={{ color: '#f4ebfe' }}>E-mail</a>
                    </h3>

                </div>
            </div>
        </>
    )
    
 }

 export default About