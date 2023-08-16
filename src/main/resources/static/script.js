//조회 API 호출
const searchButton = document.getElementById("searchButton");
const accountInput = document.getElementById("accountInput");

const count = document.getElementById("count");
const accountInfo1 = document.getElementById("account1");
const accountInfo2 = document.getElementById("account2");
const msg = document.getElementById("msg");
const safeMsg = document.getElementById("safe-msg");
const unsafeMsg = document.getElementById("unsafe-msg");
searchButton.addEventListener("click", () => {
    const account = accountInput.value;
    if (account) {
        const apiUrl = "/cheat/" + account;
        $.get(apiUrl, function (data) {
            if(data>0) {
                accountInfo2.textContent = dash(account);
                count.textContent = data;
                msg.style.display = "none";
                safeMsg.style.display = "none";
                unsafeMsg.style.display = "block";
            }
            else {
                accountInfo1.textContent = dash(account);
                msg.style.display = "none";
                unsafeMsg.style.display = "none";
                safeMsg.style.display = "block";
            }
        });
    }
});


//계좌 입력 시 유효성 검사
let isAccountValid = false;
document.querySelector("#accountInput").addEventListener("input", function () {
    let inputAccount = this.value;
    isAccountValid = inputAccount.length >= 10 && inputAccount.length <= 14
        && /^\d+$/.test(inputAccount);

    if (isAccountValid) {
        searchButton.disabled=false;
        this.classList.remove("is-invalid");
    } else {
        searchButton.disabled=true;
        this.classList.add("is-invalid");
    }

});

//계좌 포맷
function dash(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1-');
}
