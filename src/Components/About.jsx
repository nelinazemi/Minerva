const About = () => {
    return (
        
        <section id="about" class="about d-flex container-xl">
            <div class="container" data-aos="fade-up">
                <div class="row gx-0">
                    <div class="col-lg-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                        <img src="img/team.png" class="img-fluid" alt="" />
                    </div>
                    <div class="col-lg-6 d-flex flex-column justify-content-center" data-aos="fade-up" data-aos-delay="200">
                        <div class="content">
                            <h3>درباره ما</h3>
                            <h2>ما تیمی متشکل از چند دانشجوی خلاق هستیم که هدفمان پیاده سازی نوین ترین و ایده آل ترین وبسایت ها می باشد</h2>
                            <h5>
                                ما خدماتی از جمله طراحی فرانت اند، بک اند را به بهترین نحو انجام میدهیم.
                            </h5>
                            <div class="text-center text-lg-start">
                                <a href="#" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                <span>مشاهده رزومه</span>
                                <i class="bi bi-arrow-right"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>  
            </div>
        </section>

    )
}

export default About;