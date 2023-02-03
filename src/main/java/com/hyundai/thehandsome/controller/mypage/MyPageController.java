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

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/mypage")
@Controller
public class MyPageController {

	
	@GetMapping(value = "/mypage")
	public String main(Model model) {
		
		return "mypage/mypage";
	}


}
