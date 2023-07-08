const Portfolio = () => {
    return (

        <section id="portfolio" class="portfolio">

            <div class="container" data-aos="fade-up">
      
              <header class="section-header">
                <h2>رزومه</h2>
                <p>کارهای اخیر ما</p>
              </header>
      
              <div class="row" data-aos="fade-up" data-aos-delay="100">
                <div class="col-lg-12 d-flex justify-content-center">
                  <ul id="portfolio-flters">
                    <li data-filter="*" class="filter-active">All</li>
                    <li data-filter=".filter-app">Web</li>
                    <li data-filter=".filter-card">CEO</li>
                    <li data-filter=".filter-web">UI/UX</li>
                  </ul>
                </div>
              </div>
      
              <div class="row gy-4 portfolio-container" data-aos="fade-up" data-aos-delay="200">
      
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div class="portfolio-wrap">
                    <img src="img/Hoor.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>وبسایت شیرینی پزی هور</h4>
                      <p>App</p>
                      <div class="portfolio-links">
                        <a href="" data-gallery="portfolioGallery" class="portfokio-lightbox" title="App 1"><i class="bi bi-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div class="portfolio-wrap">
                    <img src="../img/Phielcy.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>وبسایت آموزشی فیلسی</h4>
                      <p>Web</p>
                      <div class="portfolio-links">
                        <a href="assets/img/portfolio/portfolio-2.jpg" data-gallery="portfolioGallery" class="portfokio-lightbox" title="Web 3"><i class="bi bi-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div class="portfolio-wrap">
                    <img class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>App 2</h4>
                      <p>App</p>
                      <div class="portfolio-links">
                        <a href="img/portfolio/portfolio-3.jpg" data-gallery="portfolioGallery" class="portfokio-lightbox" title="App 2"><i class="bi bi-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-4 col-md-6 portfolio-item filter-card">
                  <div class="portfolio-wrap">
                    <img src="img/portfolio/portfolio-4.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Card 2</h4>
                      <p>Card</p>
                      <div class="portfolio-links">
                        <a href="img/portfolio/portfolio-4.jpg" data-gallery="portfolioGallery" class="portfokio-lightbox" title="Card 2"><i class="bi bi-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-4 col-md-6 portfolio-item filter-web">
                  <div class="portfolio-wrap">
                    <img src="img/portfolio/portfolio-5.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>Web 2</h4>
                      <p>Web</p>
                      <div class="portfolio-links">
                        <a href="img/portfolio/portfolio-5.jpg" data-gallery="portfolioGallery" class="portfokio-lightbox" title="Web 2"><i class="bi bi-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
      
                <div class="col-lg-4 col-md-6 portfolio-item filter-app">
                  <div class="portfolio-wrap">
                    <img src="img/portfolio/portfolio-6.jpg" class="img-fluid" alt="" />
                    <div class="portfolio-info">
                      <h4>App 3</h4>
                      <p>App</p>
                      <div class="portfolio-links">
                        <a href="img/portfolio/portfolio-6.jpg" data-gallery="portfolioGallery" class="portfokio-lightbox" title="App 3"><i class="bi bi-plus"></i></a>
                        <a href="portfolio-details.html" title="More Details"><i class="bi bi-link"></i></a>
                      </div>
                    </div>
                  </div>
                </div>
      
              </div>
      
            </div>    
          
        </section>

    )
}

export default Portfolio;