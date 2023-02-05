package com.hyundai.thehandsome.domain.mypage;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Voucher {
	public String startDate;
	public String description;
	public String voucherCode;
	public String name;
	public Integer value;
	public String useDate;
	public String endDate;
	public String currency;
	
	public Voucher(String startDate, String description, String voucherCode, String name, Integer value, String useDate,
			String endDate, String currency) {
		this.startDate = startDate;
		this.description = description;
		this.voucherCode = voucherCode;
		this.name = name;
		this.value = value;
		this.useDate = useDate;
		this.endDate = endDate;
		this.currency = currency;
	}

	

}
