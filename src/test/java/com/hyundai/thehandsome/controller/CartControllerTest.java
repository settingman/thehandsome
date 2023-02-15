package com.hyundai.thehandsome.controller;

import static org.hamcrest.CoreMatchers.any;
import static org.mockito.Mockito.doNothing;
import static org.mockito.Mockito.mock;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.verifyNoMoreInteractions;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.test.web.servlet.MockMvc;

import com.hyundai.thehandsome.Vo.CartVO;
import com.hyundai.thehandsome.controller.cart.CartRestController;
import com.hyundai.thehandsome.domain.cart.Cart;
import com.hyundai.thehandsome.service.CartService;

/**
 * @filename CartControllerTest
 * @author 최태승 
 * @since 2023.02.12
 * CartController 테스트 파일
 * JUnit4 사용
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.12  	최태승        최초 생성 
 * </pre>
 */

@RunWith(SpringRunner.class)
@WebMvcTest(CartRestController.class)
public class CartControllerTest {
    
    @Autowired
    private MockMvc mockMvc;
    
    @MockBean
    private CartService cartService;
    
    @Test
    public void testGetCartGET() throws Exception {
        // Given
        String mid = "test";
        List<CartVO> cartList = new ArrayList<>();
        when(cartService.cSelectAll(mid)).thenReturn(cartList);
        
        // When
        mockMvc.perform(get("/cart/{mid}", mid))
               .andExpect(status().isOk())
               .andExpect(content().contentType(MediaType.APPLICATION_JSON))
               .andExpect(jsonPath("$", hasSize(cartList.size())));
        
        // Then
        verify(cartService, times(1)).cSelectAll(mid);
        verifyNoMoreInteractions(cartService);
    }
    
    @Test
    public void testInsert() throws Exception {
        // Given
        String psid = "test";
        Principal principal = mock(Principal.class);
        when(principal.getName()).thenReturn("test");
        doNothing().when(cartService).cInsert((Cart) any(Cart.class));
        
        // When
        mockMvc.perform(get("/cart/cartProduct/{psid}", psid)
                .principal(principal))
               .andExpect(status().isOk());
        
        // Then
        verify(cartService, times(1)).cInsert((Cart) any(Cart.class));
        verifyNoMoreInteractions(cartService);
    }
    
    @Test
    public void testDeleteProduct() throws Exception {
        // Given
        String mid = "test";
        String psid = "test";
        HttpServletResponse response = mock(HttpServletResponse.class);
        doNothing().when(cartService).cDelete(mid, psid);
        
        // When
        mockMvc.perform(delete("/cart/delete/{mid}/{psid}", mid, psid))
               .andExpect(status().isOk());
        
        // Then
        verify(cartService, times(1)).cDelete(mid, psid);
        verifyNoMoreInteractions(cartService);
    }
    
    @Test
    public void testUpdateQuantity() throws Exception {
        // Given
        String mid = "test";
        String psid = "test";
        int pquantity = 1;
        
        // When
        mockMvc.perform(get("/cart/updateQuantity/{mid}/{psid}/{newCartQuantity}", mid, psid, pquantity))
               .andExpect(status().isOk());
        
        // Then
        verify(cartService, times(1)).cUpdate(any(CartVO.class));
        verifyNoMoreInteractions(cartService);
    }
}
