import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.mybatis.spring.boot.test.autoconfigure.AutoConfigureMybatis;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import com.hyundai.thehandsome.Vo.CartVO;
import com.hyundai.thehandsome.mapper.CartMapper;
import com.hyundai.thehandsome.domain.cart.Cart;

/**
 * @filename CartMapperTest
 * @author 최태승 
 * @since 2023.02.12
 * CartMapper 테스트 파일
 * JUnit4 사용
 * 
 * <pre>
 * 수정일        	수정자       			수정내용
 * ----------  --------    ---------------------------
 * 2023.02.12  	최태승        최초 생성 
 * </pre>
 */

@RunWith(SpringRunner.class)
@SpringBootTest
@AutoConfigureTestDatabase
public class CartMapperTest {

    @Autowired
    private CartMapper cartMapper;

    @Test
    public void testSelectList() {
        String mid = "testuser";
        List<CartVO> cartList = cartMapper.selectList(mid);
        assertNotNull(cartList);
        assertEquals(3, cartList.size());
    }

    @Test
    public void testInsert() {
        Cart cart = new Cart();
        cart.setMid("testuser");
        cart.setPsid("1234_56");
        cart.setPquantity(1);
        cart.setPsize("S");
        cart.setPccolorcode("RED");
        cartMapper.insert(cart);
        int count = cartMapper.checkCart("testuser", "1234_56");
        assertEquals(1, count);
    }

    @Test
    public void testDelete() {
        String mid = "testuser";
        String psid = "1234_56";
        cartMapper.delete(mid, psid);
        int count = cartMapper.checkCart(mid, psid);
        assertEquals(0, count);
    }

    @Test
    public void testUpdate() {
        String mid = "testuser";
        String psid = "1234_56";
        int pquantity = 2;
        String psize = "M";
        String pccolorcode = "BLUE";
        cartMapper.update(mid, psid, pquantity, psize, pccolorcode);
        CartVO cart = cartMapper.selectList(mid).get(0);
        assertEquals(pquantity, cart.getPquantity());
        assertEquals(psize, cart.getPsize());
        assertEquals(pccolorcode, cart.getPccolorcode());
    }
}
