package com.gbf.gym_buddy_finder.controller;


import com.gbf.gym_buddy_finder.model.Gym;
import com.gbf.gym_buddy_finder.service.GymService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/v1/gym")
@CrossOrigin(origins = "http://localhost:3000")
public class GymController {

    @Autowired
    public GymService gymService;

    @GetMapping("/")
    public ResponseEntity<List<Gym>> getAllGyms() {
        return gymService.getAllGyms();
    }

}
