package com.hyundai.thehandsome;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.web.filter.HiddenHttpMethodFilter;



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
	public HiddenHttpMethodFilter hiddenHttpMethodFilter(){
		return new HiddenHttpMethodFilter();
	}

}
