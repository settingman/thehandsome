package com.hyundai.thehandsome.controller.cart;

import java.io.IOException;
import java.util.HashMap;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hyundai.thehandsome.Vo.CartVO;
import com.hyundai.thehandsome.Vo.UpdateCartCountReq;
import com.hyundai.thehandsome.service.CartService;

/**
 * @filename CartRestController
 * @author 최태승 
 * @since 2023.02.11
 * 장바구니 rest controller
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.08  	최태승        최초 생성
 * 2023.02.10	최태승		삭제 처리
 * 2023.02.11	최태승		장바구니 수량 변경 처리
 * </pre>
 */


@RestController
@RequestMapping("/cart")
public class CartRestController {
	

    @Autowired
    private CartService service;
    
    
    // 카트목록
    // get 방식 .url에서 값을 가져옴
    @GetMapping("/{mid}")
    public List<CartVO> getCartGET(@PathVariable("mid") String mid) {
          
        System.out.println("mid = " + mid);
        mid=mid.replace(',', '.');
        System.out.println(mid);
        return service.cSelectAll(mid);
    }
    
    // 추가
    @GetMapping("/insert/{mid}/{psid}/{pquantity}")
    public String insert(@PathVariable("mid") String mid,
                                    @PathVariable("psid") String psid,
                                    @PathVariable("pquantity") int pquantity) {
        System.out.println(mid + psid + pquantity);
        CartVO cart = new CartVO();
        cart.setMid(mid);
        cart.setPsid(psid);
        cart.setPquantity(pquantity);
        if(service.checkCart(cart)>0) {
            return "invalid";
        }
        service.cInsert(cart);
        return "valid";
    }
    
    // 삭제 - 기능구현 완료 + redirect 구현완료
    @DeleteMapping("/delete/{mid}/{psid}")
    public String deleteProduct(@PathVariable("mid") String mid,
                                        @PathVariable("psid") String psid,
                                        HttpServletResponse response) throws IOException {
        System.out.println("삭제 완료");
        System.out.println("psid : " + psid);
        service.cDelete(mid,psid);
        String redirect_uri="http://localhost:8080/cart";
    	response.sendRedirect(redirect_uri);
        return redirect_uri;
    }
      
    
 // 수량변경
    @GetMapping("updateQuantity/{mid}/{psid}/{newCartQuantity}")
    public void updateQuantity(@PathVariable("mid") String mid,
                                @PathVariable("psid") String psid,
                                @PathVariable("pquantity") int pquantity,
                                @Param("psize") String psize,
         					   @Param("pccolorcode") String pccolorcode) {
        System.out.println("장바구니 업데이트 = " +mid+""+psid+""+pquantity+""+psize+""+pccolorcode);
        CartVO cart = new CartVO();
        
        cart.setMid(mid);
        cart.setPsid(psid);
        cart.setPquantity(pquantity);
        
        service.cUpdate(cart);  
    } 


}
