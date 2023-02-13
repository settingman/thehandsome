package com.hyundai.thehandsome.controller.order;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hyundai.thehandsome.domain.event.Event;
import com.hyundai.thehandsome.mapper.EventMapper;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * @filename OrderController
 * @author 최태승 
 * @since 2023.02.05
 * 주문 화면 띄우기
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.05  	최태승        최초 생성
 * 2023.02.08	최태승		쿠폰 처리
 * </pre>
 */

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/order")
@Controller
public class OrderController {

	private final EventMapper eventMapper;

	// 배송결제 정보

	@GetMapping(value = "/order")
	public String orderForm() {
		return "order/orderDetail";
	}
	
	// 주문완료 페이지

	@GetMapping(value = "/complete")
	public String orderCompleteForm(@RequestParam(value = "pg_token") String pg_token) {
		log.info("orderCompleteForm");

		return "order/complete";
	}

	// depth1 팝업

	@GetMapping(value = "/mydeliveryPopup")
	public String delieveryForm() {
		log.info("mydeliveryPopup");
		return "order/depth1";
	}

	// depth2 팝업

	@GetMapping(value = "/mydeliveryRegistePopup")
	public String delieveryRegisterForm() {
		log.info("mydeliveryRegistePopup");
		return "order/depth2";
	}

	// 쿠폰 정보 가져오기

	@ResponseBody

	@GetMapping("/coupon")
	public Event checkCouponName(@RequestParam("couponname") String couponName) {

		Event event = eventMapper.findByName(couponName);
		System.out.println(event);
		return event;
	}

}