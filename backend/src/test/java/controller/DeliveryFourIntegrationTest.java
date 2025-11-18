package controller;

import java.util.Map;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.web.servlet.MockMvc;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.replayce.backend.ReplayceBackendApplication;
import com.replayce.backend.model.Product;
// ...

@SpringBootTest(classes = ReplayceBackendApplication.class) 
@AutoConfigureMockMvc
@ActiveProfiles("test")
public class DeliveryFourIntegrationTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ObjectMapper objectMapper;

    private final String TEST_USERNAME = "testuser";
    private Long productIdA;
    private Long productIdB;

@SuppressWarnings("unused")
@BeforeEach
void initializeProducts() throws Exception {
        
        Product productA = new Product("Test Album A", "Test Artist A", 2021, "New", 29.99, "Description A", "Category A", "imageUrlA");
        String productAJson = objectMapper.writeValueAsString(productA);

        String responseA = mockMvc.perform(post("/api/products") 
                .contentType(MediaType.APPLICATION_JSON)
                .content(productAJson))
                .andExpect(status().isOk()) 
                .andReturn()
                .getResponse()
                .getContentAsString();
        
        productIdA = objectMapper.readTree(responseA).get("id").asLong();

        Product productB = new Product("Test Album B", "Test Artist B", 2022, "Used", 19.99, "Description B", "Category B", "imageUrlB");
        String productBJson = objectMapper.writeValueAsString(productB);

        String responseB = mockMvc.perform(post("/api/products")
                .contentType(MediaType.APPLICATION_JSON)
                .content(productBJson))
                .andExpect(status().isOk())
                .andReturn()
                .getResponse()
                .getContentAsString();
        
        productIdB = objectMapper.readTree(responseB).get("id").asLong();
    }

    @Test
    void favoriteFlow_shouldSuccessfullyAddListAndRemoveFavorites() throws Exception {
        Map<String, Object> bodyA = Map.of("username", TEST_USERNAME, "productId", productIdA);
        Map<String, Object> bodyB = Map.of("username", TEST_USERNAME, "productId", productIdB);

        // Adiciona A
        mockMvc.perform(post("/api/favorites")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(bodyA)))
                .andExpect(status().isOk());

        // Adiciona B
        mockMvc.perform(post("/api/favorites")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(bodyB)))
                .andExpect(status().isOk());

        // Lista (espera 2)
        mockMvc.perform(get("/api/favorites") 
                .param("username", TEST_USERNAME))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(2))
                .andExpect(jsonPath("$[?(@.product.id == %d)]", productIdA).exists())
                .andExpect(jsonPath("$[?(@.product.id == %d)]", productIdB).exists());

        // Remove A
        mockMvc.perform(delete("/api/favorites") 
                .param("username", TEST_USERNAME)
                .param("productId", productIdA.toString()))
                .andExpect(status().isNoContent());

        // Lista (espera 1)
        mockMvc.perform(get("/api/favorites")
                .param("username", TEST_USERNAME))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(1))
                .andExpect(jsonPath("$[0].product.id").value(productIdB));
    }
    
    @Test
    void cartFlow_shouldSuccessfullyAddListAndRemoveCartItems() throws Exception {
        Map<String, Object> bodyA = Map.of("username", TEST_USERNAME, "productId", productIdA);
        Map<String, Object> bodyB = Map.of("username", TEST_USERNAME, "productId", productIdB);

        // Adiciona A
        mockMvc.perform(post("/api/cart/add") 
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(bodyA)))
                .andExpect(status().isOk());

        // Adiciona B
        mockMvc.perform(post("/api/cart/add")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(bodyB)))
                .andExpect(status().isOk());

        // Lista (espera 2)
        mockMvc.perform(get("/api/cart")
                .param("username", TEST_USERNAME))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(2))
                .andExpect(jsonPath("$[?(@.product.id == %d)]", productIdA).exists())
                .andExpect(jsonPath("$[?(@.product.id == %d)]", productIdB).exists());

        // Remove A
        mockMvc.perform(delete("/api/cart")
                .param("username", TEST_USERNAME)
                .param("productId", productIdA.toString()))
                .andExpect(status().isNoContent());

        // Lista (espera 1)
        mockMvc.perform(get("/api/cart")
                .param("username", TEST_USERNAME))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(1))
                .andExpect(jsonPath("$[0].product.id").value(productIdB));
    }

    @Test
    void addToCart_ShouldReturnExistingCartItem_OnDuplication() throws Exception {
        Map<String, Object> body = Map.of("username", TEST_USERNAME, "productId", productIdA);

        // Adiciona o primeiro item
        mockMvc.perform(post("/api/cart/add")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(body)))
                .andExpect(status().isOk());

        // Tenta adicionar o mesmo item
        mockMvc.perform(post("/api/cart/add")
                .contentType(MediaType.APPLICATION_JSON)
                .content(objectMapper.writeValueAsString(body)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.product.id").value(productIdA));

        // Lista (espera 1)
        mockMvc.perform(get("/api/cart")
                .param("username", TEST_USERNAME))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.length()").value(1));
    }
}
