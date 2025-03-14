package com.mongkol.fantasyfootball.dao;

import com.mongkol.fantasyfootball.entity.Player;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "players")
public interface PlayerRepository extends JpaRepository<Player, Integer> {
}
