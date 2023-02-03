package com.hyundai.thehandsome.domain.member;

import java.sql.Date;

import org.springframework.security.crypto.password.PasswordEncoder;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


/**
 * @since   : 2023. 2. 3.
 * @FileName: Member.java
 * @author  : 박성환
 * @설명    : 데이터베이스 Membe Table 주입 객체

 * <pre>
 *   수정일         수정자               수정내용
 * ----------      --------    ---------------------------
 * 2023. 2. 3.     박성환      DateBase Member Object
 * </pre>
 */
@NoArgsConstructor
@Getter
@Setter
public class Member {

	private String mId;

	private String mPassword;

	private String mName;

	private String mPhone;

	private String mEmail;

	private String mZipCode;

	private String mAddress1;

	private String mAddress2;

	private Date mBirth;

	private Integer mGender;

	private MemberRole mRole;

	@Builder
	public Member(String mId, String mPassword, String mName, String mPhone, String mEmail, String mZipCode,
			String mAddress1, String mAddress2, Date mBirth, Integer mGender, MemberRole mRole) {
		this.mId = mId;
		this.mPassword = mPassword;
		this.mName = mName;
		this.mPhone = mPhone;
		this.mEmail = mEmail;
		this.mZipCode = mZipCode;
		this.mAddress1 = mAddress1;
		this.mAddress2 = mAddress2;
		this.mBirth = mBirth;
		this.mGender = mGender;
		this.mRole = mRole;
	}

	
	public static Member createMember(MemberFormDto memberFormDto, PasswordEncoder passwordEncoder) {
		
		String date = memberFormDto.getMBirth().toString();
		String sqldate = date.substring(0,4)+"-"+date.substring(4,6)+"-"+date.substring(6,8);
		System.out.println(sqldate);
		
		
		Member member = Member.builder().mId(memberFormDto.getMId())
				.mPassword(passwordEncoder.encode(memberFormDto.getMPassword())) // 암호화처리
				.mName(memberFormDto.getMName()).mPhone(memberFormDto.getMPhone()).mEmail(memberFormDto.getMEmail())
				.mZipCode(memberFormDto.getMZipCode()).mAddress1(memberFormDto.getMAddress1())
				.mAddress2(memberFormDto.getMAddress2()).mBirth(Date.valueOf(sqldate))
				.mGender(memberFormDto.getMGender()).mRole(MemberRole.USER).build();
		return member;
	}

	@Override
	public String toString() {
		return "Member [mId=" + mId + ", mPassword=" + mPassword + ", mName=" + mName + ", mPhone=" + mPhone
				+ ", mEmail=" + mEmail + ", mZipCode=" + mZipCode + ", mAddress1=" + mAddress1 + ", mAddress2="
				+ mAddress2 + ", mBirth=" + mBirth + ", mGender=" + mGender + ", mRole=" + mRole + "]";
	}
	
	public void updatePassword(String password){
        this.mPassword = password;
    }




}
