package com.hyundai.thehandsome.controller.member;

import java.sql.Date;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.hyundai.thehandsome.domain.member.Member;
import com.hyundai.thehandsome.domain.member.MemberFormDto;
import com.hyundai.thehandsome.mapper.MemberMapper;
import com.hyundai.thehandsome.service.MemberService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * @Date : 2023. 1. 31.
 * @FileName: MemberController.java
 * @작성자 : 박성환
 * @설명 : 회원가입, 로그인 기능 구현
 */

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/member")
@Controller
public class MemberController {

	private final MemberService memberService;
	private final MemberMapper memberMapper;
	private final PasswordEncoder passwordEncoder;

	// 회원가입페이지 접근
	@GetMapping(value = "/joininfoform")
	public String memberForm(Model model) {

		model.addAttribute("memberFormDto", new MemberFormDto());

		return "member/joininfoform";
	}

	// 회원가입 진행
	@PostMapping(value = "joininfoform")
	public String memberForm(@Valid MemberFormDto memberFormDto, BindingResult bindingResult, Model model) {
		if (bindingResult.hasErrors()) {

			for (ObjectError allError : bindingResult.getAllErrors()) {
				System.out.println(allError.toString());
			}
			log.info("bindingResult Error");
			return "member/joininfoform";
		}

		try {
						
			Member member = Member.createMember(memberFormDto, passwordEncoder);
			memberService.saveMember(member);
			log.info("try Error");
		} catch (IllegalStateException e) {
			log.info("catch Error");
			log.error("error:", e);
			model.addAttribute("errorMessage", e.getMessage());
			return "member/joininfoform";
		}

		return "redirect:/";
	}

	// 회원가입 아이디 중복 체크 AJAX
	@ResponseBody
	@GetMapping("/check")
	public String checkId(@RequestParam("checkid") String checkId) {

		String result = "1";

		Member member = memberMapper.findById(checkId);

		if (member == null)
			result = "0";

		return result;

	}

	// 로그인
	@GetMapping("/login")
	public String login(@RequestParam(value = "mId", required = false) String mId,
			@RequestParam(value = "error", required = false) String error,
			@RequestParam(value = "exception", required = false) String exception, Model model) {

		/* 에러와 예외를 모델에 담아 view resolve */
		model.addAttribute("mId", mId);
		model.addAttribute("error", error);
		model.addAttribute("exception", exception);
		return "/member/login";

	}

	// 로그인 에러페이지 접근
	@GetMapping(value = "/login/error")
	public String loginError(Model model) {
		model.addAttribute("loginErrorMsg", "아이디 또는 비밀번호를 확인해주세요.");
		return "/member/memberLoginForm";
	}

	// Secuirty 로그아웃
	@GetMapping(value = "/logout")
	public String logoutPage(HttpServletRequest request, HttpServletResponse response) {
		new SecurityContextLogoutHandler().logout(request, response,
				SecurityContextHolder.getContext().getAuthentication());
		return "redirect:/member/login";
	}

	// id, pw Page
	@GetMapping(value = "/findIdPwPage")
	public String findIdPwPage(Model model) {

		return "/member/findidpwpage";
	}
	
	// find id,pw page
	@PostMapping(value = "/findIdPwPage")
	public String findIdPwPage(@RequestParam("mName") String mName,
			@RequestParam("mBirth") Integer mBirth, Model model) {
		
		log.info(mName);
		log.info(mBirth.toString());
		
		Member findMember = memberMapper.findByNameBirth(mName, mBirth.toString());
		
		if(findMember==null) {
			log.info("fail");
			return "/member/findidpwpage";
		}
		log.info("before");
		
		model.addAttribute("findMember", findMember);
		
		log.info("after");
		
		
		
		return "/member/findidpwpage";
	}
}
