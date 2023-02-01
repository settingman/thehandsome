package com.hyundai.thehandsome.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import lombok.extern.log4j.Log4j2;

@Controller
@RequestMapping("/product")
@Log4j2
public class ProductController {
	@GetMapping("/ProductList")
	public void getProductList() {
		log.info("getProductList");
	}
}
