package com.mongkol.fantasyfootball.service;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongkol.fantasyfootball.dao.PlayerRepository;
import com.mongkol.fantasyfootball.dao.TeamRepository;
import com.mongkol.fantasyfootball.entity.Player;
import com.mongkol.fantasyfootball.entity.Team;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.ArrayList;
import java.util.List;

@Service
public class FplDataService {
    private PlayerRepository playerRepository;
    private TeamRepository teamRepository;
    private ObjectMapper objectMapper;

    public FplDataService(PlayerRepository playerRepository, TeamRepository teamRepository, ObjectMapper objectMapper) {
        this.playerRepository = playerRepository;
        this.teamRepository = teamRepository;
        this.objectMapper = objectMapper;
    }

    @Scheduled(cron = "0 0 0 * * *")
    public void fetchAndStoreFplData() throws JsonProcessingException {
        String url = "https://fantasy.premierleague.com/api/bootstrap-static/";
        RestTemplate restTemplate = new RestTemplate();
        String jsonString = restTemplate.getForObject(url, String.class);

        JsonNode rootNode = objectMapper.readTree(jsonString);
        JsonNode playersNode = rootNode.get("elements");

        List<Player> playerList = new ArrayList<>();
        for (JsonNode player : playersNode) {
            Player p = new Player(
                    null,
                    player.get("web_name").asText(),
                    player.get("team").asText(),
                    player.get("element_type").asText(),
                    player.get("now_cost").asDouble() / 10.0,
                    player.get("total_points").asInt(),
                    player.get("form").asDouble()
            );
            playerList.add(p);
        }

        JsonNode teamsNode = rootNode.get("teams");
        List<Team> teamList = new ArrayList<>();
        for (JsonNode team : teamsNode) {
            Team t = new Team(
                    null,
                    team.get("code").asInt(),
                    team.get("name").asText(),
                    team.get("short_name").asText(),
                    team.get("position").asInt(),
                    team.get("strength").asInt(),
                    team.get("strength_overall_home").asInt(),
                    team.get("strength_overall_away").asInt()
            );
            teamList.add(t);
        }

        teamRepository.deleteAll();
        teamRepository.saveAll(teamList);

        playerRepository.deleteAll();
        playerRepository.saveAll(playerList);
    }
}
