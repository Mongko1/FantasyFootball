package com.mongkol.fantasyfootball.controller;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.mongkol.fantasyfootball.service.FplDataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class PlayerController {
    @Autowired
    private FplDataService fplDataService;

    @GetMapping("/test")
    public String test() throws JsonProcessingException {
        fplDataService.fetchAndStoreFplData();
        return "Test";
    }
}
