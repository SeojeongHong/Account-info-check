//조회 API 호출
const selectedBank = document.getElementById("bank");
const searchButton = document.getElementById("searchButton");
const accountInput = document.getElementById("accountInput");

const count = document.getElementById("count");
const accountInfo1 = document.getElementById("account1");
const accountInfo2 = document.getElementById("account2");
const msg = document.getElementById("msg");
const safeMsg = document.getElementById("safe-msg");
const unsafeMsg = document.getElementById("unsafe-msg");
const unsafeMsgSmall = document.getElementById("unsafe-msg-small");

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

//경고메세지 표시
document.getElementById("searchButton").onclick = function () {
    const account = accountInput.value;
    if (account) {
        const apiUrl = "/cheat/" + account;
        $.get(apiUrl, function (data) {
            if(data>0) {
                unsafeMsg.style.display = "block";
                safeMsg.style.display = "none";
            }
            else {
                unsafeMsg.style.display = "none";
                safeMsg.style.display = "block";

                selectedBank.disabled = true;
                accountInput.disabled = true;
                searchButton.disabled = true;

            }
        });
    }
};

document.getElementById("continue").onclick = function () {
    unsafeMsg.style.display = "none";
    unsafeMsgSmall.style.display = "block";

    selectedBank.disabled = true;
    accountInput.disabled = true;
    searchButton.disabled = true;
};


//계좌 포맷
function dash(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1-');
}
