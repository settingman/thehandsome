package com.hyundai.thehandsome.controller.order;

import org.json.JSONObject;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import com.hyundai.thehandsome.domain.order.OrderRequest;
import com.hyundai.thehandsome.mapper.EventMapper;
import com.hyundai.thehandsome.service.OrderService;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

/**
 * @filename OrderRestController
 * @author 최태승 
 * @since 2023.02.05
 * 카카오페이 api 이용 결제 처리 
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.05  	최태승        최초 생성
 * </pre>
 */

@Slf4j
@RequiredArgsConstructor
@RequestMapping("/order")
@RestController
@Controller
public class OrderRestController {

    private final OrderService orderService;
    private final EventMapper eventMapper;

    // 결제진행

    /**
     * 데이터베이스에 결제내역을 저장하는 API로 성공시 1을리턴 실패시 0을 리턴합니다
     *
     * 카카오페이 의 1,2API를 모두 성공한 뒤 OrderRequest에 있는 이름에 맞춰 데이터를 BODY에 담아 넘겨줍니다.
     *
     * 예시 BODY :: 특이사항 ( ophone과 otel의 경우 11자리 제한으로 "-"를 빼고 전달해야합니다 )
     *{
     *    "oicount": 1,
     *    "oreceiver": "tester1",
     *    "ophone" : "01012344567",
     *    "ozipcode" : 35631,
     *    "oaddress1" : "서울특별시 어디엔가",
     *    "oaddress2" : "파주로 100동",
     *    "omemo" : "메모1",
     *    "otel" : "01012345678",
     *    "oemail" : "EMAIL@naver.com",
     *    "cpid" : "쿠폰이 30%할인",
     *    "oafterPrice" : 50000,
     *    "obeforePrice" : 30000,
     *    "mmileage": 300,
     *    "pmmethod": "0",
     *    "pmcompany" : "KAKAO COMP."
     * }
     *
     *
     */
    @PostMapping
    public ResponseEntity<Integer> pay(@RequestBody OrderRequest request){
        return ResponseEntity.ok().body(orderService.saveOrder(request));
    }
    
    


    //카카오페이 결제시스템 개발

    /**
     * 1. RequestParam에 존재하는 값들을 해당 이름으로 넘긴다.
     * 2. 리턴되는 값으로는 결제링크와 다음스텝을 위해 필요한 파라미터들을 같이 넘긴다. ( 이때 파라미터들을 로컬스토리지등에 저장하여 결제완료 후 다음 API에 전송한다 )
     * @return
     */
    @GetMapping(value = "/pay")
    public String kakaoPay(
    		@RequestParam(value="cid") String cid, 
    		@RequestParam(value="partner_order_id") String partner_order_id, 
    		@RequestParam(value="partner_user_id") String partner_user_id,
            @RequestParam(value="quantity") String quantity, 
            @RequestParam(value="tax_free_amount") String tax_free_amount,
            @RequestParam(value="item_name") String item_name, 
            @RequestParam(value="total_amount") String total_amount) {

        RestTemplate rt = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Authorization", "KakaoAK "+ "1f8c3166e297bbd66f98b2fdf4438725");
        httpHeaders.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();

        System.out.println(total_amount);
        
        

        params.add("cid", cid); // TC0ONETIME
        params.add("partner_order_id", partner_order_id);
        params.add("partner_user_id", partner_user_id);
        params.add("item_name", item_name);
        params.add("quantity", quantity);
        params.add("total_amount", total_amount);
        params.add("tax_free_amount", tax_free_amount);
        params.add("approval_url", "http://localhost:8080/order/complete"); // 원하는대로 수정가능
        params.add("cancel_url", "http://localhost:8080/?data=cancel"); // 원하는대로 수정가능
        params.add("fail_url", "http://localhost:8080/?data=fail"); // 원하는대로 수정가능

        HttpEntity<MultiValueMap<String, String>> kakaopay = new HttpEntity<>(params, httpHeaders);

        ResponseEntity<String> response = rt.exchange(
                "https://kapi.kakao.com/v1/payment/ready",
                HttpMethod.POST,
                kakaopay,
                String.class
        );

        log.info(response.toString());


        // Pay 리다이렉트 링크 가져오기
        JSONObject jo = new JSONObject(response.getBody());
        log.info(jo.toString());

        // tid : 결제고유번호 = 결제내역 확인용 코드
        /**
        next_redirect_app_url	String	요청한 클라이언트(Client)가 모바일 앱일 경우
        카카오톡 결제 페이지 Redirect URL
        next_redirect_mobile_url	String	요청한 클라이언트가 모바일 웹일 경우
        카카오톡 결제 페이지 Redirect URL
        next_redirect_pc_url	String	요청한 클라이언트가 PC 웹일 경우
        카카오톡으로 결제 요청 메시지(TMS)를 보내기 위한 사용자 정보 입력 화면 Redirect URL
        android_app_scheme	String	카카오페이 결제 화면으로 이동하는 Android 앱 스킴(Scheme)
        ios_app_scheme	String	카카오페이 결제 화면으로 이동하는 iOS 앱 스킴
        */

        // 적립금 저장
      //  String redirect_url = (String) jo.get("next_redirect_pc_url");

        return jo.toString();
//      redirect_url + "?tid=" + jo.get("tid") + "&cid=" + cid + "&partner_order_id=" + partner_order_id + "&partner_user_id=" + partner_user_id;
    }

    /**
     * 두번째 API (결제완료 API)
     * 첫번째 API 결제성공시 임시URL로 http://localhost:8080/?data=success로 보냅니다.
     * 해당 링크로 데이터가 넘어오면 첫번째 API에서 저장한 데이터와 data=success뒤에 붙는 pg_token 파라미터 값을 더해서 두번째 API의 파라미터로 전송합니다.
     *
     * 전송 후 성공시 결제수단에 따른 성공데이터가 리턴됩니다.
     * @return
     */
    @GetMapping(value = "/pay/end")
    public String kakaoPayEnd(@RequestParam(value="tid") String tid, @RequestParam(value="cid") String cid, @RequestParam(value="partner_order_id") String partner_order_id
                            ,@RequestParam(value="partner_user_id") String partner_user_id, @RequestParam(value="pg_token") String pg_token) {
        RestTemplate rt = new RestTemplate();
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.add("Authorization", "KakaoAK "+ "1f8c3166e297bbd66f98b2fdf4438725");
        httpHeaders.add("Content-type", "application/x-www-form-urlencoded;charset=utf-8");

        MultiValueMap<String, String> params = new LinkedMultiValueMap<>();

        params.add("cid", cid);
        params.add("partner_order_id", partner_order_id);
        params.add("partner_user_id", partner_user_id);
        params.add("tid", tid);
        params.add("pg_token", pg_token);

        HttpEntity<MultiValueMap<String, String>> kakaopay = new HttpEntity<>(params, httpHeaders);

        ResponseEntity<String> response = rt.exchange(
                "https://kapi.kakao.com/v1/payment/approve",
                HttpMethod.POST,
                kakaopay,
                String.class
        );

        log.info(response.toString());

        JSONObject jo = new JSONObject(response.getBody());
        System.out.println(jo);

        return jo.toString();
    }
    
    @PostMapping(value = "/save")
	public ResponseEntity<Integer> memberForm(@RequestBody OrderRequest orderRequest) {
        System.out.println(orderRequest);

        return ResponseEntity.ok().body(orderService.saveOrder(orderRequest));

	}
}
