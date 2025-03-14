package com.mongkol.fantasyfootball.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Table(name = "Player")
@Getter @Setter @NoArgsConstructor @ToString
public class Player {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Integer id;

    @Column(name = "name")
    private String name;

    @Column(name = "team")
    private String team;

    @Column(name = "position")
    private String position;

    @Column(name = "price")
    private double price;

    @Column(name = "total_point")
    private int totalPoints;

    @Column(name = "form")
    private double form;

    public Player(Integer id, String name, String team, String position, double price, int totalPoints, double form) {
        this.id = id;
        this.name = name;
        this.team = team;
        this.position = position;
        this.price = price;
        this.totalPoints = totalPoints;
        this.form = form;
    }
}
