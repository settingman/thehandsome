package com.hyundai.thehandsome.domain.member;

public class test {
	
	
	

	
	
	
	
	
	
	public static void main(String[] args) {
		
		
		String email = "TEST333@naver.com";
		
		String a =email.replaceAll("(?<=.{3}).(?=.*@)", "*");
		
		System.out.println(a);
		

	}
}
