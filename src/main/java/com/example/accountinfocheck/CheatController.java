package com.example.accountinfocheck;

import jakarta.annotation.PostConstruct;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class CheatController {

    private Map<Integer, CheatAccount> cheatAccountMap;

    @PostConstruct
    public void init(){
        cheatAccountMap = new HashMap<Integer, CheatAccount>();
        cheatAccountMap.put(1, new CheatAccount("1111111111","2023-08-16"));
        cheatAccountMap.put(2, new CheatAccount("2222222222","2023-08-16"));
        cheatAccountMap.put(3, new CheatAccount("2222222222","2023-08-14"));
    }

    //신고 횟수 조회
    @GetMapping("/cheat/count/{account}")
    public int getCountOfCheat(@PathVariable("account") String accountNumber){
        int count = 0;

        for (CheatAccount cheatAccount : cheatAccountMap.values()) {
            if (cheatAccount.getAccount().equals(accountNumber)) {
                count++;
            }
        }
        return count;
    }

    //모든 신고 내역 조회
    @GetMapping("/cheat/all")
    public List<CheatAccount> getAllCheatAccount(){
        return new ArrayList<CheatAccount>(cheatAccountMap.values());
    }
}
