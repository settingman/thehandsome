package com.hyundai.thehandsome.controller.mypage;

import java.security.Principal;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.google.gson.Gson;
import com.hyundai.thehandsome.domain.mypage.Voucher;
import com.hyundai.thehandsome.domain.mypage.WishList;
import com.hyundai.thehandsome.mapper.MyPageMapper;
import com.hyundai.thehandsome.security.dto.SecurityMember;
import com.hyundai.thehandsome.service.MailServiceImpl;

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
 * 2023. 2. 6.	   박성환	   passwordControll 생성 - 현재 로그인되어있는 회원의 pw check
 * 2023. 2. 10.	   박성환	   voucher 조회 수정
 *     </pre>
 */
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/mypage")
@RestController
public class MyPageRestController {

	@Autowired
	private final PasswordEncoder passwordEncoder;

	@Autowired
	private final MailServiceImpl mailService;

	@Autowired
	private final MyPageMapper myPageMapper;

	// 마이페이지 쿠폰 영역 AJAX
	// 디테일 쿠폰 페이지 영역 AJAX
	@RequestMapping(value = "/voucher", produces = "application/json; charset=UTF-8", method = RequestMethod.GET)
	public void ajaxVoucher(String id_sel ,HttpServletResponse response, Principal principal) throws Exception {

		log.info(id_sel);
		
		// N일때  Y일때 쿠폰 Statue 보고 뿌리기.
		
		
		Gson gson = new Gson();

		// 회원 아이디로 보유 쿠폰 조회하여 voucher 객체를 만들어 준뒤 넣어주기.

		Map<String, Object> data = new HashMap<>();
		List<Voucher> voucherList = myPageMapper.findVoucher(principal.getName());

		for (Voucher voucher : voucherList) {
			
			log.info(voucher.toString());

			if (voucher.getValue() > 100)
				voucher.currency = "₩";
			else
				voucher.currency = null;
		}

		/*
		 * Voucher voucher3 = new Voucher("2023-02-01",
		 * "아울렛 및 라이프스타일 뷰티 상품군 제외 (온라인 전용, 3만원 이상 구매 시 사용 가능)",
		 * "VP2-302-FM1-A03-76LFSE", "[1000만원] 박세영 쿠폰", 10000000, null, "2024-07-31",
		 * "₩"); ;
		 */

		data.put("results", voucherList);

		response.setCharacterEncoding("UTF-8");
		response.getWriter().print(gson.toJson(data));

	}

	// 마이페이지 위시리스트 영역 AJAX
	@RequestMapping(value = "/myWishList", produces = "application/json; charset=UTF-8", method = RequestMethod.GET)
	public void ajaxWishList(HttpServletResponse response, Principal principal) throws Exception {

		Gson gson = new Gson();

		// 회원 아이디로 보유 쿠폰 조회하여 voucher 객체를 만들어 준뒤 넣어주기.

		Map<String, Object> data = new HashMap<>();

		List<WishList> wishList = myPageMapper.findWishlist(principal.getName());

		data.put("results", wishList);

		response.setCharacterEncoding("UTF-8");
		response.getWriter().print(gson.toJson(data));

	}

	// 회원의 입력한 비밀번호 처리. ( 비밀번호 변경 페이지 사용)
	@RequestMapping(value = "/passwordControll", method = RequestMethod.GET)
	public boolean passwordControll(HttpServletResponse response, @RequestParam("inputPW") String inputPW,
			@RequestParam("division") String division, Authentication auth) throws Exception {

		SecurityMember user = (SecurityMember) auth.getPrincipal();
		String userpw = user.getPassword();

		if (division.equals("compare")) {
			if (passwordEncoder.matches(inputPW, userpw)) {
				log.info("pw 재확인 완료..");
				return true;
			} else {
				return false;
			}

		} else if (division.equals("save")) {

			/** 새로운 비밀번호로 업데이트 (메일서비스 재활용) **/
			mailService.updatePassword(inputPW, user.getMId());
			return true;

		}

		return false;

	}

	
}
