package com.example.accountinfocheck;

public class CheatAccount {
    private String account;
    private String date;


    public CheatAccount(String account, String date){
        super();
        this.account=account;   //계좌번호
        this.date=date;         //신고날짜
    }

    public String getAccount(){
        return account;
    }
    public void setAccount(String account){
        this.account = account;
    }

    public String getDate(){
        return date;
    }
    public void setDate(String date){
        this.date = date;
    }

}
