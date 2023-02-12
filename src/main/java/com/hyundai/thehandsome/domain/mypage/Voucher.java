package com.hyundai.thehandsome.domain.mypage;

import lombok.Getter;
import lombok.Setter;

/**
 * @since   : 2023. 2. 8.
 * @FileName: Voucher.java
 * @author  : 박성환
 * @설명    : 쿠폰 객체

 * <pre>
 *   수정일         수정자               수정내용
 * ----------      --------    ---------------------------
 * 2023. 2. 5.     박성환      최초생성
 * </pre>
 */
@Getter
@Setter
public class Voucher {
	public String startdate;
	public String description;
	public String voucherCode;
	public String name;
	public Integer value;
	public String usedate;
	public String enddate;
	public String currency;

	public Voucher(String startdate, String description, String voucherCode, String name, Integer value, String usedate,
			String enddate, String currency) {
		this.startdate = startdate;
		this.description = description;
		this.voucherCode = voucherCode;
		this.name = name;
		this.value = value;
		this.usedate = usedate;
		this.enddate = enddate;
		this.currency = currency;
	}

}
