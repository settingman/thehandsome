package com.hyundai.thehandsome.domain.cart;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Cart {
	private String mid;
	private String pSid;
	private Integer pQuantity;
}
