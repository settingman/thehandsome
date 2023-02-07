package com.hyundai.thehandsome.controller.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.hyundai.thehandsome.security.dto.SecurityMember;
import com.hyundai.thehandsome.service.ProductListService;

import lombok.extern.log4j.Log4j2;

/**
 * @since   : 2023. 2. 7.
 * @FileName: ProductRestContorller.java
 * @author  : 박성환
 * @설명    : product ajax 처리를 위한 controller

 * <pre>
 *   수정일         수정자               수정내용
 * ----------      --------    ---------------------------
 * 2023. 2. 7.     박성환      생성
 * </pre>
 */



@RestController
@RequestMapping("/product")
@Log4j2
public class ProductRestContorller {
	@Autowired
	private ProductListService plistService;
	
	@GetMapping("/addWishlist")
	public String addWishlist( @RequestParam("productCode") String productCode,
			 Authentication auth) {
		
		SecurityMember user = (SecurityMember) auth.getPrincipal();
		String mId = user.getMId();
		
		
		return plistService.wishList(mId, productCode);
		
	}

}
