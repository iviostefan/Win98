document.addEventListener("DOMContentLoaded", function () {
    let start = document.getElementById("start");
    let desktop = document.getElementsByTagName("body")[0];
    let start_menu = document.getElementById("start-menu");

    start.addEventListener("click", function () {
        if (start_menu.style.display == "none") {
            start_menu.style.display = "block";
        } else {
            start_menu.style.display = "none";
        }

    })


    class Window {
        constructor(title, type) {
            this.title = title;
            this.type = type;
        }

        

        open() {
            let window = document.createElement("div");
            window.setAttribute("class", "window");

            let header = document.createElement("div");
            header.setAttribute("class", "window-header");

            let logo = document.createElement("img");
            logo.setAttribute("src", "https://i.ibb.co/4WdrJQ5/logo.png");

            let win_menu = document.createElement("div");
            win_menu.setAttribute("class", "window-menu");

            let ul = document.createElement("ul");
            let file = document.createElement("li");
            file.innerHTML = "<u>F</u>ile";
            file.addEventListener("click", function() {
               let div = document.createElement("div");
               div.setAttribute("class", "menu");
               desktop.appendChild(div);
            })
            ul.appendChild(file);
            window.appendChild(header);
            win_menu.appendChild(ul);
            win_menu.appendChild(logo);
            window.appendChild(win_menu);
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
            div.appendChild(img);
            div.appendChild(p);
            desktop.appendChild(div);
        }
    }

    class Desktop {

    }

})