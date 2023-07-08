const Navbar = () => {
    return (
        <div className='container my-3'>
            <div className='row'>
                <nav class="navbar navbar-expand-md">

                    <div className='col-md-3'>
                        <img src='img/logo.png' className="logo w-25"/>
                    </div>

                    <div className='col-md-9 navbar'>
                        <div class="collapse navbar-collapse">
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link active px-3" href="#">خانه</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link px-3" href="#">خدمات</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link px-3" href="#">درباره ما</a>
                                </li>         
                                <li class="nav-item">
                                    <a class="nav-link px-3" href="#">تماس با ما</a>
                                </li>
                                <li class="nav-item">
                                    <button className='btn btn-outline-secondary'><a>ورود / ثبت نام</a></button>
                                </li>                                       
                            </ul>
                        </div>
                    </div>

                </nav>
            </div>
        </div>
    )
}

export default Navbar;