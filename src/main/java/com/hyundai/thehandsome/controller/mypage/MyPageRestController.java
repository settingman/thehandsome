package com.hyundai.thehandsome.controller.mypage;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.google.gson.Gson;
import com.hyundai.thehandsome.domain.mypage.Voucher;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * @since : 2023. 2. 5.
 * @FileName: MyPageRestController.java
 * @author : 박성환
 * @설명 : MyPage API 기능
 * 
 *     <pre>
 *   수정일         수정자               수정내용
 * ----------      --------    ---------------------------
 * 2023. 2. 5.     박성환      최초생성
 *     </pre>
 */
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/mypage")
@Controller
public class MyPageRestController {

	// 마이페이지 쿠폰 영역 AJAX
	@RequestMapping(value = "/voucher", produces = "application/json; charset=UTF-8", method = RequestMethod.GET)
	public void ajaxVoucher(HttpServletResponse responose) throws Exception {

		Gson gson = new Gson();

		Map<String, Object> data = new HashMap<>();

		ArrayList<Voucher> voucherList = new ArrayList<>();

		Voucher voucher1 = new Voucher("2023-02-01", "아울렛 및 라이프스타일 뷰티 상품군 제외 (온라인 전용, 3만원 이상 구매 시 사용 가능)",
				"VP2-302-FM1-A03-76LFSE", "[1%] 최태승 쿠폰", 1, null, "2023-07-31", null);
		Voucher voucher2 = new Voucher("2023-02-01", "아울렛 및 라이프스타일 뷰티 상품군 제외 (온라인 전용, 3만원 이상 구매 시 사용 가능)",
				"VP2-302-FM1-A03-76LFSE", "[100만원] 박성환 쿠폰", 1000000, null, "2024-07-31", "₩");
		;
		Voucher voucher3 = new Voucher("2023-02-01", "아울렛 및 라이프스타일 뷰티 상품군 제외 (온라인 전용, 3만원 이상 구매 시 사용 가능)",
				"VP2-302-FM1-A03-76LFSE", "[1000만원] 박세영 쿠폰", 10000000, null, "2024-07-31", "₩");
		;
		voucherList.add(voucher1);
		voucherList.add(voucher2);
		voucherList.add(voucher3);

		data.put("results", voucherList);

		responose.getWriter().print(gson.toJson(data));

//		// myapge ajax 보고 result 값 맞춰서 voucher 객체 만들어서 전달 하기.
//
//		
//

//		
//		response.put("results", voucherList);
//
//		return response;

	}

}
