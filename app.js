document.addEventListener("DOMContentLoaded", function () {

    let desktop = document.getElementsByTagName("body")[0];

    // start_logo.setAttribute("src", "");


    let start = document.getElementById("start");
    let taskbar = document.getElementById("start-bar");
    let start_menu = document.getElementById("start-menu");
    let task_icons = document.getElementById("taskbar-icons");

    start.addEventListener("click", function () {
        if (start_menu.style.display == "none") {
            start_menu.style.display = "block";
        } else {
            start_menu.style.display = "none";
        }

    })

    class Window {
        constructor(title, type, img) {
            this.title = title;
            this.type = type;
            this.img = img;
        }
        open() {
            let window = document.createElement("div");
            window.setAttribute("class", "window");
            window.setAttribute("id", this.type);
            let wind_content = document.createElement("div");
            wind_content.setAttribute("class", "wind-content");

            if (this.type === "My Computer") {
                let imgw = document.createElement("img");
                imgw.setAttribute("src", "");
                wind_content.appendChild(imgw);

                let flop = document.createElement("img");
                flop.setAttribute("src", "");
                wind_content.appendChild(flop);

                let hdd = document.createElement("img");
                hdd.setAttribute("src", "");
                wind_content.appendChild(hdd);

                let cd = document.createElement("img");
                cd.setAttribute("src", "");
                wind_content.appendChild(cd);

                let cp = document.createElement("img");
                cp.setAttribute("src", "");
                wind_content.appendChild(cp);

            }

            if (this.type === "My Documntes") {

            }

            if (this.type === "Internet Explorer") {

            }

            if (this.type === "Network") {

            }

            if (this.type === "Recycle Bin") {

            }



            let header = document.createElement("div");
            let header_img = document.createElement("img");
            header.setAttribute("class", "window-header");
            header_img.setAttribute("src", this.img);

            let task = document.createElement("div");
            task.setAttribute("class", "task");
            task.setAttribute("id", this.type);
            task.addEventListener("click", function () {
                if (window.classList.contains("minimize")) {
                    window.classList.remove("minimize");
                    window.classList.add("zindex");
                } else {
                    window.classList.add("minimize");
                    window.classList.remove("zindex");

                }
                //   window.classList.toggle("minimize");


            })
            let task_img = document.createElement("img");
            task_img.setAttribute("src", this.img)
            task.appendChild(task_img);
            task_icons.appendChild(task);

            let close = document.createElement("span");
            close.setAttribute("class", "header-close");
            close.innerHTML = "x";

            let min = document.createElement("span");
            min.setAttribute("class", "header-minimize");
            min.innerHTML = "_";

            let resize = document.createElement("span");
            resize.setAttribute("class", "header-resize");
            resize.innerHTML = "◳";

            header.appendChild(header_img);
            header.appendChild(close);
            header.appendChild(min);
            header.appendChild(resize);

            let span = document.createElement("span");
            span.setAttribute("class", "window-header-p");

            span.innerHTML = this.title;
            header.appendChild(span);

            let logo = document.createElement("img");
            logo.setAttribute("src", "https://i.ibb.co/4WdrJQ5/logo.png");
            logo.setAttribute("class", "logo");

            let win_menu = document.createElement("div");
            win_menu.setAttribute("class", "window-menu");

            let ul = document.createElement("ul");
            let file = document.createElement("li");
            file.innerHTML = "<u>F</u>ile";
            file.addEventListener("click", function () {
                let div = document.createElement("div");
                div.setAttribute("class", "menu");
                desktop.appendChild(div);
            })
            let nav = document.createElement("div");
            nav.setAttribute("class", "window-nav");
            ul.appendChild(file);
            window.appendChild(header);
            win_menu.appendChild(ul);
            win_menu.appendChild(logo);
            window.appendChild(win_menu);
            window.appendChild(nav);

            min.addEventListener("click", function () {
                window.classList.add("minimize");
                window.classList.remove("zindex");
            })

            close.addEventListener("click", function () {
                let tasks = document.getElementsByClassName("task");

                for (let i = 0; i < tasks.length; i++) {
                    if (tasks[i].id == span.innerHTML) {
                        tasks[i].remove();
                    }
                }
                window.remove();
            })
            desktop.appendChild(window);
        }
    }

    // let win = new Window();
    // win.open();

    class Icon {
        constructor(name, logo) {
            this.name = name;
            this.logo = logo;
        }
        draw() {
            let div = document.createElement("div");
            div.setAttribute("class", "icon");
            let img = document.createElement("img");
            img.setAttribute("src", this.logo);
            let p = document.createElement("p");
            p.innerHTML = this.name;
            div.addEventListener("click", function () {
                let win = new Window(p.innerHTML, p.innerHTML, img.src);
                win.open();


            })
            div.appendChild(img);
            div.appendChild(p);
            desktop.appendChild(div);
        }
    }

    let icons_names = ["My Computer", "My Documents", "Internet Explorer", "Network", "Recycle Bin"]
    let logos = ["https://i.ibb.co/Fz7XL7z/my-computer.png", "https://i.ibb.co/TgXLNyp/my-docs.png",
        "https://i.ibb.co/bHmmSH9/internet.png", "https://i.ibb.co/1L9h6cV/net.png", "https://i.ibb.co/syBDpgj/rb.png"]


    for (let icon = 0; icon < 5; icon++) {
        let obj = new Icon(icons_names[icon], logos[icon]);
        obj.draw();
    }

})