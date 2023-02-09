package com.hyundai.thehandsome.controller.mypage;

import java.security.Principal;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.hyundai.thehandsome.Vo.product.CatePListVO;
import com.hyundai.thehandsome.domain.mypage.WishList;
import com.hyundai.thehandsome.mapper.MyPageMapper;
import com.hyundai.thehandsome.security.dto.SecurityMember;
import com.hyundai.thehandsome.service.ProductListService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * @since : 2023. 2. 3.
 * @FileName: MyPageController.java
 * @author : 박성환
 * @설명 : 마이페이 기능 구현
 * 
 *     <pre>
 *   수정일         수정자               수정내용
 * ----------      --------    ---------------------------
 * 2023. 2. 3.     박성환      마이페이지 접근 기능
 * 2023. 2. 6.     박성환		개인정보변경 페이지 연결
 *     </pre>
 */
@Slf4j
@RequiredArgsConstructor
@RequestMapping("/mypage")
@Controller
public class MyPageController {

	@Autowired
	private final PasswordEncoder passwordEncoder;
	@Autowired
	private final MyPageMapper myPageMapper;
	@Autowired
	private ProductListService plistService;

	@GetMapping(value = "/mypage")
	public String main(Model model) {

		return "mypage/mypage";
	}

	// 쿠폰 AJAX
	// 위시리스트 AJAX 구현해보기

	// 개인정보 변경 비밀번호 확인 페이지
	@GetMapping(value = "/personInfomationChangePWCheck")
	public String PWCheck(Model model) {

		return "/mypage/personInfomationChangePWCheck";
	}

	@PostMapping(value = "/personInfomationChangePWCheck")
	public String postPrevModify(Authentication auth, @RequestParam("mpassword") String mpassword,
			RedirectAttributes rttr) {
		SecurityMember user = (SecurityMember) auth.getPrincipal();
		String userpw = user.getPassword();

		log.info(user.toString());
		log.info(userpw);

		if (passwordEncoder.matches(mpassword, userpw)) {
			log.info("pw 재확인 완료..");
			return "redirect:/mypage/personInfomationChange";
		} else {
			rttr.addFlashAttribute("msg", "비밀번호를 다시 확인해 주세요.");
			return "redirect:/mypage/personInfomationChangePWCheck";
		}
	}

	@GetMapping(value = "/personInfomationChange")
	public String infomationChange(Model model) {

		return "/mypage/personInfomationChange";
	}

	@GetMapping(value = "/changePw")
	public String changePw(Model model) {

		return "/mypage/changePw";
	}

	@GetMapping(value = "/myWish")
	public String myWish(Model model,Principal principal) {
		
		log.info("myWish");
		
		List<WishList> wishList = myPageMapper.findWishlist(principal.getName());
		
		try {
			List<CatePListVO> pList = plistService.getPListWithLikes(wishList);;
						
			model.addAttribute("pList", pList);
			return "/mypage/myWish";		
		} catch (Exception e) {
			throw e;
		}
		
		
		

		
	}

}
