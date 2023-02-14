package com.hyundai.thehandsome;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.filter.HiddenHttpMethodFilter;

/**
 * @since : 2023. 2. 14.
 * @FileName: ThehandsomeApplication.java
 * @author : 박성환
 * @설명 : 스프링부트 어플리케이션
 * 
 *     <pre>
 *   수정일         수정자               수정내용
 * ----------      --------    ---------------------------
 * 2023. 2. 07.     박성환      최초생성
 *     </pre>
 */

// SecurityAutoConfiguration = 시큐리티 임시 종료
@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class ThehandsomeApplication {

	public static void main(String[] args) {
		SpringApplication.run(ThehandsomeApplication.class, args);
	}

	/*
	 * @Bean public CharacterEncodingFilter characterEncodingFilter() {
	 * CharacterEncodingFilter characterEncodingFilter = new
	 * CharacterEncodingFilter(); characterEncodingFilter.setEncoding("UTF-8");
	 * characterEncodingFilter.setForceEncoding(true); return
	 * characterEncodingFilter; }
	 */

	// 삭제 추가 - 최태승
	@Bean
	public HiddenHttpMethodFilter hiddenHttpMethodFilter() {
		return new HiddenHttpMethodFilter();
	}

}
