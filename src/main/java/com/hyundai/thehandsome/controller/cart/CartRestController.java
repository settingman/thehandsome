package com.hyundai.thehandsome.controller.cart;

import java.util.List;

import org.apache.ibatis.annotations.Param;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.hyundai.thehandsome.Vo.CartVO;
import com.hyundai.thehandsome.service.CartService;

@RestController
@RequestMapping("/cart")
public class CartRestController {
	

    @Autowired
    private CartService service;
    
    
    // 카트목록
    // post 방식으로 하는 대신 get 방식으로 한뒤 url에서값을가져와 사용 ->
    @GetMapping("/{mid}")
    public List<CartVO> getCartGET(@PathVariable("mid") String mid) {
        
        
        System.out.println("mid = " + mid);
        mid=mid.replace(',', '.');

        System.out.println(mid);
        return service.cSelectAll(mid);
    }
    
    // 추가
    @GetMapping("/addtocart/{mid}/{psid}/{pquantity}")
    public String addToCart(@PathVariable("mid") String mid,
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
    
    
    
    // 삭제
//    @PostMapping("/delete/{mid}/{psid}")
    @GetMapping("/delete/{mid}/{psid}")
    public List<CartVO> RemoveProduct(@PathVariable("mid") String mid,
                                        @PathVariable("psid") String psid) {
        System.out.println("삭제 완료");
        System.out.println("psid : " + psid);
        CartVO cart = new CartVO();
        cart.setMid(mid);	
        cart.setPsid(psid);
//        service.cDeleteAll(cart);
        service.cDelete(mid, psid);
        return service.cSelectAll(mid);
    }
    
 // 선택항목 삭제 - 보류
//    @GetMapping("selectRemove/{mid}/{psid}")
//    public void selectRemove(@PathVariable("mid") String mid,
//                                @PathVariable("psid") String psid) {
//        // ,(comma)는 URL에서 %2C로 대체되고 그 URL을 받아쓸때 다시 , 로 반환된다
//        System.out.println("psid = " + psid);
//        if (psid == "")System.out.println("there are no items");
//            
//        StringTokenizer st = new StringTokenizer(psid, ",");
//        List<Integer> entryNum = new ArrayList<>();
//        while (st.hasMoreTokens()) {
//            entryNum.add(Integer.parseInt(st.nextToken()) + 1); // rownum은 1부터시작
//        }
//        
//        List<CartVO> cart =service.cDelete(mid, psid);
//        List<String> psidList = new ArrayList<>();
//        for(CartVO list : cart) {
//            psidList.add(list.getPsid());
//        }
//        System.out.println(psidList);
//        service.deleteProducts(mid, psidList);
//    }
    
    // 수량체크
    @GetMapping("checkStock/{mid}/{psid}/{pquantity}")
    public String checkStock(@PathVariable("mid") String mid,
                                @PathVariable("psid") String psid,
                                @PathVariable("pquantity") int pquantity) {
        System.out.println(mid + psid + pquantity);
        CartVO cart = new CartVO();
        cart.setMid(mid);
        cart.setPsid(psid);
        System.out.println("재고량 확인 : " + service.checkStock(cart));
        // 재고보다 장바구니 양이 많으면
        if(pquantity< service.checkStock(cart)) {
            return "valid";
        }else {
            return "invalid";
        }
        //스턱테이블가기
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
