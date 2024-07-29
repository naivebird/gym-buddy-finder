package com.gbf.gym_buddy_finder.controller;

import com.gbf.gym_buddy_finder.dto.UserPreferenceDto;
import com.gbf.gym_buddy_finder.service.UserPreferenceService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/preferences")
@CrossOrigin(origins = "http://localhost:3000")
public class UserPreferenceController {
    private final UserPreferenceService userPreferenceService;

    public UserPreferenceController(UserPreferenceService userPreferenceService) {
        this.userPreferenceService = userPreferenceService;
    }

    @GetMapping("{id}")
    public List<UserPreferenceDto> getUserPreferences(@PathVariable Long id) {
        return userPreferenceService.getUserPreferences(id);
    }
}
