let myprojects = []

function addMyproject(event) {
    event.preventDefault()

    let title = document.getElementById("input-myproject-title").value
    let content = document.getElementById("input-myproject-content").value
    let image = document.getElementById("input-myproject-image")

    image = URL.createObjectURL(image.files[0])

    let myproject = {
        title,
        content,
        image
    }

    myprojects.push(myproject)
    renderMyprojects()
}

function renderMyprojects() {
    console.log(myprojects);

    let containerMyprojects = document.getElementById("contents")

    containerMyprojects.innerHTML = ""

    for (let i = 0; i < myprojects.length; i++) {
        containerMyprojects.innerHTML += `
        <div class="myproject-list-item">
            <div class="myproject-image">
                <img src="${myprojects[i].image}" alt="" />
            </div>
            <div class="myproject-content">
                <div class="btn-group">
                    <button class="btn-edit">Edit Post</button>
                    <button class="btn-post">Post Myproject</button>
                </div>
                <h1>
                    <a href="myproject-detail.html" target="_blank">${myprojects[i].title}</a>
                </h1>
                <div class="detail-myproject-content">
                    10 Jul 2021 22:30 WIB | Erick Kurniawan
                </div>
                <p>
                    ${myprojects[i].content}
                </p>
                <div style="text-align: right;">
                    <span style="font-size: 15px; color: grey;">1 hour ago</span>
                </div>
            </div>
        </div>
        `
    }
}