const submit_btn = document.querySelector(".submitbtn");
submit_btn.addEventListener("click", () => {
    submit_btn.classList.add("submitting");
    submit_btn.innerHTML = "";
    setTimeout(() => {
        submit_btn.classList.remove("submitting");
        submit_btn.innerHTML = "Done!";
    }, 3000);
});
