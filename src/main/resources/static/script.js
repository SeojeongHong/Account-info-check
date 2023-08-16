//조회 API 호출
const searchButton = document.getElementById("searchButton");
const accountInput = document.getElementById("accountInput");

const count = document.getElementById("count");

const msg = document.getElementById("msg");
const safeMsg = document.getElementById("safe-msg");
const unsafeMsg = document.getElementById("unsafe-msg");
searchButton.addEventListener("click", () => {
    const account = accountInput.value;
    if (account) {
        const apiUrl = "/cheat/" + account;
        $.get(apiUrl, function (data) {
            if(data>0) {
                count.textContent = data;
                msg.style.display = "none";
                safeMsg.style.display = "none";
                unsafeMsg.style.display = "block";
            }
            else {
                msg.style.display = "none";
                unsafeMsg.style.display = "none";
                safeMsg.style.display = "block";
            }
        });
    }
});