package com.hyundai.thehandsome.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hyundai.thehandsome.Vo.MemberVo;
import com.hyundai.thehandsome.service.MemberService;


@Controller
@RequestMapping("/test")
public class MemberController {
	
	
	@Autowired
	private MemberService memberService;
	
	@RequestMapping(value="/member")
	public String index(Model model) {
		
		System.out.println("member");
		
		List<MemberVo> memberList = memberService.getAllMember();
		System.out.println("size: " + memberList.size());
		
		System.out.println("member2");
		
		model.addAttribute("memberList",memberList);
		return "member";
	}
}