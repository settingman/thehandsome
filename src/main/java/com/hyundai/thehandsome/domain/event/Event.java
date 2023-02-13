package com.hyundai.thehandsome.domain.event;

import java.sql.Date;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @filename UpdateCartCountReq
 * @author 최태승 
 * @since 2023.02.11
 * 쿠폰 이벤트
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.8  	최태승        최초 생성 
 * </pre>
 */

@Data
@AllArgsConstructor
@NoArgsConstructor
public class Event {
	private Integer eNo;

	private String eTitle;

	private String eContent;

	private Date eIssueDate;

	private Date eExprieDate;
	
	private Integer eLimitCount;

	private Integer eCount;

	private String eImg;

	private Integer eDiscount;

	private Integer eStatus;

	private String eDetailImg;

	private String eCouponTitle;
	
	private String cPid;

}
