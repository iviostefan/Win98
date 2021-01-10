document.addEventListener("DOMContentLoaded", function () {
    const bootwin = () => {
        document.getElementById("boot").style.display = "none";
        document.getElementById("win98").style.display = "block";
    }
    //setTimeout(bootwin, 2000);
    bootwin();
    const fill = (number) => number < 10 ? number = "0" + number : number;
    const getTime = () => {
        let date = new Date();
        document.getElementById("taskbar-notification").innerHTML = fill(date.getHours()) + ":" + fill(date.getMinutes());
    }
    setInterval(getTime, 100);
    let desktop = document.getElementById("win98");
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
            let header = document.createElement("div");
            let header_img = document.createElement("img");
            header.setAttribute("class", "window-header");
            header_img.setAttribute("src", this.img);
            let wind_adress = document.createElement("div");
            wind_adress.setAttribute("class", "window-address");
            window.appendChild(wind_adress);
            let wind_content = document.createElement("div");
            wind_content.setAttribute("class", "wind-content");
            let imgw = document.createElement("img");
            imgw.setAttribute("class", "backg-mycom");
            let list_icons = document.createElement("div");
            list_icons.setAttribute("class", "icons-comp");
            switch (this.type) {
                case "My Computer":
                    imgw.setAttribute("src", "https://i.ibb.co/2S75bpY/mycompf.png");
                    let flop = document.createElement("img");
                    flop.setAttribute("src", "https://i.ibb.co/WkSxgbm/mycomff.png");
                    list_icons.appendChild(flop);
                    let hdd = document.createElement("img");
                    hdd.setAttribute("src", "https://i.ibb.co/8Dfv2Vy/comfc.png");
                    list_icons.appendChild(hdd);
                    let cd = document.createElement("img");
                    cd.setAttribute("src", "https://i.ibb.co/mq7c1jn/compfcd.png");
                    list_icons.appendChild(cd);
                    let cp = document.createElement("img");
                    cp.setAttribute("src", "https://i.ibb.co/28PBBdN/compfcp.png");
                    list_icons.appendChild(cp);
                    break;
                case "My Documents":
                    imgw.setAttribute("src", "https://i.ibb.co/MRvPPm4/mydocf.png");
                    let folder = document.createElement("img");
                    folder.setAttribute("src", "https://i.ibb.co/bJSCHnV/mypicico.png");
                    folder.addEventListener("click", function() {
                        folder.style.display = "none";
                        let imgs = document.createElement("div");
                        imgs.setAttribute("class", "pictures");
                        let img1 = document.createElement("div");
                        img1.setAttribute("class", "thumb1");
                        let img2 = document.createElement("div");
                        img2.setAttribute("class", "thumb2");
                        imgs.appendChild(img1);
                       imgs.appendChild(img2);
                       list_icons.appendChild(imgs);

                    })
                    list_icons.appendChild(folder);
                    break;
                case "Internet Explorer":
                    break;
                case "Network":
                    imgw.setAttribute("src", "https://i.ibb.co/TMr2G92/cpfnet.png");
                    break;
                case "Recycle Bin":
                    break;
            }
            wind_content.appendChild(imgw);
            wind_content.appendChild(list_icons);
            window.appendChild(wind_content);

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
            let edit = document.createElement("li");
            let view = document.createElement("li");
            let go = document.createElement("li");
            let favorites = document.createElement("li");
            let help = document.createElement("li");
            file.innerHTML = "<u>F</u>ile";
            edit.innerHTML = "<u>E</u>dit"
            view.innerHTML = "<u>V</u>iew"
            go.innerHTML = "<u>G</u>o"
            favorites.innerHTML = "<u>F</u>avorites"
            help.innerHTML = "<u>H</u>elp"
            let nav = document.createElement("div");
            nav.setAttribute("class", "window-nav");
            ul.appendChild(file);
            ul.appendChild(edit);
            ul.appendChild(view);
            ul.appendChild(go);
            ul.appendChild(favorites);
            ul.appendChild(help);
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