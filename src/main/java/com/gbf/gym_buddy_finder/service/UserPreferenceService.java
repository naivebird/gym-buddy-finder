package com.gbf.gym_buddy_finder.service;

import com.gbf.gym_buddy_finder.dto.UserPreferenceDto;
import com.gbf.gym_buddy_finder.repository.UserPreferenceRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserPreferenceService {
    public final UserPreferenceRepository userPreferenceRepository;

    public UserPreferenceService(UserPreferenceRepository userPreferenceRepository) {
        this.userPreferenceRepository = userPreferenceRepository;
    }
    public List<UserPreferenceDto> getUserPreferences(Long id) {
        return userPreferenceRepository.findUserPreferencesById(id);
    }
}
