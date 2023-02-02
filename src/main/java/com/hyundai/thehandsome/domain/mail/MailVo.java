package com.hyundai.thehandsome.domain.mail;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

/**
 * @Date : 2023. 2. 2.
 * @FileName: MailVo.java
 * @작성자 : 박성환
 * @설명 : 메일서비스 VO
 */

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MailVo {
	private String toAddress; // 받는 이메일 주소
	private String title; // 이메일 제목
	private String message; // 이메일 내용
	private String fromAddress; // 보내는 이메일 주소

}
