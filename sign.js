document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("login");
    const detail_list = document.getElementById("info");

    function loadDetails() {
        const details = JSON.parse(localStorage.getItem("details") || "[]");
        detail_list.innerHTML="";
        details.forEach((detail, index) => {
            const detailElement = document.createElement("div");
            detailElement.classList.add("detail_item");
            detailElement.innerHTML = `
                <div>
                    <h4>${detail.name}</h4>
                    <p>${detail.email}</p>
                    <p>${detail.password}</p>
                    <button class="delete-btn" onclick="deleteDetail(${index})">Delete</button>
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
        const password = document.getElementById("password").value;

        const details = JSON.parse(localStorage.getItem("details") || "[]");
        details.push({ name, email, password });
        saveDetails(details);
        loadDetails();

        form.reset();
    });

    window.deleteDetail = function (index) {
        const details = JSON.parse(localStorage.getItem("details") || "[]");
        details.splice(index, 1);
        saveDetails(details);
        loadDetails();
    }

    loadDetails();

})
        