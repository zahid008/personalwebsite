document.title = "teaching";
document.body.innerHTML += `
<link rel="stylesheet" type="text/css" href="CSS/teaching.css" />
    <div class="container">
        <div class="teaching">
            <div class="intro">
                <p>These are list of courses I have taken so far.</p>
                <a class="intro_text">There are the details of the courses I teach. Students are requested to download their respective course outline from any of the manue .<br> All the necessary information about the course is given in the course outline.  Google classroom code will be provided in the class. </a>
            </div><!--Intro-->
            <br>
            <div class="course-spring22">
                <button type="button" class="btn btn-dark mt-2">C Programming > </button>
                <button type="button" class="btn btn-dark mt-2">C Programming Lab > </button>
                <button type="button" class="btn btn-dark mt-2">Theory of Computation > </button>
                <button type="button" class="btn btn-dark mt-2">Artificial Intelligence > </button>
                <button type="button" class="btn btn-dark mt-2">Artificial Intelligence Lab > </button>
                <button type="button" class="btn btn-dark mt-2">Discrete Mathematics > </button>
                <button type="button" class="btn btn-dark mt-2">Assembly Language Lab > </button>
            </div><!--course-spring22-->
            <br>
            <div class="course-Summer22">
                <button type="button" class="btn btn-dark mt-2">Pre-Calculus ></button>
                <button type="button" class="btn btn-dark mt-2">Calculus I ></button>
                <button type="button" class="btn btn-dark mt-2">Calculus II ></button>
                <button type="button" class="btn btn-dark mt-2">Calculus III ></button>
    
            </div><!--course-Summer22-->
    
            <br><br>
    
            <div class="semester_wise">
                <p>Semester Wiseview</p>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Spring-22
                    </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">C Programming</a>
                    <a class="dropdown-item" href="#">C Programming Lab</a>
                    <a class="dropdown-item" href="#">Theory of Computation</a>
                    <a class="dropdown-item" href="#">Pre-Calculus</a>
                    <a class="dropdown-item" href="#">Calculus II</a>
                    <a class="dropdown-item" href="#">Calculus III</a>
                </div>
                </div>

                <div class="dropdown mt-2">
                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Summer-22
                    </button>
                    <ul class="dropdown-menu">
                        <li><a class="dropdown-item" href="#">Artificial Intelligence</a></li>
                        <li><a class="dropdown-item" href="#">Artificial Intelligence Lab</a></li>
                        <li><a class="dropdown-item" href="#">Discrete Mathematics</a></li>
                        <li><a class="dropdown-item" href="#">C Programming</a></li>
                        <li><a class="dropdown-item" href="#">C Programming Lab</a></li>
                        <li><a class="dropdown-item" href="#">Assembly Language Lab</a></li>
                        <li><a class="dropdown-item" href="#">Calculus I</a></li>
                    </ul>
                </div>
            </div><!--Semester_wise-->
    
            <div class="notice_board">
                    <p>Notice Board</p>
            </div><!--notice_board-->
        </div><!--teaching-->
    </div>
`