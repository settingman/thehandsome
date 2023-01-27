package com.hyundai.thehandsome;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;



// SecurityAutoConfiguration = 시큐리티 임시 종료
@SpringBootApplication(exclude = SecurityAutoConfiguration.class)
public class ThehandsomeApplication {

	public static void main(String[] args) {
		SpringApplication.run(ThehandsomeApplication.class, args);
	}

}
