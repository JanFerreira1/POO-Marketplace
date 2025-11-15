package com.replayce.backend.repository;

import com.replayce.backend.model.Favorite;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;
import java.util.Optional;

public interface FavoriteRepository extends JpaRepository<Favorite, Long> {
	List<Favorite> findByUsername(String username);
	Optional<Favorite> findByUsernameAndProduct_Id(String username, Long productId);
}
