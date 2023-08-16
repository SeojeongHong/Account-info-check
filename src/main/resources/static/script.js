//조회 API 호출
const searchButton = document.getElementById("searchButton");
const accountInput = document.getElementById("accountInput");
const resultDiv = document.getElementById("result");

searchButton.addEventListener("click", () => {
    const account = accountInput.value;
    if (account) {
        const apiUrl = "/cheat/" + account;
        $.get(apiUrl, function (data) {
            resultDiv.textContent = data + "건의 신고가 접수 되었습니다.";
        });
    }
});