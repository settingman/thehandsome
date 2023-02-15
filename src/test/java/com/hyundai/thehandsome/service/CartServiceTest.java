package com.hyundai.thehandsome.service;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.hyundai.thehandsome.Vo.CartVO;
import com.hyundai.thehandsome.domain.cart.Cart;
import com.hyundai.thehandsome.mapper.CartMapper;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CartServiceTest {

  @Autowired
  private CartService cartService;
  
  @Autowired
  private CartMapper cartMapper;

  @Test
  public void testCInsert() {
    // 테스트용 Cart 객체 생성
    Cart cart = new Cart();
    cart.setMid("test");
    cart.setPsid("test");
    cart.setPccolorcode("test");
    cart.setPquantity(1);
    cart.setPsize("test");
    cart.setPcid("test");

    // 테스트
    cartService.cInsert(cart);

    // 결과 확인
    int result = cartMapper.checkCart("test", "test");
    assertEquals(1, result);
  }
  
  @Test
  public void testCSelectAll() {
    // 테스트용 mid 값 설정
    String mid = "test";
    
    // 테스트
    List<CartVO> cartList = cartService.cSelectAll(mid);
    
    // 결과 확인
    assertNotNull(cartList);
  }

  @Test
  public void testCDeleteAll() {
    // 테스트용 CartVO 객체 생성
    CartVO cart = new CartVO();
    cart.setMid("test");
    cart.setPcid("test");

    // 테스트
    cartService.cDeleteAll(cart);

    // 결과 확인
    List<CartVO> result = cartMapper.selectList("test");
    assertEquals(0, result.size());
  }

  @Test
  public void testCDelete() {
    // 테스트용 mid, psid 값 설정
    String mid = "test";
    String psid = "test";

    // 테스트
    cartService.cDelete(mid, psid);

    // 결과 확인
    int result = cartMapper.checkCart(mid, psid);
    assertEquals(0, result);
  }

  @Test
  public void testCUpdate() {
    // 테스트용 CartVO 객체 생성
    CartVO cart = new CartVO();
    cart.setMid("test");
    cart.setPsid("test");
    cart.setPccolorcode("test");
    cart.setPquantity(2);
    cart.setPsize("test");
    cart.setPcid("test");

    // 테스트
    cartService.cUpdate(cart);

    // 결과 확인
    CartVO result = cartMapper.selectOne("test", "test");
    assertEquals(2, result.getPquantity());
  }

  @Test
  public void testCheckCart() {
    // 테스트용 Cart 객체 생성
    Cart cart = new Cart();
    cart.setMid("test");
    cart.setPsid("test");

    // 테스트
    int result = cartService.checkCart(cart);

    // 결과 확인
    assertEquals(0, result);
  }

  @Test
  public void testCheckStock() {
    // 테스트용 Cart 객체 생성
    Cart cart = new Cart();
    cart.setMid("test");
    cart.setPsid("test");

    // 테스트
    int result = cartService.checkStock(cart);

    // 결과 확인
    assertEquals(0, result);
  }


  
    
