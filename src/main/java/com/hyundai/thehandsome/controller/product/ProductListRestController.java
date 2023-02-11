package com.hyundai.thehandsome.controller.product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hyundai.thehandsome.service.product.ProductListService;

import lombok.extern.log4j.Log4j2;
/**
 * ProductListRestController
 * 
 * @author 박세영
 * @since 2023.02.10
 * 
 *          <pre>
 * 수정일        		수정자       				수정내용
 * ----------  --------    ---------------------------
 * 2023.02.10  	박세영        최초 생성, getCategoryDepth 추가
 *          </pre>
 */
@Log4j2
@RestController
@RequestMapping("/productList")
public class ProductListRestController {

	@Autowired
	private ProductListService plistService;

	@GetMapping(value = { "/category/{depth1}", "/category/{depth1}/{depth2}" })
	public ResponseEntity<List<String>> getCategoryDepth(@PathVariable("depth1") String depth1,
			@PathVariable(required = false) String depth2) {

		ResponseEntity<List<String>> result = null;
		try {
			result = (depth2 == null)
					? new ResponseEntity<List<String>>(plistService.getCategory(depth1), HttpStatus.OK)
					: new ResponseEntity<List<String>>(plistService.getCategory(depth1, depth2), HttpStatus.OK);
			log.info(result);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

}
