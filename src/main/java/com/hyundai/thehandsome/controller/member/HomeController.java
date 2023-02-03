package com.hyundai.thehandsome.controller.member;

import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class HomeController {

	@GetMapping(value = "/")
	public String memberForm(Model model) {
		
		

		return "index2";
	}
	
	
	@GetMapping(value = "/member/testpage")
	public String main(Model model) {
		
		
		
		return "mypage/mypage";
	}

	@GetMapping(value = "/test")
	public String memberForm(@AuthenticationPrincipal User user, Model model) {
		log.info("exMember.....");
		log.info("--------------");
		log.info(user.toString());

		return "index2";
	}

}
