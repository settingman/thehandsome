package com.hyundai.thehandsome.controller.cart;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.hyundai.thehandsome.Vo.CartVO;
import com.hyundai.thehandsome.service.CartService;

import jdk.internal.org.jline.utils.Log;

/**
 * @filename CartController
 * @author 최태승 
 * @since 2023.02.09
 * 장바구니화면 띄우기
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.05	최태승		최초 생성
 * </pre>
 */

@Controller
@RequestMapping("/cart")
public class CartController {
    
	@Autowired
	private CartService service;

    @RequestMapping(value = "", method = RequestMethod.GET)
    public String home(Model model, Principal principal) {
    	String mid = principal.getName();  	
    	List<CartVO> cartList = service.cSelectAll(mid);
    	
    	

		int i = 1;

		for (CartVO cartVO : cartList) {
			cartVO.setIndex(i);
			i+=1;
			cartVO.convert();
		}
		
	

    	model.addAttribute("cartlist", cartList);
    	System.out.println("log : cart");
        return "cart/cart";
    }
    
	
}