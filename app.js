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
    //let taskbar = document.getElementById("start-bar");
    let start_menu = document.getElementById("start-menu");
    let task_icons = document.getElementById("taskbar-icons");
    start.addEventListener("click", function () {
        if (start_menu.style.display == "none") {
            start_menu.style.display = "block";
        } else {
            start_menu.style.display = "none";
        }

    })

    let Render = (type, attr, value) => {
        let obj = document.createElement(type);
        obj.setAttribute(attr, value);
        return obj;
    }

    let Image = (value) => {
        let obj = document.createElement("img");
        obj.setAttribute("src", value);
        return obj;
    }

    let Div = (value1, value2) => {
        let obj = document.createElement("div");
        obj.setAttribute("class", value1);
        value2 == null ? obj.setAttribute("class", value1) : obj.setAttribute("id", value2);
        return obj;
    }

    let Node = (type, text) => {
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
            //let winderror = render("div", "class", "winderror");
            let winderror = Div("winderror");
            let headererr = Div("winderror-header");
            headererr.innerHTML = this.title;
            let closeerr = Render("span", "class", "winderror-close");
            closeerr.innerHTML = "x";
            headererr.appendChild(closeerr);
            winderror.appendChild(headererr);
            let content = Div("winderror-content");
            let img = Image(this.img);
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
            let window = Div("window", this.type);
            let header = Div("window-header");
            let header_img = Image(this.img);

            let wind_adress = Div("window-address");
            wind_adress.innerHTML = "A<u>d</u>dress";
            let add_sec = document.createElement("div");
            add_sec.setAttribute("class", "addbar");

            let add_img = document.createElement("img");
            add_img.setAttribute("src", this.img);
            add_sec.appendChild(add_img);

            add_sec.innerHTML = this.type;

            wind_adress.appendChild(add_sec);
            window.appendChild(wind_adress);


            let wind_content = Div("wind-content");
            let imgw = Render("img", "class", "backg-mycom");
            let list_icons = Div("icons-comp");

            switch (this.type) {
                case "My Computer":
                    imgw.setAttribute("src", "https://i.ibb.co/2S75bpY/mycompf.png");
                    // let flop = document.createElement("img");
                    // flop.setAttribute("src", "https://i.ibb.co/WkSxgbm/mycomff.png");

                    let flop = Image("https://i.ibb.co/WkSxgbm/mycomff.png");
                    flop.addEventListener("click", function () {
                        let win = new WindError("My Computer", "https://i.ibb.co/RDTpHPQ/err.png", "A:\\ is no accessible.<br>The device is not ready.", 2);
                        win.show();
                    })
                    list_icons.appendChild(flop);

                    let hdd = Image("https://i.ibb.co/8Dfv2Vy/comfc.png");
                    hdd.addEventListener("click", function () {
                        list_icons.style.display = "none";
                        let list_icons2 = Div("icons-comp");
                        list_icons2.appendChild(Image("https://i.ibb.co/DDnMr4K/docs-icon.png"));
                        list_icons2.appendChild(Image("https://i.ibb.co/rsvF7g4/pf-icon.png"));
                        list_icons2.appendChild(Image("https://i.ibb.co/jwZ3dm1/wind-icon.png"));
                        list_icons2.appendChild(Image("https://i.ibb.co/PcZ8hjG/ax-ico.png"));
                        list_icons2.appendChild(Image("https://i.ibb.co/BnxjzzJ/ax2-ico.png"));
                        wind_content.appendChild(list_icons2);
                    })
                    list_icons.appendChild(hdd);
                    let cd = Image("https://i.ibb.co/mq7c1jn/compfcd.png");
                    cd.addEventListener("click", function () {
                        let win = new WindError("My Computer", "https://i.ibb.co/RDTpHPQ/err.png", "D:\\ is no accessible.<br>The device is not ready.", 2);
                        win.show();
                    })
                    list_icons.appendChild(cd);
                  //  let cp = Image("https://i.ibb.co/28PBBdN/compfcp.png");
                    list_icons.appendChild(Image("https://i.ibb.co/28PBBdN/compfcp.png"));
                    break;
                case "My Documents":
                    imgw.setAttribute("src", "https://i.ibb.co/MRvPPm4/mydocf.png");
                    let folder = Image("https://i.ibb.co/bJSCHnV/mypicico.png");
                    folder.addEventListener("click", function () {
                        folder.style.display = "none";
                        let imgs = Div("pictures");
                        imgs.appendChild(Div("thumb1"));
                        imgs.appendChild(Div("thumb2"));
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

            let task = Div("task", this.type);
            task.addEventListener("click", function () {
                if (window.classList.contains("minimize")) {
                    window.classList.remove("minimize");
                    window.classList.add("zindex");
                } else {
                    window.classList.add("minimize");
                    window.classList.remove("zindex");
                }
            })
            let task_img = Image(this.img);
            task.appendChild(task_img);
            task_icons.appendChild(task);
            let close = Render("span", "class", "header-close");
            close.innerHTML = "x";
            header.appendChild(close);
            let min = Render("span", "class","header-minimize");
            min.innerHTML = "_";
            header.appendChild(min);
            let resize = Render("span", "class","header-resize");
            resize.innerHTML = "◳";
            header.appendChild(resize);
            header.appendChild(header_img);
            let span =  Render("span", "class","window-header-p");
            span.innerHTML = this.title;
            header.appendChild(span);
            let logo = Image("https://i.ibb.co/4WdrJQ5/logo.png");
            logo.setAttribute("class", "logo");
            let win_menu = Div("window-menu");
            let ul = document.createElement("ul");
            let file = Node("li", "<u>F</u>ile");
            ul.appendChild(file);
            let edit = Node("li", "<u>E</u>dit");
            ul.appendChild(edit);
            let view = Node("li", "<u>V</u>iew");
            ul.appendChild(view);
            let go = Node("li", "<u>G</u>o");
            ul.appendChild(go);
            let favorites = Node("li", "<u>F</u>avorites");
            ul.appendChild(favorites);
            let help = Node("li", "<u>H</u>elp");
            ul.appendChild(help);
            win_menu.appendChild(ul);
            
            let nav = Div("window-nav");
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
            
            window.appendChild(header);
            
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
            let div = Div("icon"),
                img = Image(this.logo),
                p = Node("p", this.name);
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