const Footer = () => {
    return (
        <footer id="footer" class="footer">

            <div class="footer-top">
                <div class="container">
                    <div class="row gy-4">
                        <div class="col-md-12 footer-info">
                            <a href="index.html" class="logo d-flex align-items-center">
                            <img src="img/logo.png" alt="" />
                            <span>MINEVATEAM</span>
                            </a>
                            <div class="social-links mt-3">
                                <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                                <a href="#" class="facebook"><i class="bi bi-facebook"></i></a>
                                <a href="#" class="instagram"><i class="bi bi-instagram"></i></a>
                                <a href="#" class="linkedin"><i class="bi bi-linkedin"></i></a>
                            </div>
                        </div>

                        <div class="col-md-4 footer-links">
                            <h4>لینک های مفید</h4>
                            <ul>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">خانه</a></li>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">درباره ما</a></li>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">خدمات</a></li>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">نمونه کارها</a></li>
                            </ul>
                        </div>

                        <div class="col-md-4 footer-links">
                            <h4>خدمات ما</h4>
                            <ul>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">Web Design</a></li>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">Web Development</a></li>
                                <li><i class="bi bi-chevron-right"></i> <a href="#">UI/UX</a></li>
                            </ul>
                        </div>

                        <div class="col-md-4 footer-contact text-center text-md-start">
                            <h4>تماس با ما</h4>
                            <p>
                                <strong>شماره تماس:</strong> +98 938 714 4781<br />
                                <strong>ایمیل: </strong> minervateam@gmail.com<br />
                            </p>
                        </div>  
                    </div>
                </div>
            </div>

    </footer>    
    )
}

export default Footer;