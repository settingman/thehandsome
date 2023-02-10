package com.hyundai.thehandsome.test;



public class MybatisCheckNull {
	public static Boolean isEmpty(String string) {
		if (string instanceof String)
			return string == null || "".equals(string.trim());
		else
			return string == null;
	}
	
	public static Boolean isZero(int num) {
		Boolean result = (num == 0) ? true : false;
		return result;
	}
}

//참조,출처 : https://cofs.tistory.com/97