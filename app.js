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

    let render = (type, attr, value) => {
        let obj = document.createElement(type);
        obj.setAttribute(attr, value);
        return obj;
    }

    let node = (type, text) => {
        let obj = document.createElement(type);
        obj.innerHTML = text;
        return obj;
    }

    class WindError {
        constructor(title, img, message, btns) {
            this.title = title;
            this.img = img;
            this.message = message;
            this.btns = btns;
        }
        show() {
            let winderror = document.createElement("div");
            winderror.setAttribute("class", "winderror");
            let headererr = document.createElement("div");
            headererr.setAttribute("class", "winderror-header");
            headererr.innerHTML = this.title;
            let closeerr = document.createElement("span");
            closeerr.setAttribute("class", "winderror-close");
            closeerr.innerHTML = "x";
            headererr.appendChild(closeerr);
            winderror.appendChild(headererr);
            let content = document.createElement("div");
            content.setAttribute("class", "winderror-content");
            let img = document.createElement("img");
            img.setAttribute("src", this.img);
            content.appendChild(img);
            let mess = document.createElement("div");
            mess.setAttribute("class", "winderror-mess");
            mess.innerHTML = this.message;
            content.appendChild(mess);
            winderror.appendChild(content);
            let btns_div = document.createElement("div");
            if (this.btns === 1) {
                btns_div.setAttribute("class", "winderror-button");
                let btn = document.createElement("button");
                btn.innerHTML = "OK";
                btns_div.appendChild(btn);
            } else {
                btns_div.setAttribute("class", "winderror-buttons");
                let btn1 = document.createElement("button");
                let btn2 = document.createElement("button");
                btn1.innerHTML = "<u>R</u>etry";
                btn2.innerHTML = "<b>C</b>ancel";
                btn2.addEventListener("click", function () {
                    winderror.remove();
                })
                btns_div.appendChild(btn1);
                btns_div.appendChild(btn2);
            }
            winderror.appendChild(btns_div);
            document.getElementById(this.title).appendChild(winderror);
            closeerr.addEventListener("click", function () {
                winderror.remove();
            })
        }
    }

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
            wind_adress.innerHTML = "A<u>d</u>dress";
            let add_sec = document.createElement("div");
            add_sec.setAttribute("class", "addbar");
            let add_img = document.createElement("img");
            add_img.setAttribute("src", this.img);
            add_sec.appendChild(add_img);
            add_sec.innerHTML = this.type;
            wind_adress.appendChild(add_sec);
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
                    flop.addEventListener("click", function () {
                        let win = new WindError("My Computer", "https://i.ibb.co/RDTpHPQ/err.png", "A:\\ is no accessible.<br>The device is not ready.", 2);
                        win.show();
                    })
                    list_icons.appendChild(flop);
                    let hdd = document.createElement("img");
                    hdd.setAttribute("src", "https://i.ibb.co/8Dfv2Vy/comfc.png");
                    hdd.addEventListener("click", function () {
                        list_icons.style.display = "none";
                        let list_icons2 = document.createElement("div");
                        list_icons2.setAttribute("class", "icons-comp");
                        let mydoc = document.createElement("img");
                        mydoc.setAttribute("src", "https://i.ibb.co/DDnMr4K/docs-icon.png");
                        list_icons2.appendChild(mydoc);
                        let pf = document.createElement("img");
                        pf.setAttribute("src", "https://i.ibb.co/rsvF7g4/pf-icon.png");
                        list_icons2.appendChild(pf);
                        let win = document.createElement("img");
                        win.setAttribute("src", "https://i.ibb.co/jwZ3dm1/wind-icon.png");
                        list_icons2.appendChild(win);
                        let ax = document.createElement("img");
                        ax.setAttribute("src", "https://i.ibb.co/PcZ8hjG/ax-ico.png");
                        list_icons2.appendChild(ax);
                        let ax2 = document.createElement("img");
                        ax2.setAttribute("src", "https://i.ibb.co/BnxjzzJ/ax2-ico.png");
                        list_icons2.appendChild(ax2);
                        wind_content.appendChild(list_icons2);

                    })
                    list_icons.appendChild(hdd);
                    let cd = document.createElement("img");
                    cd.setAttribute("src", "https://i.ibb.co/mq7c1jn/compfcd.png");
                    cd.addEventListener("click", function () {
                        let win = new WindError("My Computer", "https://i.ibb.co/RDTpHPQ/err.png", "D:\\ is no accessible.<br>The device is not ready.", 2);
                        win.show();
                    })
                    list_icons.appendChild(cd);
                    let cp = document.createElement("img");
                    cp.setAttribute("src", "https://i.ibb.co/28PBBdN/compfcp.png");
                    list_icons.appendChild(cp);
                    break;
                case "My Documents":
                    imgw.setAttribute("src", "https://i.ibb.co/MRvPPm4/mydocf.png");
                    let folder = document.createElement("img");
                    folder.setAttribute("src", "https://i.ibb.co/bJSCHnV/mypicico.png");
                    folder.addEventListener("click", function () {
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
            // let img1 = document.createElement("img");
            // img.setAttribute("src", "");
            // let img2 = document.createElement("img");
            // let img3 = document.createElement("img");
            // let img4 = document.createElement("img");
            // let img5 = document.createElement("img");
            // let img6 = document.createElement("img");
            // let img7 = document.createElement("img");
            // let img8 = document.createElement("img");
            // let img9 = document.createElement("img");
            // let img10 = document.createElement("img");
            // let img11 = document.createElement("img");
            // let img12 = document.createElement("img");
            // let img13 = document.createElement("img");
            // let img14 = document.createElement("img");
            // let img15 = document.createElement("img");
            // let img16 = document.createElement("img");
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
            let div = render("div", "class", "icon"),
                img = render("img", "src", this.logo),
                p = node("p", this.name);
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