package com.mongkol.fantasyfootball.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "Team")
@Getter @Setter @NoArgsConstructor @ToString
public class Team {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "code")
    private Integer code;

    @Column(name = "name")
    private String name;

    @Column(name = "short_name")
    private String shortName;

    @Column(name = "position")
    private int position;

    @Column(name = "strength")
    private int strength;

    @Column(name = "strength_overall_home")
    private int strengthOvrHome;

    @Column(name = "strength_overall_away")
    private int strengthOvrAway;

    public Team(Integer id, Integer code, String name, String shortName, int position, int strength, int strengthOvrHome, int strengthOvrAway) {
        this.id = id;
        this.code = code;
        this.name = name;
        this.shortName = shortName;
        this.position = position;
        this.strength = strength;
        this.strengthOvrHome = strengthOvrHome;
        this.strengthOvrAway = strengthOvrAway;
    }
}
