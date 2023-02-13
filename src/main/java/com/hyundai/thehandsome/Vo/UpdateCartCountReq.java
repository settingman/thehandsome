package com.hyundai.thehandsome.Vo;

import lombok.Data;

/**
 * @filename UpdateCartCountReq
 * @author 최태승 
 * @since 2023.02.11
 * 장바구니 수량 변경
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.11  	최태승        최초 생성 
 * </pre>
 */


@Data
public class UpdateCartCountReq {

    private String mid;
    private String psId;
    private int count;
    
    public void convert(int countNow) {
        this.count = count + countNow;
    }
}
