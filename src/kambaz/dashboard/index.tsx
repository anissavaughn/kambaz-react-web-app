import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">

                {/*course one*/}
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/6140/Home" className="wd-dashboard-course-link" >
                        <img src="/images/ai-ml.png" width={200} />
                        <div>
                            <h5> CS 6140 Machine Learning </h5>
                            <p className="wd-dashboard-course-title">AI Engineer</p>
                                <button> Go </button>
                        </div>
                    </Link>
                </div>

                {/*course two*/}
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/6620/Home" className="wd-dashboard-course-link" >
                        <img src="/images/devops.png" width={200} />
                        <div>
                            <h5> CS 6620 Cloud Computing </h5>
                            <p className="wd-dashboard-course-title">DevOps Engineer</p>
                                <button> Go </button>
                        </div>
                    </Link>
                </div>

                {/*course three*/}
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/3540/Home" className="wd-dashboard-course-link" >
                        <img src="/images/game.png" width={200} />
                        <div>
                            <h5> CS 3540 Game Programming </h5>
                            <p className="wd-dashboard-course-title">Video Game Developer</p>
                                <button> Go </button>
                        </div>
                    </Link>
                </div>

                {/*course four*/}
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/4520/Home" className="wd-dashboard-course-link" >
                        <img src="/images/mobile.png" width={200} />
                        <div>
                            <h5> CS 4520 Mobile App Development </h5>
                            <p className="wd-dashboard-course-title">iOS Engineer</p>
                                <button> Go </button>
                        </div>
                    </Link>
                </div>

                {/*course five*/}
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/2810/Home" className="wd-dashboard-course-link" >
                        <img src="/images/ai-ml.png" width={200} />
                        <div>
                            <h5> CS 2810 Mathematics of Data Models </h5>
                            <p className="wd-dashboard-course-title">Quant Trader</p>
                                <button> Go </button>
                        </div>
                    </Link>
                </div>

                {/*course six*/}
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/7300/Home" className="wd-dashboard-course-link" >
                        <img src="/images/ux-research.png" width={200} />
                        <div>
                            <h5> CS 7300 Human Computer Interaction </h5>
                            <p className="wd-dashboard-course-title">UX Researcher</p>
                                <button> Go </button>
                        </div>
                    </Link>
                </div>

                {/*course seven*/}
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link" >
                        <img src="/images/write-docs.png" width={200} />
                        <div>
                            <h5> CS 1234 Advanced Writing in the Technical Professions </h5>
                            <p className="wd-dashboard-course-title">Technical Writer</p>
                                <button> Go </button>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
);}