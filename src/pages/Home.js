const Home =()=>{
    return(
        <>
        <nav className=" navbar navbar-expand-lg border border-info bg-body-tertiary shadow-lg p-3 mb-5 position-absolute w-100">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li id="homeBtn" className="nav-item">
                            <a class="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="#">Customer</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="#">Items</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="#">Categories</a>
                        </li>
                        <li className="nav-item">
                            <a class="nav-link" href="#">Orders</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div>

        </div>
        </>
    )
}

export default Home;