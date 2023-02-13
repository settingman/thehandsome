package com.hyundai.thehandsome.domain.mypage;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

/**
 * @since : 2023. 2. 13.
 * @FileName: Order.java
 * @author : 박성환
 * @설명 : 오더 객체
 * 
 *     <pre>
 *   수정일         수정자               수정내용
 * ----------      --------    ---------------------------
 * 2023. 2. 13.     박성환      최초생성
 *     </pre>
 */
@Getter
@Setter
@ToString
public class Order {
	public String OrderID;
	public Integer OrderPrice;

	public Order(String orderID, Integer oRderPrice) {
		OrderID = orderID;
		OrderPrice = oRderPrice;
	}

}
