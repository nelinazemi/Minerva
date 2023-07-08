const Hero = () => {
    return (

        <section id="about" class="about d-flex">
            <div class="container mt-5" data-aos="fade-up">
                <div className="row">
                    <div class="col-md-6 d-flex flex-column" data-aos="fade-up" data-aos-delay="200">
                            <div class="content">
                                <h2>
                                    طراحی متنوع و جذاب وبسایت خود را به ما بسپارید
                                </h2>
                                <h2>
                                    با اعتماد به نوآوری و خلاقیت، بهترین وبسایت ها را دریافت کنید
                                </h2>
                                <div class="text-center text-lg-start mt-5">
                                    <a href="#" class="btn-read-more d-inline-flex align-items-center justify-content-center align-self-center">
                                    <span>ثبت سفارش</span>
                                    <i class="bi bi-arrow-right"></i>
                                    </a>
                                </div>
                            </div>
                    </div>                
                    <div class="col-md-6 d-flex align-items-center" data-aos="zoom-out" data-aos-delay="200">
                        <img src="img/hero.png" class="img-fluid" alt="" />
                    </div>
                </div>
            </div>
        </section>
        
    )
}

export default Hero;