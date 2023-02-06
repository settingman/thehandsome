package com.hyundai.thehandsome.security.config;

import java.io.IOException;
import java.net.URLEncoder;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationCredentialsNotFoundException;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.InternalAuthenticationServiceException;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.SimpleUrlAuthenticationFailureHandler;

import com.hyundai.thehandsome.service.MemberService;

import lombok.extern.slf4j.Slf4j;

/**
 * @since : 2023. 2. 1.
 * @FileName: SecurityConfig.java
 * @author : 박성환
 * @설명 : 시큐리티 설정
 * 
 *     <pre>
 *   수정일         수정자               수정내용
 * ----------      --------    ---------------------------
 * 2023. 2. 1.     박성환      Security config setting
 * 2023. 2. 3.     박성환      마이페이지 접근권한 수정
 *     </pre>
 */
@Slf4j
@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	MemberService memberService;

	// Application 접근 정보 설정
	@Override
	protected void configure(HttpSecurity http) throws Exception {

		http.authorizeRequests().antMatchers("/product/**", "/member/**", "/mypage/**").permitAll() // 누구나 mypage 접근허용 - 02/03 mypage
																						// 테스트때문에
				.antMatchers("/", "/member/mypage").hasRole("USER") // USER, ADMIN만 접근 가능
				.antMatchers("/admin").hasRole("ADMIN") // ADMIN만 접근 가능
				.anyRequest().authenticated(); // 나머지 요청들은 권한의 종류에 상관 없이 권한이 있어야 접근
		http.formLogin()// Form 로그인 인증 기능이 작동함
				.loginPage("/member/login")// 사용자 정의 로그인 페이지
				.defaultSuccessUrl("/")// 로그인 성공 후 이동 페이지
				.failureUrl("/login.html?error=true")// 로그인 실패 후 이동 페이지
				.usernameParameter("mId")// 아이디 파라미터명 설정
				.passwordParameter("password")// 패스워드 파라미터명 설정
				.loginProcessingUrl("/member/login")// 로그인 Form Action Url
				.successHandler(new AuthenticationSuccessHandler() {
					@Override
					public void onAuthenticationSuccess(HttpServletRequest httpServletRequest,
							HttpServletResponse response, Authentication authentication)
							throws IOException, ServletException {
						System.out.println("authentication:: " + authentication.getName());
						System.out.println("authentication:: " + authentication.getAuthorities());
						response.sendRedirect("/");
					}
				})// 로그인 성공 후 핸들러
				.failureHandler(new SimpleUrlAuthenticationFailureHandler() {
					@Override
					public void onAuthenticationFailure(HttpServletRequest request, HttpServletResponse response,
							AuthenticationException exception) throws IOException, ServletException {

						String errorMessage;

						request.setAttribute("mId", request.getParameter("mId"));

						if (exception instanceof BadCredentialsException) {
							errorMessage = "아이디 또는 비밀번호가 맞지 않습니다. 다시 확인해주세요.";
						} else if (exception instanceof InternalAuthenticationServiceException) {
							errorMessage = "내부 시스템 문제로 로그인 요청을 처리할 수 없습니다. 관리자에게 문의하세요. ";
						} else if (exception instanceof UsernameNotFoundException) {
							errorMessage = "존재하지 않는 계정입니다. 회원가입 후 로그인해주세요.";
						} else if (exception instanceof AuthenticationCredentialsNotFoundException) {
							errorMessage = "인증 요청이 거부되었습니다. 관리자에게 문의하세요.";
						} else {
							errorMessage = "알 수 없는 오류로 로그인 요청을 처리할 수 없습니다. 관리자에게 문의하세요.";
						}

						errorMessage = URLEncoder.encode(errorMessage, "UTF-8"); /* 한글 인코딩 깨진 문제 방지 */

						// 로그인 실패시 에러메세지 출력 및 로그인 아이디 저장하여 다시 보여주기.
						setDefaultFailureUrl("/member/login?error=true&exception=" + errorMessage + "&mId="
								+ request.getParameter("mId"));

						super.onAuthenticationFailure(request, response, exception);
					}
				})// 로그인 실패 후 핸들러 (해당 핸들러를 생성하여 핸들링 해준다.)
				.permitAll() // 사용자 정의 로그인 페이지 접근 권한 승인

				.and().logout().logoutUrl("/member/logout") // 로그아웃 처리 URL (= form action url)
				// .logoutSuccessUrl("/login") // 로그아웃 성공 후 targetUrl,
				// logoutSuccessHandler 가 있다면 효과 없으므로 주석처리.
				.addLogoutHandler((request, response, authentication) -> {
					// 사실 굳이 내가 세션 무효화하지 않아도 됨.
					// LogoutFilter가 내부적으로 해줌.
					HttpSession session = request.getSession();
					if (session != null) {
						session.invalidate();
					}
				}) // 로그아웃 핸들러 추가
				.logoutSuccessHandler((request, response, authentication) -> {
					response.sendRedirect("/member/login");
				}) // 로그아웃 성공 핸들러
				.deleteCookies("remember-me");

		http.oauth2Login().successHandler(new AuthenticationSuccessHandler() {

			@Override
			public void onAuthenticationSuccess(HttpServletRequest request, HttpServletResponse response,
					Authentication authentication) throws IOException, ServletException {
				log.info("------------------------");
				log.info("onAuthenticationSuccess");
				response.sendRedirect("/");
			}
		});

	}

	// 로그인 검증
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(memberService).passwordEncoder(passwordEncoder());
	}

	// 인증하지 않을 페이지 목록 지정
	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring().antMatchers("/js/**", "/css/**", "/img/**", "/frontend/**");
	}

	@Bean // 비밀번호를 그대로 저장하지않고 암호화 bean.
	public PasswordEncoder passwordEncoder() {
		return new BCryptPasswordEncoder();
	}

}
