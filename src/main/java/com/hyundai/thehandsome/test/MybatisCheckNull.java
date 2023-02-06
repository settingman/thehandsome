package com.hyundai.thehandsome.test;



public class MybatisCheckNull {
	public static Boolean isEmpty(String string) {
		if (string instanceof String)
			return string == null || "".equals(string.trim());
		else
			return string == null;
	}
}

//참조,출처 : https://cofs.tistory.com/97