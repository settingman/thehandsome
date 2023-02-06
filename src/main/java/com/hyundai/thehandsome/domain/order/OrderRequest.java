package com.hyundai.thehandsome.domain.order;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

/**
 * @filename OrderRequest
 * @author 최태승 
 * @since 2023.02.06
 * 주문 기능(Request)을 위해 만든 DTO
 * 주문 기능에 필요한 DB를 가져옴
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.06  	최태승        최초 생성
 * </pre>
 */


@Data
@AllArgsConstructor
@NoArgsConstructor
public class OrderRequest {
    private String oicount; // 상품수량
    private String oreceiver; // 수령인
    private String ophone; // 주문자 전화번호
    private String ozipcode; // 우편번호
    private String oaddress1; // 주소1
    private String oaddress2; // 주소2
    private String omemo; // 메모
    private String otel; // 연락처
    private String cpid; // 쿠폰아이디
    private String oafterPrice; // 이후가격
    private String obeforePrice; // 이전가격
    private String mmileage; // 마일리지
    private String oemail; // 이메일

    private String pmmethod; // 결제방식
    private String pmcompany; // 지불회사

}