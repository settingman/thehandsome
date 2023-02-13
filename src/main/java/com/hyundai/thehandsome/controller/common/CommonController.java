package com.hyundai.thehandsome.controller.common;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.log4j.Log4j2;

@Controller
@RequestMapping("/common")
@Log4j2
public class CommonController {
	@GetMapping("/navShop")
	public String getProductList() {
		return "/common/navShop" ;
	}
}
