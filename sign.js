        document.addEventListener("DOMContentLoaded", () => {
            const form = document.getElementById("sign.html");
            const detail_list = document.getElementById("login");
        
            function loadDetails() {
                const detail = JSON.parse(localStorage.getItem("details") || "[]");
                detail_list.innerHTML="";
                tasks.forEach((deatail, index) => {
        
                    const detailElement = document.createElement("div");
                    detailElement.classList.add("detail_item");
                    detailElement.innerHTML = `
                        <div>
                            <h4>${detail.name}</h4>
                            <p>${detail.email}</p>
                            <p>${detail.password}</p>
                            <button class="delete-btn" onclick="deleteTask(${index})">Delete</button>
                            `;
                    detail_list.appendChild(detailElement);
                });
            }
        
            function saveDetails(details){
                localStorage.setItem("details", JSON.stringify(details));
            }
        
            form.addEventListener("submit", (e) => {
                e.preventDefault();
                const name = document.getElementById("name").value;
                const email = document.getElementById("email").value;
                const password = document.getElementbyId("password").value;
        
                const details = JSON.parse(localStorage.getItem("details") || "[]");
                details.push({name, email, password});
                saveDetails(details);
                laodDetails();
        
                form.reset();
            });
        
            window.deleteDetail = function (index) {
                const details = JSON.parse(localStorage.getItem("details") || "[]");
                details.splice(index, 1);
                saveTasks(tasks);
                loadTasks();
            }
        
            loadTasks();
        
        })
        