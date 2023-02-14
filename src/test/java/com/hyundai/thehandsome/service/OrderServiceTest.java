package com.hyundai.thehandsome.service;

import com.hyundai.thehandsome.domain.order.OrderRequest;
import com.hyundai.thehandsome.mapper.OrderMapper;
import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.transaction.annotation.Transactional;

import java.util.concurrent.CountDownLatch;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

/**
 * @filename OrderServiceTest
 * @author 최태승 
 * @since 2023.02.12
 * OrderService 테스트 파일
 * JUnit4 사용
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.12  	최태승        최초 생성 
 * </pre>
 */


@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
@SpringBootTest
class OrderServiceTest {

    @Autowired
    private OrderService orderService;

    @Autowired
    private OrderMapper orderMapper;


    @Test
    @Transactional // rollback
    public void 주문하기_ORDER_저장() {
        OrderRequest request = new OrderRequest();
        request.setOicount("1");
        request.setOreceiver("tester1");
        request.setOphone("01012345678");
        request.setOzipcode("35631");
        request.setOaddress1("서울특별시 도봉구");
        request.setOaddress2("도봉로");
        request.setMmileage("300");
        request.setOmemo("메모2");
        request.setOtel("01012345678");
        request.setOemail("test@naver.com");
        request.setCpid("쿠폰 30%");
        request.setOafterPrice("50000");
        request.setObeforePrice("30000");
        request.setPmcompany("KAKAO CORP");
        request.setPmmethod("0");

        int res = orderService.saveOrder(request);

        Assertions.assertThat(res).isEqualTo(1);
    }


    @Test
    @Transactional
    public void 주문_동시성테스트() throws InterruptedException {
        int threadCounter = 10;
        ExecutorService executorService = Executors.newFixedThreadPool(8);
        CountDownLatch latch = new CountDownLatch(threadCounter);

        for (int i = 0; i < threadCounter; i++) {
            executorService.submit(() -> {
                try {
                    //orderService.saveOrder(request); 추후 추가하시면됩니다.
                } finally {
                    latch.countDown();
                }
            });
        }

        latch.await();
    }

}