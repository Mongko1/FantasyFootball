package com.mongkol.fantasyfootball.dao;

import com.mongkol.fantasyfootball.entity.Team;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(path = "teams")
public interface TeamRepository extends JpaRepository<Team, Integer> {
}
