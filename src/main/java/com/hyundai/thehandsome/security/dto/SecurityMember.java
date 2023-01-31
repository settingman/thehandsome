package com.hyundai.thehandsome.security.dto;

import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.User;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SecurityMember extends User {
	private static final long serialVersionUID = 1L;
	private String mId;
	private String mName;

// 구성자 설정
	public SecurityMember(String username, String password, List<GrantedAuthority> authorities) {
// password 는 부모클래스 사용
		super(username, password, authorities);
		this.mId = username;
	}
}
