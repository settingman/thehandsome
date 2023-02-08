package com.hyundai.thehandsome.controller.product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hyundai.thehandsome.Vo.product.detail.ProductStockVO;
import com.hyundai.thehandsome.service.ProductListService;
import com.hyundai.thehandsome.service.product.ProductDetailService;

import lombok.extern.log4j.Log4j2;
/**
 * 
 * ProductDetailRestController.java
 * @author 박세영
 * @since 2023. 2. 7.
 * 
 * <pre>
 * 수정일         수정자       			  수정내용
 * ----------  --------    ---------------------------
 * 2023. 2. 7.  박세영       최초 생성, getimg() 추가
 * </pre>
 */
@Log4j2
@RestController
@RequestMapping("/info")
public class ProductDetailRestController {

	@Autowired
	private ProductListService listService;
	
	@Autowired
	private ProductDetailService detailService;

	@GetMapping(value = "/imgList/{PCID}")
	public ResponseEntity<List<String>> getimg(@PathVariable("PCID") String PCID) {
		ResponseEntity<List<String>> result = null;
		try {
			result = new ResponseEntity<List<String>>(listService.getProductImg(PCID), HttpStatus.OK);
			log.info(result);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
	
	@GetMapping(value = "/stock/{PCID}")
	public ResponseEntity<List<ProductStockVO>> getStock(@PathVariable("PCID") String PCID) {
		ResponseEntity<List<ProductStockVO>> result = null;
		try {
			result = new ResponseEntity<List<ProductStockVO>>(detailService.getStock(PCID), HttpStatus.OK);
			log.info(result);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

}
