package com.hyundai.thehandsome.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.hyundai.thehandsome.controller.order.OrderController;
import com.hyundai.thehandsome.domain.order.OrderRequest;
import com.hyundai.thehandsome.mapper.OrderMapper;
import com.hyundai.thehandsome.service.OrderService;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.security.test.context.support.WithMockUser;
import org.springframework.security.test.web.servlet.request.SecurityMockMvcRequestPostProcessors;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.assertj.core.api.Assertions;
import org.springframework.web.util.NestedServletException;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

/**
 * @filename OrderControllerTest
 * @author 최태승 
 * @since 2023.02.12
 * OrderController 테스트 파일
 * JUnit4 사용
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.12  	최태승        최초 생성 
 * </pre>
 */


// API GET/POST 결과 테스트
@ExtendWith(SpringExtension.class)
@ContextConfiguration(classes = {OrderController.class, ObjectMapper.class})
@AutoConfigureMockMvc
@WebAppConfiguration
@WebMvcTest(OrderController.class)
class OrderControllerTest {


    // MOCK MVC 활용
    @Autowired
    @SuppressWarnings("SpringJavaInjectionPointsAutowiringInspection")
    private MockMvc mockMvc;

    @MockBean
    private OrderService orderService;

    @MockBean
    private OrderMapper orderMapper;

    @Test
    @WithMockUser
    void 주문하기() throws Exception {
        OrderRequest request = new OrderRequest();
        mockMvc.perform(post("/order")
                .contentType(MediaType.APPLICATION_JSON)
                .content(new ObjectMapper().writeValueAsString(request))
                .with(SecurityMockMvcRequestPostProcessors.csrf()))
                .andExpect(status().isOk());
    }

    @Test
    @WithMockUser
    void 카카오페이_결제준비() throws Exception {
        mockMvc.perform(get("/order/pay")
                .param("cid", "TC0ONETIME")
                .param("partner_order_id", "1001")
                .param("partner_user_id","itsme")
                .param("item_name", "item11")
                .param("quantity", "10")
                .param("total_amount", "30000")
                .param("tax_free_amount","3000")
                .with(SecurityMockMvcRequestPostProcessors.csrf()))
                .andExpect(status().isOk());
    }

    // pg_token 만료에대한 예외 테스트
    @Test
    @WithMockUser
    void 카카오페이_결제완료_예외테스트() throws Exception {
        try{
            mockMvc.perform(get("/order/pay/end")
                            .param("tid", "T3d923f3003e7c981cdf")
                            .param("cid", "TC0ONETIME")
                            .param("partner_order_id", "1001")
                            .param("partner_user_id","itsme")
                            .param("pg_token", "1397338e875536e366c2")
                            .with(SecurityMockMvcRequestPostProcessors.csrf()))
                    .andReturn();
        }catch (Exception e){
            Assertions.assertThat(e).isInstanceOf(NestedServletException.class);
        }
    }
}