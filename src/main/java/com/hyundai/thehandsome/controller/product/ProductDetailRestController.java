package com.hyundai.thehandsome.controller.product;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hyundai.thehandsome.service.ProductListService;

import lombok.extern.log4j.Log4j2;

@Log4j2
@RestController
@RequestMapping("/info")
public class ProductDetailRestController {

	@Autowired
	private ProductListService service;

	@GetMapping(value = "/imgList/{PCID}")
	public ResponseEntity<List<String>> getimg(@PathVariable("PCID") String PCID) {
		ResponseEntity<List<String>> result = null;
		try {
			result = new ResponseEntity<List<String>>(service.getProductImg(PCID), HttpStatus.OK);
			log.info(result);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}

}
