package com.hyundai.thehandsome.service;

import java.sql.Date;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.client.userinfo.DefaultOAuth2UserService;
import org.springframework.security.oauth2.client.userinfo.OAuth2UserRequest;
import org.springframework.security.oauth2.core.OAuth2AuthenticationException;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import com.hyundai.thehandsome.domain.member.Member;
import com.hyundai.thehandsome.domain.member.MemberRole;
import com.hyundai.thehandsome.mapper.MemberMapper;
import com.hyundai.thehandsome.security.dto.SecurityMember;

import lombok.extern.slf4j.Slf4j;

/**
 * @Date : 2023. 2. 1.
 * @FileName: MemberOauthService.java
 * @작성자 : 박성환
 * @설명 : 소셜로그인 서비스
 */
@Slf4j
@Service
public class MemberOauthService extends DefaultOAuth2UserService {

	@Autowired
	private MemberService memberService;

	@Autowired
	private MemberMapper memberMapper;

	@Autowired
	private PasswordEncoder passwordEncoder;

	// 구글 사용자 데이터베이스 저장
	private Member saveSocialMember(String mId) throws SQLException {
		log.info("saveSocialMember 시작");
		// 기본에 동일한 이메일로 가입한 회원인지 확인
		Member socialMember = memberMapper.findById(mId);

		// 기본 회원이면 회원정보 반환
		if (!(socialMember == null)) {
			log.info("기존 회원");
			return socialMember;
		}

		// 가입한적이 없다면 추가 패스워드 1111 이름은 이메일주소
		socialMember = Member.builder().mId(mId).mPassword(passwordEncoder.encode("1111")) // 암호화처리
				.mName("구글사용자").mPhone("google").mEmail(mId).mZipCode("gzip").mAddress1("gaddress1")
				.mAddress2("gaddress2").mBirth(new Date(230101)).mGender(1).mRole(MemberRole.USER).build();

		memberService.saveMember(socialMember);

		return socialMember;
	}

	// 구글로그인 사용자 -> SecurityMember
	@Override
	public OAuth2User loadUser(OAuth2UserRequest userRequest) throws OAuth2AuthenticationException {
		log.info("-------loaduser-------------");
		log.info("userRequest" + userRequest);

		String clienName = userRequest.getClientRegistration().getClientName();

		// 인증 제공자 출력
		log.info("clienName" + clienName);
		log.info(userRequest.getAdditionalParameters().toString());

		// 사용자 정보 가져오기 구글에서 허용한 API 범위
		OAuth2User oAuth2User = super.loadUser(userRequest);
		log.info("======oAuth2User===============");
		oAuth2User.getAttributes().forEach((k, v) -> {
			log.info(k + " : " + v);
		});

		// 신규회원 테이블에 저장 시작
		String email = null;
		if (clienName.equals("Google")) {
			email = oAuth2User.getAttribute("email");
		} // end if
		log.info("구글 인증 확인");
		log.info("email : " + email);

		try {
			Member socialMember = saveSocialMember(email);
			log.info("---saveSocialMember--");
			log.info(socialMember.toString());
			List<GrantedAuthority> authorities = new ArrayList<>();
			authorities.add(new SimpleGrantedAuthority("ROLE_" + socialMember.getMRole()));
			SecurityMember securityMember = new SecurityMember(socialMember.getMId(), socialMember.getMPassword(),
					authorities, oAuth2User.getAttributes());

			securityMember.setMName(socialMember.getMName());
			securityMember.setPassword(socialMember.getMPassword());

			// clubAuthMemberDTO --> UserDetails 반환
			log.info("OAuth2User 를 clubAuthMemberDTO");
			log.info(securityMember.toString());
			return securityMember;

		} catch (SQLException e) {
			log.info("saveSocialMember error");
			log.info("에러 ");
			log.info(e.toString());
		}

		// 구글에서 정보 가져온 oAuth2User
		return oAuth2User;
	}
}