package com.hyundai.thehandsome.controller.mypage;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hyundai.thehandsome.controller.member.MemberController;
import com.hyundai.thehandsome.mapper.MemberMapper;
import com.hyundai.thehandsome.service.MailServiceImpl;
import com.hyundai.thehandsome.service.MemberService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * @since   : 2023. 2. 3.
 * @FileName: MyPageController.java
 * @author  : 박성환
 * @설명    : 마이페이 기능 구현

 * <pre>
 *   수정일         수정자               수정내용
 * ----------      --------    ---------------------------
 * 2023. 2. 3.     박성환      마이페이지 접근 기능
 * </pre>
 */
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/mypage")
@Controller
public class MyPageController {

	
	@GetMapping(value = "/mypage")
	public String main(Model model) {
		
		return "mypage/mypage";
	}

	
	// 쿠폰 AJAX
	// 위시리스트 AJAX 구현해보기

}
