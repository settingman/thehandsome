package com.hyundai.thehandsome.controller.cart;

import com.hyundai.thehandsome.Vo.UpdateCartCountReq;
import com.hyundai.thehandsome.service.CartService;

import jdk.internal.org.jline.utils.Log;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import java.util.HashMap;

/**
 * @filename CartRealRestController
 * @author 최태승 
 * @since 2023.02.11
 * 장바구니 수량 변경
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.11	최태승		최초 생성
 * </pre>
 */

@Slf4j
@RestController
@RequiredArgsConstructor
public class CartRealRestController {

    private final CartService cartService;

    @PostMapping("/cart/updateCartCount")
    public HashMap<Object, Object> updateCartCount(@RequestBody UpdateCartCountReq updateCartCountReq) {
    	log.info(updateCartCountReq.getPsId());
    	log.info(updateCartCountReq.getSized());
        cartService.updateCartCount(updateCartCountReq);
        HashMap<Object, Object> result = new HashMap<>();
        result.put("code", "0000");
        result.put("msg", "성공");
        result.put("data", "");
        return result;
    }

}
