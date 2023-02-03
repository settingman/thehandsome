package com.hyundai.thehandsome.security.dto;

import java.util.List;
import java.util.Map;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.oauth2.core.user.OAuth2User;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import lombok.extern.slf4j.Slf4j;

/**
 * @since : 2023. 2. 3.
 * @FileName: SecurityMember.java
 * @author : 박성환
 * @설명 : @
 * 
 *     <pre>
 *   수정일         수정자               수정내용
 * ----------      --------    ---------------------------
 * 2023. 2. 3.     박성환      Principal User 사용자 정의
 *     </pre>
 */
@Slf4j
@Getter
@Setter
@ToString
public class SecurityMember extends User implements OAuth2User {

	private String mId;
	private String mName;
	private String password;
	private Map<String, Object> OA2_attr;

// 구성자 설정
	public SecurityMember(String username, String password, List<GrantedAuthority> authorities) {

		super(username, password, authorities);
		this.mId = username;
		this.password = password;
	}

	// ClubOAuth2UserDetailsService 용 구성자
	public SecurityMember(String username, String password, List<GrantedAuthority> authorities,
			Map<String, Object> OA2_attr) {
		this(username, password, authorities);
		this.OA2_attr = OA2_attr;
	}// end ClubAuthMemberDTO

	@Override
	public Map<String, Object> getAttributes() {
		// TODO Auto-generated method stub
		return OA2_attr;
	}

	@Override
	public String getName() {
		// TODO Auto-generated method stub
		return null;
	}
}
