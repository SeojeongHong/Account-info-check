package com.example.accountinfocheck;

import jakarta.annotation.PostConstruct;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
public class MainController {

    private Map<String, String> accountMap;     //계좌번호, 소유자

    @PostConstruct
    public void init(){
        accountMap = new HashMap<String, String>();
        accountMap.put("1111111111","가나다");
        accountMap.put("2222222222","라마바");
        accountMap.put("3333333333","아자차");
    }
    
    //계좌 - 이름 조회
    @GetMapping("/search/{account}")
    public String getAccount(@PathVariable("account") String account){
        return accountMap.get(account);
    }

    //모든 계좌 정보 조회
    @GetMapping("/search/all")
    public Map<String, String> getAllAccounts() {
        return accountMap;
    }

}
