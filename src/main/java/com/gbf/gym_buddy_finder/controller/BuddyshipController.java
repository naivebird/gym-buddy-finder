package com.gbf.gym_buddy_finder.controller;

import com.gbf.gym_buddy_finder.model.UserProfile;
import com.gbf.gym_buddy_finder.service.BuddyshipService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/buddy")
@CrossOrigin(origins = "http://localhost:3000")
public class BuddyshipController {
    private final BuddyshipService buddyshipService;

    public BuddyshipController(BuddyshipService buddyshipService) {
        this.buddyshipService = buddyshipService;
    }

    @GetMapping("/{id}")
    public List<UserProfile> getBuddiesById(@PathVariable(name = "id") Long id) {
        return buddyshipService.getBuddiesById(id);

    }

}
