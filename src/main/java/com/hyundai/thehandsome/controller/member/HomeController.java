package com.hyundai.thehandsome.controller.member;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import com.hyundai.thehandsome.domain.member.MemberFormDto;

@Controller
public class HomeController {
	
	
	@GetMapping(value = "/")
    public String memberForm(Model model) {
       
        return "index2";
    }

}
