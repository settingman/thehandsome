package com.hyundai.thehandsome.domain.member;

import java.sql.Date;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotEmpty;

import org.hibernate.validator.constraints.Length;

import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

/**
 * @since   : 2023. 2. 3.
 * @FileName: MemberFormDto.java
 * @author  : 박성환
 * @설명    : @

 * <pre>
 *   수정일         수정자               수정내용
 * ----------      --------    ---------------------------
 * 2023. 2. 3.     박성환      회원가입 화면에서 넘어오는 가입정보 DTO
 * </pre>
 */
@NoArgsConstructor
@Setter
@Getter
public class MemberFormDto {

	// 아이디 email 형식
	@NotBlank(message = "아이디는 필수 입력 값입니다.")
	private String mId;

	@NotBlank(message = "비밀번호는 필수 입력 값입니다.")
	@Length(min = 4, max = 16, message = "비밀번호는 4자 이상, 16자 이하로 입력해주세요.")
	private String mPassword;

	@NotBlank(message = "이름은 필수 입력 값입니다.")
	private String mName;

	@NotBlank(message = "번호는 필수 입력 값입니다.")
	private String mPhone;

	@NotEmpty(message = "이메일은 필수 입력 값입니다.")
	@Email(message = "이메일 형식으로 입력해주세요.")
	private String mEmail;

	@NotEmpty(message = "주소는 필수 입력 값입니다.")
	private String mZipCode;

	@NotEmpty(message = "주소는 필수 입력 값입니다.")
	private String mAddress1;

	@NotEmpty(message = "주소는 필수 입력 값입니다.")
	private String mAddress2;

	private Integer mBirth;

	private Integer mGender;

	@Builder
	public MemberFormDto(String mId, String mPassword, String mName, String mPhone, String mEmail, String mZipCode,
			String mAddress1, String mAddress2, Integer mBirth, Integer mGender) {
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
	}

}
