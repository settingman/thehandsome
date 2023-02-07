package com.hyundai.thehandsome.controller.member;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.validation.Valid;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.logout.SecurityContextLogoutHandler;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.hyundai.thehandsome.domain.mail.MailVo;
import com.hyundai.thehandsome.domain.member.Member;
import com.hyundai.thehandsome.domain.member.MemberFormDto;
import com.hyundai.thehandsome.mapper.MemberMapper;
import com.hyundai.thehandsome.service.MailServiceImpl;
import com.hyundai.thehandsome.service.MemberService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * @since : 2023. 2. 5.
 * @FileName: MemberRestController.java
 * @author : 박성환
 * @설명 : Member RestController
 * 
 *     <pre>
 *   수정일         수정자               수정내용
 * ----------      --------    ---------------------------
 * 2023. 2. 5.     박성환      최초생성
 *     </pre>
 */
@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping("/member")
public class MemberRestController {

	private final MemberMapper memberMapper;
	private final MailServiceImpl mailService;

	// 회원가입 아이디 중복 체크 AJAX
	@GetMapping("/check")
	public String checkId(@RequestParam("checkid") String checkId) {
		Member member = memberMapper.findById(checkId);
		return member == null ? "0" : "1";
	}

	// 비밀번호 찾기 AJAX
	@GetMapping("/findPw")
	public String findPassword(@RequestParam("mName") String mName, @RequestParam("mId") String mId) {
		Member member = memberMapper.findByNameId(mName, mId);
		if (member == null) {
			log.info("Member not found");
			return "/member/findidpwpage";
		}
		String tmpPassword = mailService.getTmpPassword();

		/** 임시 비밀번호 저장 **/
		mailService.updatePassword(tmpPassword, mId);

		/** 메일 생성 & 전송 **/
		MailVo mail = mailService.createMail(tmpPassword, mId);
		mailService.sendMail(mail);

		log.info("Temporary password sent");
		return "S";
	}
}
