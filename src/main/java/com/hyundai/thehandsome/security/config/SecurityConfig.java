package com.hyundai.thehandsome.security.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;


@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter{
	
	
	@Override
	protected void configure(HttpSecurity http) throws Exception{
		http
				.authorizeHttpRequests()
				.anyRequest().authenticated()
		.and()
				.formLogin()
				;
	}
	
	
	@Override
    public void configure(WebSecurity web) throws Exception {
      web.ignoring().antMatchers("/static/js/**","/static/css/**","/static/img/**","/static/frontend/**"); // 인증 하지않을 페이지 목록
    }
	
	

}
