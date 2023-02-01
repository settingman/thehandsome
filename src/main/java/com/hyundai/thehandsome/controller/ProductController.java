package com.hyundai.thehandsome.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hyundai.thehandsome.Vo.product.ListVO;
import com.hyundai.thehandsome.service.ProductListService;

import lombok.extern.log4j.Log4j2;

/**
 * ProductController
 * @author 박세영
 * @since 2023.02.01
 * @version 1.0
 * 
 * <pre>
 * 수정일        		수정자       				수정내용
 * ----------  --------    ---------------------------
 * 2023.02.01  	박세영        		최초 생성
 * </pre>
 */

@Controller
@RequestMapping("/product")
@Log4j2
public class ProductController {
	@Autowired
	private ProductListService plistService;
	
	@GetMapping("/ProductList")
	public void getProductList(Model model) {
		log.info("getProductList-----------------");
		try {
			List<ListVO> pList = plistService.getProductList();
			model.addAttribute("pList", pList);
		} catch (Exception e) {
			throw e;
		}
	}
}
