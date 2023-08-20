//조회 API 호출
const selectedBank = document.getElementById("bank");
const searchButton = document.getElementById("searchButton");
const accountInput = document.getElementById("accountInput");
const accountInputV = document.querySelector("#accountInput");

const count = document.getElementById("count");
const accountInfo1 = document.getElementById("account1");
const accountInfo2 = document.getElementById("account2");
const msg = document.getElementById("msg");
const safeMsg = document.getElementById("safe-msg");
const unsafeMsg = document.getElementById("unsafe-msg");
const unsafeMsgSmall = document.getElementById("unsafe-msg-small");
const sendMoney = document.getElementById("send-money");
const sendBtn = document.getElementById("send-btn");
const cancelBtn = document.getElementById("cancel");


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
        const apiUrl = "/cheat/count/" + account;
        $.get(apiUrl, function (data) {
            if(data>0) {
                unsafeMsg.style.display = "block";
                safeMsg.style.display = "none";
            }
            else {
                unsafeMsg.style.display = "none";
                safeMsg.style.display = "block";
                sendMoney.style.display = "block";
                sendBtn.style.display = "block";

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
    sendMoney.style.display = "block";
    sendBtn.style.display = "block";

    selectedBank.disabled = true;
    accountInput.disabled = true;
    searchButton.disabled = true;
};

//계좌 소유자 정보 표시
const accountName = document.getElementById("account-name");
searchButton.addEventListener("click", () => {
    const accountNumber = accountInput.value;
    if (accountNumber) {
        // API 호출
        const apiUrl = "/search/" + accountNumber;
        $.get(apiUrl, function (data) {
            if(data)
                accountName.textContent = data;
            else
                accountName.textContent = "(알수없음)";
        });
    }
});


//계좌 포맷
function dash(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1-');
}

//돈 단위 표시
function inputNumberFormat(obj) {
    obj.value = comma(uncomma(obj.value));
}

function comma(str) {
    str = String(str);
    return str.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
}

function uncomma(str) {
    str = String(str);
    return str.replace(/[^\d]+/g, '');
}