package com.hyundai.thehandsome.controller.cart;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.hyundai.thehandsome.Vo.CartVO;
import com.hyundai.thehandsome.service.CartService;

import jdk.internal.org.jline.utils.Log;
import lombok.extern.slf4j.Slf4j;

@Controller
@Slf4j
@RequestMapping("/cart")
public class CartController {

	@Autowired
	private CartService service;

	@RequestMapping(value = "", method = RequestMethod.GET)
    public String home(Model model) {
    	String mid = "dev";
    	
    	log.info("carList");
    	
    	List<CartVO> cartList = service.cSelectAll(mid);
    	model.addAttribute("cartlist", cartList);
    	
    	for(int i=0; i<cartList.size(); i++) {
    		
    		
    		System.out.println(cartList.get(i	));
    	
    	}
        return "cart/cart";
	}
    
	
}