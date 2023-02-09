package com.hyundai.thehandsome.controller.product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.hyundai.thehandsome.Vo.product.CatePListVO;
import com.hyundai.thehandsome.Vo.product.ListVO;
import com.hyundai.thehandsome.Vo.product.detail.ProductDetailVO;
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
 * 2023.02.04  	박세영        getProductItem() 추가
 * </pre>
 */

@Controller
@RequestMapping("/product")
@Log4j2
public class ProductController {
	@Autowired
	private ProductListService plistService;
	
	@GetMapping("/ProductList/{category}")
	public String getProductList(@PathVariable("category") String category, Model model) {
		log.info("getProductList-----------------");
		try {
			List<CatePListVO> pList = plistService.getPListWithCategory(category);
			model.addAttribute("pList", pList);
			return "/product/ProductList";		
		} catch (Exception e) {
			throw e;
		}
	}
	
	@GetMapping("/ProductDetail/{PCID}")
	public String getProductItem(@PathVariable("PCID") String PCID, Model model) {
		log.info("getProductList-----------------");
		try {
			ProductDetailVO itemInfo = plistService.getProductDetail(PCID);
			model.addAttribute("itemInfo", itemInfo);
			
			List<String> imgList = plistService.getProductImg(PCID);
			model.addAttribute("imgList", imgList);
			return "/product/ProductDetail";		
		} catch (Exception e) {
			throw e;
		}
	}
}
